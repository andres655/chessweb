const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/app.ts',
    output: {
        path: __dirname + '/build',
        filename:'bundle.js',
    },
    module: {
    rules: [
      {
            test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        },
       {
          test: /\.ts?$/,
          use: ['ts-loader'],
           exclude: /node_modules/,
        },
      
    ],
  },
    resolve: {
  // Add `.ts` and `.tsx` as a resolvable extension.
  extensions: [".ts", ".tsx", ".js"]
},
    plugins: [new HtmlWebpackPlugin({
        template:'./src/index.html'
})],
    
}
