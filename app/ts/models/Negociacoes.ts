import { IMeuObjeto } from "./IMeuObjeto";
import { Negociacao } from "./Negociacao";
export class Negociacoes implements IMeuObjeto<Negociacoes> {
  private _negociacoes: Negociacao[] = [];

  adiciona(negociacao: Negociacao) {
    this._negociacoes.push(negociacao);
  }

  paraArray(): Negociacao[] {
    return Object.assign([], this._negociacoes);
  }

  toText() {
    console.log(JSON.stringify(this._negociacoes));
  }

  isEqual(object: Negociacoes): boolean {
    return (
      JSON.stringify(this._negociacoes) === JSON.stringify(object.paraArray())
    );
  }
}
