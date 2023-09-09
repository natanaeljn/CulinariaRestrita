const PROXY_CONFIG = [
{
    context: [
        '/auth',
        '/auth/register',
        '/recipes',
        '/recipes/getAll',
        '/ingredients'
    ],
    target: "http://localhost:8080",
    secure: false,
    changeOrigin: true,
    pathRewrite: {
        "^/": ""
    }










}
]
module.exports = PROXY_CONFIG