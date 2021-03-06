'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _vote = require('./routes/vote');

var _vote2 = _interopRequireDefault(_vote);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const PORT = 9090;

const app = (0, _express2.default)();
const upload = (0, _multer2.default)();

app.use(_express2.default.static(__dirname + '/../public'));
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: true }));
app.use((0, _cookieParser2.default)());

// 注册路由
app.use('/api/vote', _vote2.default);

app.listen(PORT, () => {
  console.log('server is listening @', PORT);
});