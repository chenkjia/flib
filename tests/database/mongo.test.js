const mongoose = require('mongoose');
const MongoDB = require('../../src/database/mongo');
const { StockList } = require('../../src/database/models/list');

describe('MongoDB 操作测试', () => {
    beforeAll(async () => {
        await MongoDB.connect();
    });

    afterAll(async () => {
        await mongoose.connection.close();
    });

    beforeEach(async () => {
        await StockList.deleteMany({});
    });

    const mockStock = {
        code: '000001',
        name: '平安银行',
        symbol: 'PAB',
        market: '主板',
        dayLine: [
            {
                date: '2024-01-01',
                open: 10.0,
                high: 10.5,
                low: 9.8,
                close: 10.2,
                volume: 1000000,
                amount: 10200000
            }
        ],
        dayMetric: [
            {
                date: '2024-01-01',
                ma: { ma5: 10.1, ma10: 10.2 },
                macd: { dif: 0.1, dea: 0.05, macd: 0.1 }
            }
        ],
        signal: [
            {
                buyTime: '2024-01-01 10:00:00',
                buyPrice: 10.0,
                buyVolume: 1000,
                buyAmount: 10000,
                sellTime: '2024-01-01 14:00:00',
                sellPrice: 10.2,
                sellVolume: 1000,
                sellAmount: 10200,
                profit: 200
            }
        ]
    };

    test('保存和获取股票列表', async () => {
        await MongoDB.saveList([mockStock]);
        const list = await MongoDB.getList();
        expect(list).toHaveLength(1);
        expect(list[0].code).toBe(mockStock.code);
    });

    test('获取日线数据', async () => {
        await MongoDB.saveList([mockStock]);
        const dayLines = await MongoDB.getDayLine(mockStock.code, '2024-01-01', '2024-01-02');
        expect(dayLines).toHaveLength(1);
        expect(dayLines[0].close).toBe(10.2);
    });

    test('获取技术指标', async () => {
        await MongoDB.saveList([mockStock]);
        const metrics = await MongoDB.getMetric(mockStock.code, '2024-01-01');
        expect(metrics).toHaveLength(1);
        expect(metrics[0].ma.ma5).toBe(10.1);
    });

    test('获取交易信号', async () => {
        await MongoDB.saveList([mockStock]);
        const signals = await MongoDB.getSignal(mockStock.code, '2024-01-01');
        expect(signals).toHaveLength(1);
        expect(signals[0].profit).toBe(200);
    });

    test('保存日线数据', async () => {
        await MongoDB.saveList([mockStock]);
        const newDayLine = {
            date: '2024-01-02',
            open: 10.2,
            high: 10.6,
            low: 10.1,
            close: 10.4,
            volume: 1100000,
            amount: 11200000
        };
        await MongoDB.saveDayLine(mockStock.code, [newDayLine]);
        const stock = await StockList.findOne({ code: mockStock.code });
        expect(stock.dayLine).toHaveLength(2);
    });

    test('保存技术指标', async () => {
        await MongoDB.saveList([mockStock]);
        const newMetric = {
            date: '2024-01-02',
            ma: { ma5: 10.2, ma10: 10.3 },
            macd: { dif: 0.12, dea: 0.06, macd: 0.12 }
        };
        await MongoDB.saveMetric(mockStock.code, [newMetric]);
        const stock = await StockList.findOne({ code: mockStock.code });
        expect(stock.dayMetric).toHaveLength(2);
    });

    test('保存交易信号', async () => {
        await MongoDB.saveList([mockStock]);
        const newSignal = {
            buyTime: '2024-01-02 10:00:00',
            buyPrice: 10.2,
            buyVolume: 1000,
            buyAmount: 10200,
            sellTime: '2024-01-02 14:00:00',
            sellPrice: 10.4,
            sellVolume: 1000,
            sellAmount: 10400,
            profit: 200
        };
        await MongoDB.saveSignal(mockStock.code, [newSignal]);
        const stock = await StockList.findOne({ code: mockStock.code });
        expect(stock.signal).toHaveLength(2);
    });
});