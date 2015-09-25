import { exec } from 'child_process';
import path from 'path';
import Promise from 'promise';

const jxaScriptPath = path.resolve(__dirname, '../open-chrome-tab.jxa');

/**
 * Opens a tab in google chrome pointing at `url`. If this script has been used
 * recently, and the previously opened tab is still available, it will be reused.
 * @param  {[type]} url the url
 * @return {Promise} a promise that will be resolved when the script finishes running
 */
export default function openChromeTab(url) {
  return new Promise(function(resolve, reject) {
    exec(['osascript', '-l', 'JavaScript', jxaScriptPath, url].join(' '), function(err, stdout, stderr) {
      if(err) reject(err);

      const [windowId, tabId] = stdout.toString('utf8').split(':');
      resolve({ windowId, tabId });
    });
  });
}
