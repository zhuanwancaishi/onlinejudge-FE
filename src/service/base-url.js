let baseURL
// 开发环境
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:8081/';
} else if (process.env.NODE_ENV === 'production') {
    baseURL = 'http://oj.api.wangx.wang/'
}

export default baseURL
