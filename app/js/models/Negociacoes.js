System.register([], function (exports_1, context_1) {
    "use strict";
    var Negociacoes;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                paraArray() {
                    return Object.assign([], this._negociacoes);
                }
                toText() {
                    console.log(JSON.stringify(this._negociacoes));
                }
                isEqual(object) {
                    return (JSON.stringify(this._negociacoes) === JSON.stringify(object.paraArray()));
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
