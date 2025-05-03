const { fetchList } = require('../src/fetchers/listFetcher');
const MongoDB = require('../src/database/mongo');

async function main() {
    try {
        // 连接数据库
        await MongoDB.connect();
        
        // 执行获取列表函数
        const stockList = await fetchList();
        
        // 打印结果
        console.log('获取到的股票列表：');
        console.log(JSON.stringify(stockList, null, 2));
        
    } catch (error) {
        console.error('执行失败:', error);
    }
}

main();