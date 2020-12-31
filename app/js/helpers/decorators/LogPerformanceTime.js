System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogPerformanceTime(toSeconds = false) {
        return function (target, propertyKey, descriptor) {
            const originalMethod = descriptor.value;
            descriptor.value = function (...args) {
                let divider = toSeconds ? 1000 : 1;
                let unit = toSeconds ? "segundos" : "milisegundos";
                const before = performance.now();
                const result = originalMethod.apply(this, args);
                const after = performance.now();
                console.log(`O tempo de execução do método ${propertyKey} foi de ${(after - before) / divider} ${unit}`);
            };
            return descriptor;
        };
    }
    exports_1("LogPerformanceTime", LogPerformanceTime);
    return {
        setters: [],
        execute: function () {
        }
    };
});
