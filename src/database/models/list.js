const mongoose = require('mongoose');

const stockListSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    market: { type: String, required: true },
    dayLine: [{
        date: String,
        open: Number,
        high: Number,
        low: Number,
        close: Number,
        volume: Number,
        amount: Number
    }],
    hourLine: [{
        time: String,
        open: Number,
        high: Number,
        low: Number,
        close: Number,
        volume: Number,
        amount: Number
    }],
    dayMetric: [{
        date: String,
        ma: Object,
        macd: Object,
        kdj: Object,
        rsi: Object
    }],
    signal: [{
        buyTime: String,
        buyPrice: Number,
        buyVolume: Number,
        buyAmount: Number,
        sellTime: String,
        sellPrice: Number,
        sellVolume: Number,
        sellAmount: Number,
        profit: Number
    }]
});

const StockList = mongoose.model('StockList', stockListSchema);

module.exports = {
    StockList
};