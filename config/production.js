module.exports = {
  port: 3003,
  session: {
    secret: 'myblog',
    key: 'myblog',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://myblog:myblog@ds153198.mlab.com:53198/myblog'
}