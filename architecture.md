# flib 项目架构设计

## 项目概述
flib 是一个金融数据分析和策略回测平台，主要功能包括数据获取、数据存储、技术指标计算和策略回测。

## 系统架构
flib/
├── src/                      # 源代码目录
│   ├── services/            # 服务层
│   │   ├── initService.js   # 初始化服务
│   │   ├── updateService.js # 更新服务
│   │   └── scheduler.js     # 定时任务调度器
│   ├── fetchers/           # 数据获取层
│   │   ├── listFetcher.js  # 列表数据获取
│   │   ├── dayLineFetcher.js # 日线数据获取
│   │   └── hourLineFetcher.js # 时线数据获取
│   ├── database/           # 数据库层
│   │   ├── models/         # MongoDB模型定义
│   │   │   ├── list.js     # 列表模型
│   │   │   ├── dayLine.js  # 日线模型
│   │   │   ├── metric.js   # 指标模型
│   │   │   └── signal.js   # 信号模型
│   │   └── mongo.js        # MongoDB连接和基础操作
│   ├── strategies/         # 策略层
│   │   ├── metrics/        # 技术指标计算
│   │   └── signals/        # 交易信号生成
│   └── utils/             # 工具函数
│       ├── logger.js      # 日志工具
│       └── validator.js   # 数据验证工具
├── config/                # 配置文件目录
│   ├── default.js        # 默认配置
│   └── production.js     # 生产环境配置
├── tests/                # 测试目录
├── scripts/              # 脚本目录
├── logs/                 # 日志目录
├── package.json          # 项目配置
└── README.md            # 项目说明
### 核心模块
1. 服务管理模块
   - 初始化数据服务
   - 数据更新服务
   - 定时任务调度器

2. 数据获取模块
   - 股票列表获取
   - 日线数据获取
   - 时线数据获取

3. 数据存储模块（MongoDB）
   - 数据表结构设计
   - 数据读写接口
     - 列表数据
     - 线数据（日线/时线）
     - 技术指标数据
     - 交易信号数据

4. 策略分析模块
   - 技术指标计算
   - 交易信号生成
   - 回测执行
     - 单个标的回测
     - 多个标的回测
     - 全市场回测
   - 回测报告
     - 收益率统计
     - 成功率统计
     - 最大回撤统计
     - 风险指标统计

## 数据流
1. 数据获取流程
   ```
   数据源 -> 数据获取模块 -> MongoDB存储
   ```

2. 策略分析流程
   ```
   MongoDB数据 -> 技术指标计算 -> 交易信号生成 -> MongoDB存储
   ```

3. 回测执行流程
   ```
   交易信号 -> 回测执行 -> 回测报告生成 -> MongoDB存储
   ```

## 模块接口设计

### 服务管理接口
- startService(): 启动服务
- initData(): 初始化数据
- updateData(): 更新数据
- scheduler(): 定时任务调度

### 数据获取接口
- fetchList(): 获取股票列表
- fetchDayLine(name, startDate): 获取日线数据
- fetchHourLine(name, startTime): 获取时线数据

### 数据存储接口
- getList(): 读取列表数据
- getLine(): 读取线数据
- getMetric(): 读取指标数据
- getSignal(): 读取信号数据
- saveList(): 保存列表数据
- saveLine(): 保存线数据
- saveMetric(): 保存指标数据
- saveSignal(): 保存信号数据

### 策略分析接口
- computedMetric(): 计算技术指标
- computeSignal(): 生成交易信号
- backtest(): 执行回测
  - backtestSingle(code, startDate, endDate): 单个标的回测
  - backtestMultiple(codes, startDate, endDate): 多个标的回测
  - backtestAll(startDate, endDate): 全市场回测
- generateReport(): 生成回测报告
  - calculateReturns(): 计算收益率
  - calculateWinRate(): 计算成功率
  - calculateDrawdown(): 计算最大回撤
  - calculateRiskMetrics(): 计算风险指标（夏普比率、信息比率等）

## 配置管理
- MongoDB连接配置
- 数据源配置
- 定时任务配置

## 错误处理
- 数据获取异常处理
- 数据存储异常处理
- 策略计算异常处理

## 开发规范
1. 代码组织
   - 按模块划分目录结构
   - 遵循单一职责原则

2. 命名规范
   - 使用驼峰命名法
   - 函数名使用动词前缀

3. 注释规范
   - 函数注释：功能、参数、返回值
   - 关键算法注释
   - 配置项注释