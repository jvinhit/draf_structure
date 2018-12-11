export const validators = {
    validateYear: value => {
        if (isEmpty(value)) {
            return 'Year Empty';
        } else {
            const currentYear = new Date().getFullYear();
            if (value < currentYear) {
                return 'Year Invalid';
            }
        }
    },
    validateMonth: value => {
        if (isEmpty(value)) {
            return 'Month Empty';
        } else {
            return value < 1 || value > 12 ? 'Month Invalid' : null;
        }
    },
    validateDay: (day, month, years) => {
        if (isEmpty(day)) {
            return 'Day Empty';
        } else {
            if (validators.validateYear(years) === undefined) {
                return day < 1 || day > 31 ? 'Day Invalid' : !isValidDayinM(day, month - 1, years) ? `${day} not in month` : null;
            }
        }
    },
    validateHour: value => {
        if (isEmpty(value)) {
            return 'Hour Empty';
        } else {
            return value < 0 || value > 23 ? 'Hour Invalid' : null;
        }
    },
    validateMinute: value => {
        if (isEmpty(value)) {
            return 'Minute Empty';
        } else {
            return value < 0 || value > 59 ? 'Minute Invalid' : null;
        }
    },
    validateSeconds: value => {
        if (isEmpty(value)) {
            return 'Seconds Empty';
        } else {
            return value < 0 || value > 59 ? 'Seconds Invalid' : null;
        }
    },
    validateAll: (year, month, day, hour, minute, seconds) => {
        const currentDate = new Date();
        if (year === currentDate.getFullYear()) {
            if (month < currentDate.getMonth() + 1) {
                return 'Check all inp time';
            } else if (month === currentDate.getMonth() + 1) {
                if (day < currentDate.getDate()) {
                    return 'Check all inp time';
                } else if (day === currentDate.getDate()) {
                    if (hour < currentDate.getHours()) {
                        return 'Check all inp time';
                    } else if (hour === currentDate.getHours()) {
                        if (minute < currentDate.getMinutes()) {
                            return 'Check all inp time';
                        } else if (minute === currentDate.getMinutes()) {
                            if (seconds < currentDate.getSeconds() + 1) {
                                return 'Check all inp time';
                            }
                        }
                    }
                }
            }
        }
    }
};
export const operations = {
    setDuration: pendDate => {
        const startDate = new Date();
        const endDate = new Date(pendDate);
        let remainTime = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
        let remain = {};
        if (remainTime <= 0) {
            console.log('Done or invalid');
            return false;
        }
        if (remainTime >= 365 * 24 * 60 * 60) {
            remain.year = Math.floor(remainTime / (365 * 24 * 60 * 60));
            remainTime -= remain.year * 365 * 24 * 60 * 60;
        } else {
            remain.year = 0;
        }

        if (remainTime >= 30 * 24 * 60 * 60) {
            remain.month = Math.floor(remainTime / (30 * 24 * 60 * 60));
            remainTime -= remain.month * 30 * 24 * 60 * 60;
        } else {
            remain.month = 0;
        }

        if (remainTime >= 86400) {
            remain.day = Math.floor(remainTime / 86400);
            remainTime -= remain.day * 86400;
        } else {
            remain.day = 0;
        }

        if (remainTime >= 3600) {
            remain.hour = Math.floor(remainTime / 3600);
            remainTime -= remain.hour * 3600;
        } else {
            remain.hour = 0;
        }

        if (remainTime >= 60) {
            remain.minute = Math.floor(remainTime / 60);
            remainTime -= remain.minute * 60;
        }

        remain.seconds = remainTime;
        return remain;
    },
    addLeadingZeros: value => {
        value = String(value);
        while (value.length < 2) {
            value = '0' + value;
        }
        return value;
    }
};
Number.isNaN =
    Number.isNaN ||
    function(value) {
        return typeof value === 'number' && isNaN(value);
    };
function isEmpty(value) {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0) ||
        (typeof value === 'number' && Number.isNaN(value))
    );
}
function daysInMonth(m, y) {
    // Month is indexed as 0-11
    switch (m) {
        case 1:
            return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
        case 8:
        case 3:
        case 5:
        case 10:
            return 30;
        default:
            return 31;
    }
}

function isValidDayinM(d, m, y) {
    const daysInM = daysInMonth(m, y);
    return m >= 0 && m < 12 && d > 0 && d <= daysInM;
}
