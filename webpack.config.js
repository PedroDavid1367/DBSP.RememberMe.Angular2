var webpack = require("webpack");

var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

module.exports = {
  debug: true,
  devtool: "source-map",
  entry: {
    "vendor": ["./app/polyfills", "./app/vendor"],
    "app": "./app/main"
  },
  output: {
    path: __dirname + "/dist",
    filename: "[name].js",
    publicPath: "dist/"
  },
  resolve: {
    extensions: ["", ".ts", ".js", ".jpg", ".jpeg", ".gif", ".png", ".css"],
    alias: {
      materializecss: "materialize-css/dist/css/materialize.css",
      materialize: "materialize-css/dist/js/materialize.js",
    }
  },
  module: {
    loaders: [
      /* Note on materialize.
       * Added the next following 4 objects in order to follow angular2-materialize recomendations, 
       * even though materialize vanilla is used instead of angular2-materialize.
       */
      { test: /materialize\.css$/, loader: "style-loader!css-loader" },
      {
        test: /materialize-css\/dist\/js\/materialize\.js/,
        loader: "imports?materializecss"
      },
      {
        test: /^((?!materialize).)*\.css$/,
        loader: "raw-loader"
      },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: "url-loader?limit=100000" },
      /*
       * End note on materialize.
       */

      { test: /\.(jpg|jpeg|gif|png)$/, loader: "file-loader?name=img/[path][name].[ext]" },
      //{ test: /\.css$/, loader: "raw-loader" },
      { test: /\.html$/, loaders: ["html-loader"] },
      { test: /\.ts$/, loaders: ["awesome-typescript-loader"], exclude: /node_modules/ },
    ]
  },
  modulesDirectories: ["node_modules"],
  plugins: [
      new CommonsChunkPlugin({ name: "vendor" }),
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Hammer: "hammerjs/hammer"
      })
  ],
  node: {
    __filename: true
  },
  devServer: {
    inline: true,
    port: 8888,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
