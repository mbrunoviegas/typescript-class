System.register(["../models/index", "../views/index", "../utils/Utils", "../helpers/decorators/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var index_1, index_2, Utils_1, index_3, index_4, NegociacaoController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (Utils_1_1) {
                Utils_1 = Utils_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView("#negociacoesView");
                    this._mensagemView = new index_2.MensagemView("#mensagemView");
                    this._negociacaoService = new index_4.NegociacaoService();
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const date = new Date(this._inputData.val().replace(/-/g, ","));
                    if (Utils_1.Utils.isWeekendDay(date.getDay())) {
                        this._mensagemView.update("Permitadas negociações apenas em dias úteis!");
                    }
                    else {
                        const negociacao = new index_1.Negociacao(date, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                        this._negociacoes.adiciona(negociacao);
                        this._negociacoesView.update(this._negociacoes);
                        this._mensagemView.update("Negociação adicionada com sucesso");
                    }
                }
                importData() {
                    this._negociacaoService
                        .importData((res) => {
                        if (res.ok)
                            return res;
                        throw new Error(res.statusText);
                    })
                        .then((negociacoesParaImportar) => {
                        const negociacoesJaImportadas = this._negociacoes.paraArray();
                        negociacoesParaImportar
                            .filter((negociacao) => !negociacoesJaImportadas.some((jaImportada) => negociacao.isEqual(jaImportada)))
                            .forEach((negociacao) => this._negociacoes.adiciona(negociacao));
                        this._negociacoesView.update(this._negociacoes);
                    });
                }
            };
            __decorate([
                index_3.DomInject("#data")
            ], NegociacaoController.prototype, "_inputData", void 0);
            __decorate([
                index_3.DomInject("#quantidade")
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.DomInject("#valor")
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.Throttle()
            ], NegociacaoController.prototype, "importData", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
