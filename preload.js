const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  runCode: (code) => ipcRenderer.send('run-code', code),
  onCodeResult: (callback) => ipcRenderer.on('code-result', callback)
});
