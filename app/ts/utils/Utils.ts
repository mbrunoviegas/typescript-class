import { WeekDay } from "./WeekDay";
export class Utils {
  static isWeekendDay = (day: number): boolean => {
    return day === WeekDay.SUNDAY || day === WeekDay.SATURDAY;
  };
}
