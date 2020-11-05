// 集中管理请求地址，所有的接口地址：

/**
 * title: 接口描述
 * uri: 请求地址
 * method: 请求方式
 * const params = {
    uriCode: 'TEST01',
    // restful
    bindVars: [{
        key: "id",
        value: 'xxx',
    }, {
        key: "type",
        value: 'xxx'
    }]
  }
 */

const API = {
  API001: { title: '测试接口', uri: '/banner' }
}

export default API
