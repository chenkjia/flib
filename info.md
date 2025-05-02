# 启动服务 startService
- [ ] 初始化数据 initData
- [ ] 日常更新数据 updateData
- [ ] 定时更新数据 scheduler
# 拉取数据fetchData
- [ ] 拉取列表fetchList
- [ ] 拉取日线 fetchDayLine(name,startDate)
- [ ] 拉取时线 fetchHourLine(name,startTime)
# 读取数据
- [ ] 读取日线getDayLine(name,startDate,endDate)
- [ ] 读取日线指标getDayMetric(name)
- [ ] 读取日线信号getDaySign(name)
# mongodb数据库操作
- [ ] 连接mongodb
- [ ] 读取列表getList
- [ ] 读取线数据getLine
- [ ] 读取指标getMetric
- [ ] 读取信号getSignal
- [ ] 保存列表saveList
- [ ] 保存线saveLine
- [ ] 保存指标saveMetric
- [ ] 保存信号saveSignal
- [ ] 定义数据表结构
# 回测策略编写
- [ ] 定义策略技术指标（读取日线数据，计算技术指标，保存指标）computedMetric
- [ ] 定义策略买卖信号（读取日线数据和指标数据，计算买入卖出信号，保存买入卖出信号）定义策略技术指标（读取日线数据，计算技术指标，保存指标）computedSignal
- [ ] 买入卖出信号格式
{
    buyTime:
    buyPrice:
    buyVolumn:
    buyAmount:
    sellTime:
    sellPrice:
    sellVolumn:
    sellAmount:
    profit:
}
# 回测执行程序
- [ ] 单个标的回测
- [ ] 多个标的回测
- [ ] 所有标的回测
# 统计程序
- [ ] 回测完统计数据并保存到回测报告里
report
{
    subjectList
    successRate
    maxDrawdown
    profit
    operationList: [{
        buyTime:
        buyPrice:
        buyVolumn:
        buyAmount:
        sellTime:
        sellPrice:
        sellVolumn:
        sellAmount:
        profit:
    }]
}
