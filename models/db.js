const settings = require('../settings');
const Db = require('mongodb').Db;
const Connection = require('mongodb').Connection;
const Server = require('mongodb').Server;

// 设置数据库名，数据库地址 和 数据库端口， 创建一个数据库连接实例
module.exports = new Db(settings.db, new Server(settings.host, settings.port), {safe: true});
