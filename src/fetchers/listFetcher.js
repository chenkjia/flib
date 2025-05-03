const MongoDB = require('../database/mongo');
const logger = require('../utils/logger');
const axios = require('axios');
const config = require('../../config/api');

/**
 * 列表数据获取模块
 * 负责获取加密货币列表数据
 */

/**
 * 获取单页加密货币列表数据
 * @param {number} page - 页码，从1开始
 * @param {number} limit - 每页数量，最大100
 * @returns {Promise<Array>} 加密货币列表数据
 */
async function fetchListPage(page = 1, limit = 100) {
    try {
        const url = `${config.baseURL}${config.endpoints.toplist}`;
        const params = {
            page,
            limit,
            tsym: 'USD'  // 以美元为计价单位
        };
        
        const headers = {
            'authorization': `Apikey ${config.apiKey}`
        };

        logger.info(`正在请求 API: ${url}`);
        logger.info('请求参数:', params);
        logger.info('请求头:', headers);

        const response = await axios.get(url, { 
            headers,
            params
        });
        
        logger.info(`API 响应状态: ${response.status}`);
        logger.info('API 响应数据:', response.data);

        if (!response.data || !response.data.Data) {
            throw new Error('API 响应数据格式错误');
        }

        const mappedData = response.data.Data.map(item => ({
            code: item.CoinInfo.Name,
            name: item.CoinInfo.FullName,
            symbol: item.CoinInfo.Name,
            market: '加密货币',
            dayLine: [],
            dayMetric: [],
            signal: []
        }));

        logger.info(`成功获取第 ${page} 页数据，共 ${mappedData.length} 条记录`);
        return mappedData;
    } catch (error) {
        logger.error(`获取第${page}页加密货币列表失败:`, error);
        logger.error('错误详情:', error.response ? error.response.data : '无响应数据');
        throw error;
    }
}

/**
 * 获取所有加密货币列表数据
 * @returns {Promise<Array>} 完整的加密货币列表数据
 */
async function fetchList() {
    try {
        const limit = 100; // API限制每页最大100条
        let page = 1;
        let allData = [];
        let hasMore = true;

        while (hasMore) {
            const pageData = await fetchListPage(page, limit);
            
            if (pageData.length === 0) {
                hasMore = false;
            } else {
                allData = allData.concat(pageData);
                page++;
                
                // 添加延迟以避免API限制
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

        // 保存到数据库
        if (allData.length > 0) {
            await MongoDB.saveList(allData);
        }
        
        // 获取完整的列表
        const stockList = await MongoDB.getList();
        return stockList;
    } catch (error) {
        logger.error('获取加密货币列表失败:', error);
        throw error;
    }
}

module.exports = {
    fetchList,
    fetchListPage
};