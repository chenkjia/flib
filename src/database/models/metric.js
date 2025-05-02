/**
 * 技术指标数据模型
 * 定义各类技术指标的数据结构
 */

/**
 * 移动平均线指标模型
 * @typedef {Object} dayMetric
 * @property {string} date - 计算日期，格式：YYYY-MM-DD
 * @property {number} maShort - 短期移动平均线
 * @property {number} maMiddle - 长期移动平均线
 * @property {number} maLong
 */

module.exports = {
    dayMetric: null,
};