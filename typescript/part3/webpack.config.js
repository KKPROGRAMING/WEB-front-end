//引入一个包
const path = require("path");
//引入html插件
const HTMLWebpackPlugin = require("html-webpack-plugin");
//引入clean插件(记得开头字母一定要大写！！！)
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

//webpack中所有的配置信息都应该写在module.exports中
module.exports = {
  mode: "development",
  //入口文件
  entry: "./src/index.ts",

  //指定打包文件所在的目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment:{
        //告诉webpack打包时不使用箭头函数
        arrowFunction:false
    }
  },

  //指定webpack打包时要使用的模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test 制定规则生效的文件
        test: /\.ts$/,

        //use 要使用的loader
        use: [
          {
            //配置babel{
            //指定加载器
            loader: "babel-loader",
            //设置babel
            options: {
              //设置预定义的环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    //要兼容的目标浏览器
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    //corejs提供（模拟）一个不同于浏览器的环境，让老版本的浏览器用到新标准的技术
                    //指定corejs的版本
                    corejs: "3",
                    //使用corejs的方式 “usage“表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],

        //exclude 要排除的文件
        exclude: /node-modules/,
      },
    ],
  },

  //配置webpack插件
  plugins: [
    //自动删除原有的文件再添加编译后的新文件
    new CleanWebpackPlugin(),
    //自动生成html文件并引入相关的资源
    new HTMLWebpackPlugin({
      // title:'自定义title'
      //提供一个模板，依据模板生成
      template: "./src/index.html",
    }),
  ],

  //用来设置引用的模块
  //不知道那些文件可以作为模块来使用，所以要进行配置
  resolve: {
    extensions: [".ts", ".js"],
  },
};

/**
 * const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    mode:"development",

    entry:"./src/index.ts",

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundle.js',
        environment:{
            arrowFunction:false
        }
    },

    module:{
        rule:[
            {
                test:/\.ts$/,
                use:[{
                    loader:'babel-loader',
                    options:{
                        presets:[
                            "@babel/preset-env",
                            {
                                targets:{
                                    chorme:"56",
                                    ie:"12"
                                },
                                corejs:"3",
                                useBuiltIns:"usage"
                            }
                        ]
                    }
                },
                    'ts-loader'
                ],
                exclude:/node-module/
            }
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:"./src/index.html"
        }),
    ],

    resolve:{
        extensions:[".ts",".js"]
    }
}
 */