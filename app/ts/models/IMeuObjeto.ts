import { IIgualavel } from "./IIgualavel";
import { IImprimivel } from "./IImprimivel";

export interface IMeuObjeto<T> extends IImprimivel, IIgualavel<T> {}
