System.register([], function (exports_1, context_1) {
    "use strict";
    var DomInject;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DomInject = (selector) => {
                return (target, key) => {
                    let _element;
                    const getter = () => {
                        if (!_element) {
                            _element = $(selector);
                        }
                        return _element;
                    };
                    Object.defineProperty(target, key, {
                        get: getter
                    });
                };
            };
            exports_1("default", DomInject);
        }
    };
});
