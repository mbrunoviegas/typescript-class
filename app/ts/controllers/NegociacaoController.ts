import { Negociacao, Negociacoes } from "../models/index";
import { MensagemView, NegociacoesView } from "../views/index";
import { Utils } from "../utils/Utils";
import { DomInject } from "../helpers/decorators/DomInject";
export class NegociacaoController {
  @DomInject("#data")
  private _inputData: JQuery;
  @DomInject("#quantidade")
  private _inputQuantidade: JQuery;
  @DomInject("#valor")
  private _inputValor: JQuery;
  private _negociacoes = new Negociacoes();
  private _negociacoesView = new NegociacoesView("#negociacoesView");
  private _mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this._negociacoesView.update(this._negociacoes);
  }

  adiciona(event: Event) {
    event.preventDefault();
    const date = new Date(this._inputData.val().replace(/-/g, ","));

    if (Utils.isWeekendDay(date.getDay())) {
      this._mensagemView.update("Permitadas negociações apenas em dias úteis!");
    } else {
      const negociacao = new Negociacao(
        date,
        parseInt(this._inputQuantidade.val()),
        parseFloat(this._inputValor.val())
      );

      this._negociacoes.adiciona(negociacao);
      this._negociacoesView.update(this._negociacoes);
      this._mensagemView.update("Negociação adicionada com sucesso");
    }
  }
}
