/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const VueLoaderPlugin  = require('vue-loader/lib/plugin');
module.exports={
    entry:"./Src/index.js",
    output:{
        path:__dirname,
        filename:'./Dist/bundle.js'
        
    },
    module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
     
      // this will apply to both plain `.css` files
      // AND `<style>` blocks in `.vue` files
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: 8192
                }
              }
            ]
          }
    ]
  },
   plugins: [
    // make sure to include the plugin for the magic
    new VueLoaderPlugin()
  ]
};
 

