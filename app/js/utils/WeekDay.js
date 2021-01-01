System.register([], function (exports_1, context_1) {
    "use strict";
    var WeekDay;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (WeekDay) {
                WeekDay[WeekDay["SUNDAY"] = 0] = "SUNDAY";
                WeekDay[WeekDay["MONDAY"] = 1] = "MONDAY";
                WeekDay[WeekDay["TUESDAY"] = 2] = "TUESDAY";
                WeekDay[WeekDay["WEDNESDAY"] = 3] = "WEDNESDAY";
                WeekDay[WeekDay["THURSDAY"] = 4] = "THURSDAY";
                WeekDay[WeekDay["FRIDAY"] = 5] = "FRIDAY";
                WeekDay[WeekDay["SATURDAY"] = 6] = "SATURDAY";
            })(WeekDay || (WeekDay = {}));
            exports_1("WeekDay", WeekDay);
        }
    };
});
