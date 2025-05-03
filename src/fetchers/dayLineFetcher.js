const MongoDB = require('../database/mongo');
const logger = require('../utils/logger');
const axios = require('axios');
const config = require('../../config/api');

/**
 * 日线数据获取模块
 * 负责获取股票日线行情数据
 */

/**
 * 获取单个股票的日线数据
 * @param {string} stockCode - 股票代码
 * @param {string} startDate - 开始日期，格式：YYYY-MM-DD
 * @returns {Promise<Array>} 日线数据列表
 */
async function fetchDayLine(stockCode) {
    try {
        const url = `${config.baseURL}${config.endpoints.histoday}`;
        const params = {
            fsym: stockCode,    // 交易对基础货币，如 BTC
            tsym: 'USD',        // 计价货币
            allData: true,        // 获取全部数据
            aggregate: 1,       // 不进行数据聚合
            e: 'CCCAGG'        // 使用综合数据
        };

        const headers = {
            'authorization': `Apikey ${config.apiKey}`
        };

        logger.info(`正在获取 ${stockCode} 的日线数据`);
        logger.info('请求参数:', params);

        const response = await axios.get(url, { headers, params });

        if (!response.data || !response.data.Data || !response.data.Data.Data) {
            throw new Error('API 响应数据格式错误');
        }

        // 转换数据格式
        const dayLines = response.data.Data.Data.map(item => ({
            date: new Date(item.time * 1000).toISOString().split('T')[0],
            open: item.open,
            high: item.high,
            low: item.low,
            close: item.close,
            volume: item.volumefrom,
            amount: item.volumeto
        }));

        logger.info(`成功获取 ${stockCode} 的日线数据，共 ${dayLines.length} 条记录`);

        // 保存到数据库
        await MongoDB.saveDayLine(stockCode, dayLines);
        
        return dayLines;
    } catch (error) {
        logger.error(`获取 ${stockCode} 日线数据失败:`, error);
        throw error;
    }
}

/**
 * 获取所有的日线数据
 * 调用getList取得股票列表数据，循环调用fetchDayLine
 */
async function fetchAllDayLines() {
}

module.exports = {
    fetchDayLine,
    fetchAllDayLines
};