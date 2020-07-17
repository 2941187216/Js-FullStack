- 全栈项目
    - 一分为二
    前后端分离
    UI与redux
    城市数据怎么做
    - cityData null
        action-type
    - action setCityData
    - 是否显示 isCitySelectorVisible false
        ACTION_SET_IS_CITY_SELECTOR_VISIBLE
        isLoadingCityData
        ACTION_SET_IS_LOADING_CITY_DATA false
    - 后端API设计流程
        1. mongodb/mysql 写真后端还是假后端
            mockerAPI 解决了跨域
        2. 模块化输出api配置
        3. require json Mocker.mock random
            配置
    - api -> action -> reducer -> connect -> 组件

    - 数据请求都放在actions中
        异步的actions中, dispatch多个action

    <!-- 完成这个reducers的和相应action
    并且在fetchCityData中处理跟 它相关的逻辑
    isLoadingData -->