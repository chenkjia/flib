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
}

/**
 * 获取所有的日线数据
 * 调用getList取得股票列表数据，循环调用fetchDayLine
 */
async function fetchAllDayLines() {
}


module.exports = {
    fetchDayLine,
    fetchMultiDayLines,
};