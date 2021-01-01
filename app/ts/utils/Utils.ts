import { IImprimivel } from "../models/IImprimivel";
import { WeekDay } from "./WeekDay";
export class Utils {
  static isWeekendDay = (day: number): boolean => {
    return day === WeekDay.SUNDAY || day === WeekDay.SATURDAY;
  };

  static print = (...objects: IImprimivel[]) => {
    objects.forEach((object) => object.toText());
  };
}
