/**
 * 交易信号数据模型
 * 定义交易信号的数据结构
 */

/**
 * 基础交易信号模型
 * @typedef {Object} Signal
 * @property {string} code - 股票代码
 * @property {string} buyTime - 买入时间，格式：YYYY-MM-DD HH:mm:ss
 * @property {number} buyPrice - 买入价格
 * @property {number} buyVolume - 买入数量
 * @property {number} buyAmount - 买入金额
 * @property {string} sellTime - 卖出时间，格式：YYYY-MM-DD HH:mm:ss
 * @property {number} sellPrice - 卖出价格
 * @property {number} sellVolume - 卖出数量
 * @property {number} sellAmount - 卖出金额
 * @property {number} profit - 交易盈亏
 */

module.exports = {
    BaseSignal: null
};