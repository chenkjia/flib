/**
 * 交易信号数据模型
 * 定义交易信号的数据结构
 */

/**
 * 基础交易信号模型
 * @typedef {Object} BaseSignal
 * @property {string} code - 股票代码
 * @property {string} date - 信号日期，格式：YYYY-MM-DD
 * @property {string} type - 信号类型（买入、卖出）
 * @property {string} source - 信号来源（策略名称）
 * @property {number} price - 信号价格
 * @property {number} strength - 信号强度（0-1）
 * @property {Object} metrics - 相关指标数据
 */

/**
 * 趋势信号模型
 * @typedef {Object} TrendSignal
 * @property {string} code - 股票代码
 * @property {string} date - 信号日期，格式：YYYY-MM-DD
 * @property {string} trend - 趋势方向（上升、下降、震荡）
 * @property {number} strength - 趋势强度（0-1）
 * @property {number} duration - 趋势持续天数
 * @property {Object} supportResistance - 支撑位和压力位
 */

/**
 * 突破信号模型
 * @typedef {Object} BreakoutSignal
 * @property {string} code - 股票代码
 * @property {string} date - 信号日期，格式：YYYY-MM-DD
 * @property {string} type - 突破类型（向上突破、向下突破）
 * @property {number} breakoutPrice - 突破价格
 * @property {number} volume - 突破成交量
 * @property {Object} confirmation - 突破确认指标
 */

/**
 * 组合信号模型
 * @typedef {Object} CompositeSignal
 * @property {string} code - 股票代码
 * @property {string} date - 信号日期，格式：YYYY-MM-DD
 * @property {Array<Object>} signals - 组成信号列表
 * @property {number} weight - 信号权重
 * @property {Object} correlation - 信号相关性分析
 */

module.exports = {
    BaseSignal: null, // 实际使用时需要替换为Mongoose Schema
    TrendSignal: null,
    BreakoutSignal: null,
    CompositeSignal: null
};