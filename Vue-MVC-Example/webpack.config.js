/// <binding BeforeBuild='Run - Development' />
"use strict";
var path = require('path');
var webpack = require('webpack');
var fs = require('fs');
var projectRoot = path.resolve(__dirname)


module.exports = {
    entry: () => {

        const ENTRYCONTAINER = "./Scripts/Views";

        function getFiles(startPath) {

            var results = [];

            if (!fs.existsSync(startPath)) {
                console.log("no dir ", startPath);
                return;
            }

            var files = fs.readdirSync(startPath);
            for (var i = 0; i < files.length; i++) {
                var filename = path.join(startPath, files[i]);
                var stat = fs.lstatSync(filename);
                if (stat.isDirectory()) {
                    results = results.concat(getFiles(filename))
                }
                else if (filename.indexOf('.js') >= 0 && filename.indexOf('.dist.') == -1) {
                    results.push(filename);
                }
            }
            return results;
        };

        var entryPoints = {};

        getFiles(ENTRYCONTAINER).forEach(function (file) {

            entryPoints[file.replace('.js', '')] = './' + file;

        });

        return entryPoints;
    },
    output: {
        path: './',
        filename: "[name].dist.js"
    },
    module: {
        rules: [
          {
              test: /\.vue$/,
              loader: 'vue-loader',
              options: {
                  loaders: {
                      // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                      // the "scss" and "sass" values for the lang attribute to the right configs here.
                      // other preprocessors should work out of the box, no loader config like this nessessary.
                      'scss': 'vue-style-loader!css-loader!sass-loader',
                      'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                  }
                  // other vue-loader options go here
              }
          },
          {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
          },
          {
              test: /\.(png|jpg|gif|svg)$/,
              loader: 'file-loader',
              options: {
                  name: '[name].[ext]?[hash]'
              }
          }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true
    },
    performance: {
        hints: false
    },
    devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
      new webpack.DefinePlugin({
          'process.env': {
              NODE_ENV: '"production"'
          }
      }),
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: true,
          compress: {
              warnings: false
          }
      }),
      new webpack.LoaderOptionsPlugin({
          minimize: true
      })
    ])
}
