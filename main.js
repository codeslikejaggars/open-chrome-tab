module.exports = function openChromeTab(url) {
  var exec = require('child_process').exec;
  var scriptPath = require('path').resolve(__dirname, 'open-chrome-tab.jxa');
  exec('osascript -l Javascript ' + scriptPath + ' ' + url, function(err, stdout, stderr) {
    if(err) throw err;
  });
}
