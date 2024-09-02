// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.744.3/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    let destroyOnInitialized = TcHmi.EventProvider.register('onInitialized', (e, data) => {

         e.destroy();
        
         const urlParams = new URLSearchParams(window.location.search);
         const view = urlParams.get('view');

         if (!view) return;
            TcHmi.View.load(view + '.view');

    });
})(TcHmi);
