/**
 * 技术指标数据模型
 * 定义各类技术指标的数据结构
 */

/**
 * 移动平均线指标模型
 * @typedef {Object} MAMetric
 * @property {string} code - 股票代码
 * @property {string} date - 计算日期，格式：YYYY-MM-DD
 * @property {number} ma5 - 5日移动平均线
 * @property {number} ma10 - 10日移动平均线
 * @property {number} ma20 - 20日移动平均线
 * @property {number} ma30 - 30日移动平均线
 * @property {number} ma60 - 60日移动平均线
 */

/**
 * MACD指标模型
 * @typedef {Object} MACDMetric
 * @property {string} code - 股票代码
 * @property {string} date - 计算日期，格式：YYYY-MM-DD
 * @property {number} dif - DIF值
 * @property {number} dea - DEA值
 * @property {number} macd - MACD值
 */

/**
 * KDJ指标模型
 * @typedef {Object} KDJMetric
 * @property {string} code - 股票代码
 * @property {string} date - 计算日期，格式：YYYY-MM-DD
 * @property {number} k - K值
 * @property {number} d - D值
 * @property {number} j - J值
 */

/**
 * RSI指标模型
 * @typedef {Object} RSIMetric
 * @property {string} code - 股票代码
 * @property {string} date - 计算日期，格式：YYYY-MM-DD
 * @property {number} rsi6 - 6日RSI
 * @property {number} rsi12 - 12日RSI
 * @property {number} rsi24 - 24日RSI
 */

/**
 * BOLL指标模型
 * @typedef {Object} BOLLMetric
 * @property {string} code - 股票代码
 * @property {string} date - 计算日期，格式：YYYY-MM-DD
 * @property {number} mid - 中轨线
 * @property {number} upper - 上轨线
 * @property {number} lower - 下轨线
 */

module.exports = {
    MAMetric: null, // 实际使用时需要替换为Mongoose Schema
    MACDMetric: null,
    KDJMetric: null,
    RSIMetric: null,
    BOLLMetric: null
};