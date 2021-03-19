// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="../../Packages/Beckhoff.TwinCAT.HMI.Framework.12.744.3/runtimes/native1.12-tchmi/TcHmi.d.ts" />
(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var demo_multi_screen;
        (function (demo_multi_screen) {
            function LoadViewFromQuery() {

                var view = GetQueryParameter('view');

                if (!view) return;

                TcHmi.View.load(view + '.view', function (data) {});

                function GetQueryParameter(parameterName) {

                    var href = window.location.href;
                    var name = parameterName.replace(/[\[\]]/g, '\\$&');
                    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'), value = regex.exec(href);

                    if (!value) return null;
                    if (!value[2]) return null;

                    return decodeURIComponent(value[2].replace(/\+/g, ' '));

                }

            }
            demo_multi_screen.LoadViewFromQuery = LoadViewFromQuery;
        })(demo_multi_screen = Functions.demo_multi_screen || (Functions.demo_multi_screen = {}));
        Functions.registerFunctionEx('LoadViewFromQuery', 'TcHmi.Functions.demo_multi_screen', demo_multi_screen.LoadViewFromQuery);
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);