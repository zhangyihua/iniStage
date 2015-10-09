## 简介 

`ini-stage` 是一个用来自动初始化工程目录的简单小工具。没必要每次开始新项目的时候都重新创建工程目录，只需一条命令 `ini -s` 即可完成。

## 安装

`npm install -g ini-stage`

## 使用

命令格式: `ini [options]`

Options:

```
  -h, --help     输出使用帮助
  -V, --version  输出版本信息
  -s [git], --start [git]  开始构建， git 是可选的，选择则自动初始化 git
```

如果你想创建一个自定义的目录结构，只需在工程根目录创建一个 `config.json` 配置文件，这个文件包含目录结构的信息。同时，ini-stage 提供默认的 `config.json`，它包含一个普通的web前端工程目录结构配置，结构如下：

```json
// 必须是数组
[
    "html",
    "css",
    { // 多级目录
        "js":[
            "lib",
            "mod",
            "pkg"
        ]
    },
    "images",
    "psd",
    "doc",
    "test",
    "template",
    "backup",
    "#README.md" // README.md 文件
]

```

前缀 `#` 代表一个文件，否则是一个文件夹。

## License

MIT.