const { fetchAllDayLines } = require('../src/fetchers/dayLineFetcher');
const MongoDB = require('../src/database/mongo');

async function main() {
    try {
        // 连接数据库
        await MongoDB.connect();
        
        // 测试获取 BTC 的日线数据
        console.log('开始获取 BTC 日线数据...');
        const btcData = await fetchAllDayLines();
        
        // 打印部分数据用于验证
        
        console.log(`总共获取到 ${btcData.length} 条数据`);
    } catch (error) {
        console.error('测试失败:', error);
    }
}

main();