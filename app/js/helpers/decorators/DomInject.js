System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function DomInject(selector) {
        return (target, key) => {
            let _element;
            const getter = () => {
                if (!_element) {
                    _element = $(selector);
                }
                return _element;
            };
            Object.defineProperty(target, key, {
                get: getter,
            });
        };
    }
    exports_1("DomInject", DomInject);
    return {
        setters: [],
        execute: function () {
        }
    };
});
