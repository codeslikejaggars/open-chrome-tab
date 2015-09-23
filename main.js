var proc = require('child_process');
var path = require('path');

/**
 * Opens a tab in google chrome pointing at `url`. If this script has been used
 * recently, and the previously opened tab is still available, it will be reused.
 * @param {string} url
 * @param {function} callback executed when the open script terminates
 */
module.exports = function openChromeTab(url, callback) {
  var scriptPath = path.resolve(__dirname, 'open-chrome-tab.jxa');
  proc.exec(['osascript', '-l', 'JavaScript', scriptPath, url].join(' '), function(err, stdout, stderr) {
    if(err) throw err;
    callback();
  });
}
