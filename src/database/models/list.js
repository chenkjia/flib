/**
 * 列表数据模型
 * 定义股票、指数等列表数据结构
 */

const { DayLine } = require('./dayLine');
const { dayMetric } = require('./metric');
const { Signal } = require('./signal');

/**
 * 股票列表模型
 * @typedef {Object} StockList
 * @property {string} code - 代码
 * @property {string} name - 名称
 * @property {string} symbol - 交易对
 * @property {string} market - 市场类型（主板、创业板、科创板、加密货币）
 * @property {Array<DayLine>} dayLine - 日线数据数组，包含开高低收量额等数据
 * @property {Array<dayMetric>} dayMetric - 日线指标数组，包含MA、MACD等技术指标
 * @property {Array<Signal>} signal - 交易信号数组，包含买卖点信息
 */

module.exports = {
    StockList: null
};