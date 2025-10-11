# [liferay-community](https://www.liferay.com/)
1. [git of portal](https://github.com/liferay/liferay-portal)  
2. [Install blade](https://learn.liferay.com/w/dxp/development/tooling/blade-cli)  
3. [Liferay release libs](https://releases.liferay.com/portal)
4. Use react from "@vitejs/plugin-react" in vite  
   Add below script to ```Site Settings -> Analytics -> Matomo```
   ```html
    <script type="module">
      import RefreshRuntime from 'http://localhost:5173/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    ```