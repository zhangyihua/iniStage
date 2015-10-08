#!/usr/bin/env node

var program = require('commander');

program
    .version('1.0.0')
    .option('-s, --start', 'Start initialize')
    .parse(process.argv);

if (program.start) {
    var path = require('path');
    var fs = require('fs');
    var childProccess = require('child_process');

    var build = require('../modules/build');
    var currentPath = process.cwd();
    var config = currentPath + "/config.json"; //用户自定义配置文件
    var configDefault = require("../conf/config.json"); //默认配置文件

    fs.exists(config, function(exists) {
        if (!exists) {
            config = configDefault;
        }
        // 构建目录结构
        build(config, currentPath);

        // 初始化 git 仓库
        childProccess.exec('git init', function(err, stdout, stderr){
            if (err) {
                console.log(err.stack);
                console.log('Error code:'+err.code);
                return;
            }
            console.log(stdout);
        });

    });

}
