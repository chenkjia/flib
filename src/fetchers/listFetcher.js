const MongoDB = require('../database/mongo');
const logger = require('../utils/logger');

/**
 * 列表数据获取模块
 * 负责获取股票列表数据
 */

/**
 * 获取股票列表
 * @returns {Promise<Array>} 股票列表数据
 */
async function fetchList() {
    try {
        // 模拟一些股票数据
        const mockStocks = [
            {
                code: 'SH600000',
                name: '浦发银行',
                symbol: 'SPDB',
                market: '主板',
                dayLine: [],
                dayMetric: [],
                signal: []
            },
            {
                code: 'SZ300750',
                name: '宁德时代',
                symbol: 'CATL',
                market: '创业板',
                dayLine: [],
                dayMetric: [],
                signal: []
            },
            {
                code: 'SH688981',
                name: '中芯国际',
                symbol: 'SMIC',
                market: '科创板',
                dayLine: [],
                dayMetric: [],
                signal: []
            }
        ];

        // 保存到数据库，使用 ordered: false 选项，这样即使有重复的 code 也会继续处理其他记录
        await MongoDB.saveList(mockStocks);
        
        // 获取完整的股票列表
        const stockList = await MongoDB.getList();
        return stockList;
    } catch (error) {
        logger.error('获取股票列表失败:', error);
        throw error;
    }
}

module.exports = {
    fetchList,
};