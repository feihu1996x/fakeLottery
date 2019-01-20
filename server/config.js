/*
 * @file: config.js 
 * @brief: 项目配置文件
 * @author: feihu1996.cn
 * @date: 18-09-02
 * @version: 1.0
*/

// 服务器监听地址
var web_host = "0.0.0.0";

// 服务器监听端口
var web_port = 8087;

// url前缀, '/fakeLottery'
var url_prefix = "";
// var url_prefix = "/fakeLottery";

// commonJS
module.exports = {
    web_host: web_host,
    web_port: web_port, 
    url_prefix: url_prefix
}

