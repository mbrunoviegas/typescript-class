System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Throttle(timeout = 500) {
        return function (target, key, descriptor) {
            const originalMethod = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                clearInterval(timer);
                setTimeout(() => originalMethod.apply(this, args), timeout);
            };
            return descriptor;
        };
    }
    exports_1("Throttle", Throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
