'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

exports['default'] = openChromeTab;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _child_process = require('child_process');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

var jxaScriptPath = _path2['default'].resolve(__dirname, '../open-chrome-tab.jxa');

/**
 * Opens a tab in google chrome pointing at `url`. If this script has been used
 * recently, and the previously opened tab is still available, it will be reused.
 * @param  {[type]} url the url
 * @return {Promise} a promise that will be resolved when the script finishes running
 */

function openChromeTab(url) {
  return new _promise2['default'](function (resolve, reject) {
    (0, _child_process.exec)(['osascript', '-l', 'JavaScript', jxaScriptPath, url].join(' '), function (err, stdout, stderr) {
      if (err) reject(err);

      var _stdout$toString$split = stdout.toString('utf8').split(':');

      var _stdout$toString$split2 = _slicedToArray(_stdout$toString$split, 2);

      var windowId = _stdout$toString$split2[0];
      var tabId = _stdout$toString$split2[1];

      resolve({ windowId: windowId, tabId: tabId });
    });
  });
}

module.exports = exports['default'];

