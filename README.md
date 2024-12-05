# OUREDA 小学期作业 ToDoList


## 目录

- [安装](#安装)
- [用法](#用法)
- [相关项目](#相关项目)
- [主要项目负责人](#主要项目负责人)
- [参与贡献方式](#参与贡献方式)
    - [贡献人员](#贡献人员)
- [开源协议](#开源协议)

## 项目结构

```

│  .gitignore
│  LICENSE
│  README.md
│  
├─backend
│  │  db.js
│  │  index.js
│  │  package-lock.json
│  │  package.json
│  │  
│  ├─controllers
│  │      auth.js
│  │      todo.js
│  │      
│  └─routes
│          auth.js
│          todos.js
│          
└─client
    │  package-lock.json
    │  package.json
    │  
    ├─public
    │      favicon.ico
    │      index.html
    │      
    └─src
        │  App.css
        │  App.jsx
        │  index.jsx
        │  
        ├─components
        │      Add.jsx
        │      Footer.jsx
        │      List.jsx
        │      Navbar.jsx
        │      
        ├─context
        │      authContext.js
        │      
        └─pages
                Home.jsx
                Login.jsx
                Register.jsx

```

## 安装


克隆项目到本地：在命令行中使用git clone命令将GitHub上的项目克隆到本地文件夹中。可以使用如下命令：

```
git clone <https://github.com/ProselyteCoding/OUREDA-Midterm-Todolist.git>
```

## 用法


  要使用这个React项目，需要按照以下步骤：

1. 打开终端，进入项目目录：使用cd命令进入克隆下来的项目文件夹。

2. 安装依赖：在client和backend目录下运行install命令，安装项目所需的依赖：

```
npm install
```

3. 配置环境：在backend目录下配置.env文件，完成数据库配置。

```
# 实例
DB_HOST=YOUR_DB_HOST
DB_USER=YOUR_DB_USER  
DB_PASS=YOUR_DB_PASS
DB_NAME=YOUR_DB_NAME 
PORT=YOUR_PORT
```

4. 启动项目：在client和backend目录下运行start命令，启动项目：

```
npm start
```

这样就可以在本地运行这个项目了。浏览器将自动打开一个新的窗口，显示React应用程序。在开发过程中，将对代码进行更改后，浏览器将实时刷新以显示最新更改。同时后端使用的nodemon包可以实现在对后端代码进行修改后在打开的终端实时刷新。

4. 功能介绍：

（1）前端：代办将以列表形式呈现，可输入代办名称及时间后点击‘添加’按钮添加一个代办。对已有代办可进行‘删除’和‘完成’操作，代办状态为逾期的将标红、已完成的显示为下划线划去状态、删除的从列表中移除。
（2）后端：包含数据库和其他后端操作，可实现账户信息持续化存储。

## 相关项目

暂无

## 主要项目负责人

[王一帆](https://github.com/ProselyteCoding)

## 参与贡献方式

3197908785@qq.com邮箱联系

### 贡献人员

感谢所有贡献的朋友和学长的指导和帮助。


## 开源协议

[MIT](LICENSE)  
