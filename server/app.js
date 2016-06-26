const express = require('express');
const path    = require('path');
const config = require('../webpack.config.js');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const http = require('http');
const konfig = require('konfig')({ path: "./" });

var app = express();
var server = http.createServer(app).listen(konfig.app.port);
var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('*', function (req, res) {
  res.sendFile(path.resolve('./client/index.html'));
});

console.log(`Server is up and running...`);
console.log(`   Port:   ${konfig.app.port}`);
