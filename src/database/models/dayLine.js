/**
 * 日线数据模型
 * 定义股票日线行情数据结构
 */

/**
 * 日线数据模型
 * @typedef {Object} DayLine
 * @property {string} code - 股票代码
 * @property {string} date - 交易日期，格式：YYYY-MM-DD
 * @property {number} open - 开盘价
 * @property {number} high - 最高价
 * @property {number} low - 最低价
 * @property {number} close - 收盘价
 * @property {number} volume - 成交量
 */


module.exports = {
    DayLine: null
};