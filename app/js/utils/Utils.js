System.register(["./WeekDay"], function (exports_1, context_1) {
    "use strict";
    var WeekDay_1, Utils;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (WeekDay_1_1) {
                WeekDay_1 = WeekDay_1_1;
            }
        ],
        execute: function () {
            Utils = class Utils {
            };
            Utils.isWeekendDay = (day) => {
                return day === WeekDay_1.WeekDay.SUNDAY || day === WeekDay_1.WeekDay.SATURDAY;
            };
            Utils.print = (...objects) => {
                objects.forEach((object) => object.toText());
            };
            exports_1("Utils", Utils);
        }
    };
});
