// @ts-check
/// <reference path="./TcHmi.d.ts" />

/**
    Extends an object with inheritance information. 
    If you see here an error this is probably a problem with inheritance, include order or missing dependency.
    @preserve (Part of the public API)
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        if (
            b === undefined
            && d && d.name
            && TcHmi && TcHmi.Log && TcHmi.Log.error
        ) {
            TcHmi.Log.error('Inheritance parent of control type \'' + d.name + '\' is not known and will therefore not be available.' + '\n' +
                'Possible reason/s:' + '\n' +
                '- Related source file is not included in html document.' + '\n' +
                '- Related source file is not included in required order in html document.' + '\n'
            );
            throw new Error('Inheritance parent of control type \'' + d.name + '\' is not known.');
        }
        /**
         *  Add compatibility for `_super.call(xy)` calls of (customer) ES5 controls.
         *  
         *  This `call` throws with native ES6 classes, so we reroute this call to a no-op.
         *  TcHmiFramework will fix the constructor chain on instanciation.
         *
         *  Note: The __extends helper is only called from transpiled ES5 controls.
         *  @preserve (Part of the public API)
         */
        if (
            !b.hasOwnProperty('call') // Detect defineProperty in base control, so 'call' is only overwritten once
            && b.prototype instanceof TcHmi.Controls.System.baseTcHmiControl // Do not hack other TS constructs
            && b.toString().startsWith('class') // ES6 requires this for native classes (ClassDeclaration) and we only want to tune these
        ) {
            // ES5 transpiled controls call  _super.call(this, element, pcElement, attrs) which throws on native ES6 classes
            Object.defineProperty(b, 'call', {
                // Warning: Don't use variable d in here, as d is the first extended class and perhaps not the current one
                get: function () {
                    if (!this.toString().startsWith('class')) {  // Better performance but harder to understand: if (!this.hasOwnProperty('call')) {
                        // We are a transpiled ES5 class. But got called in the prototype chain of the ES6 inheritance parent!
                        return function controlInheritanceCallthrough(derivedCtrlObj, element, pcElement, attrs, ...rest) {
                            // Use "apply", as "call" is tainted in the prototype chain with this defineProperty
                            this.apply(derivedCtrlObj, [element, pcElement, attrs, ...rest]);
                        }
                    } else {
                        // We are a native ES6 class. Our constructor is called from the controlManger so our 'call' has to be a no-op (but must not throw)
                        return function controlInheritanceCallUpgrade(derivedCtrlObj, element, pcElement, attrs) {
                            return derivedCtrlObj;
                        };
                    }
                }
            });
        }
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
