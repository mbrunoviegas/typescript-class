import { IMeuObjeto } from "./IMeuObjeto";
export class Negociacao implements IMeuObjeto<Negociacao> {
  constructor(
    readonly data: Date,
    readonly quantidade: number,
    readonly valor: number
  ) {}

  get volume(): number {
    return this.quantidade * this.valor;
  }

  toText(): void {
    console.log(
      `Date: ${this.data}\n
      Quantidade: ${this.quantidade}\n
      Valor: ${this.valor}
      `
    );
  }

  isEqual(negociacao: Negociacao): boolean {
    return (
      this.data.getDate() == negociacao.data.getDate() &&
      this.data.getMonth() == negociacao.data.getMonth() &&
      this.data.getFullYear() == negociacao.data.getFullYear()
    );
  }
}
