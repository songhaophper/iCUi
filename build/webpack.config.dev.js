const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const styleLoaders = [
  { loader: 'css-loader' },
  { loader: 'postcss-loader', options: { sourceMap: true } }
];

module.exports = { 
  entry:   {
    vendor: ['packages'],
    'docs': './docs/index.js',     // 文档页面
    'preview': './docs/preview.js' // 手机端模拟器预览效果
  },
  output: {
    path: path.join(__dirname, '../dist'),
    publicPath: '/',
    filename: '[name].js',
    umdNamedDefine: true,
    chunkFilename: 'async.[name].js'
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: {
      rewrites: [
        { from: /^\/preview/, to: '/preview.html' }, // 访问 http://localhost:8081/preview 时指向 preview.html 
        { from: /^\//, to: '/index.html' }           // 访问 http://localhost:8081/ 时指向 index.html 
      ]
    },
    stats: 'errors-only'
  },
  resolve: {
    modules: [path.join(__dirname, '../node_modules'), 'node_modules'],
    extensions: ['.js', '.vue', '.css','.styl'],
    alias: {
      vue: 'vue/dist/vue.runtime.esm.js',
      src: path.join(__dirname, '../docs'),
      components: path.join(__dirname, '../docs/components'),
      packages: path.join(__dirname, '../packages')
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: {
              loaders: {
                postcss: ExtractTextPlugin.extract({
                  use: styleLoaders,
                  fallback: 'vue-style-loader'
                }),
                css: ExtractTextPlugin.extract({
                  use: styleLoaders,
                  fallback: 'vue-style-loader'
                })
              }
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({ use: styleLoaders })
      },
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
      },
      {
        test: /\.md/,
        loader: 'vue-markdown-loader'
      },
      {
        test: /\.(woff2?|eot|ttf|otf|svg)(\?.*)?$/,
        loader: 'url-loader'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new ProgressBarPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      options: {
        vue: {
          autoprefixer: false
        },
        vueMarkdown: {
          use: [
            [
              require('markdown-it-container'),
              'demo',
              {
                validate: function(params) {
                  return params.trim().match(/^demo\s*(.*)$/);
                },

                render: function(tokens, idx) {
                    return tokens[idx].nesting === 1 
                      ? `<demo-block class="demo-box"><div class="highlight" slot="highlight"å>`
                      :`</div></demo-block>\n`;
                }
              }
            ]
          ],
          preprocess: function(MarkdownIt, source) {
            MarkdownIt.renderer.rules.table_open = () => '<table class="zan-doc-table">';
            return source;
          }
        }
      }
    }),
    new HtmlWebpackPlugin({
      chunks: ['vendor', 'docs'],
      template: 'docs/index.tpl',
      filename: 'index.html',
      inject: true
    }),
    new HtmlWebpackPlugin({ 
      chunks: ['vendor', 'preview'],
      template: 'docs/index.tpl',
      filename: 'preview.html',
      inject: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: 2,
      filename: isProduction ? 'vendor.[hash:8].js' : 'vendor.js'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new OptimizeCssAssetsPlugin(),
    new ExtractTextPlugin({
      filename: isProduction ? '[name].[hash:8].css' : '[name].css',
      allChunks: true
    }),
    new FriendlyErrorsPlugin()
  ]
};
