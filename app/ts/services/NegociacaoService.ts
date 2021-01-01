import {
  INegociacaoParcial,
  Negociacao,
  IResponseHandler,
} from "../models/index";

export class NegociacaoService {
  async importData(handler: IResponseHandler): Promise<Negociacao[]> {
    return fetch("http://localhost:8080/dados")
      .then((res) => handler(res))
      .then((res) => res.json())
      .then((dados: INegociacaoParcial[]) =>
        dados.map(
          (dado) => new Negociacao(new Date(), dado.vezes, dado.montante)
        )
      );
  }
}
