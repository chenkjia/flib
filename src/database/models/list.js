/**
 * 列表数据模型
 * 定义股票、指数等列表数据结构
 */

/**
 * 股票列表模型
 * @typedef {Object} StockList
 * @property {string} code - 股票代码
 * @property {string} name - 股票名称
 * @property {string} market - 市场类型（主板、创业板、科创板等）
 * @property {string} industry - 所属行业
 * @property {number} totalShares - 总股本
 * @property {number} circulatingShares - 流通股本
 * @property {string} listDate - 上市日期
 * @property {boolean} isActive - 是否活跃（未退市、未暂停）
 */


module.exports = {
    StockList: null
};