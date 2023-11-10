export const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const monthsOfYear = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const monthsShortNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];

export const getMaxExpireDate = () => {
    var d = new Date();
    d.setTime(d.getTime() + 999 * 24 * 60 * 60 * 1000);
    return d;
};

export const getDDMMYYYY = (date: number) => {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1;
    const year = d.getFullYear();
    return {
        day,
        month,
        year,
    };
};

/**
 * eg: 10:20 AM, 09:20 PM, Yesterday, Last week, Last month, Last year
 *
 */
export const getHumanDateFormat = (date: number, time?: boolean) => {
    try {
        const d = new Date(date);
        const { day, month, year } = getDDMMYYYY(date);
        const {
            day: cday,
            month: cMonth,
            year: cYear,
        } = getDDMMYYYY(Date.now());
        const hour = d.getHours();
        const minutes = d.getMinutes();
        const hr = hour < 10 ? `0${hour}` : hour > 12 ? hour - 12 : hour;
        const mm = minutes > 9 ? minutes : `0${minutes}`;
        const ampm = hour > 12 ? 'pm' : 'am';
        if (day === cday && month === cMonth && year === cYear) {
            const hour = d.getHours();
            const minutes = d.getMinutes();
            const hr = hour < 10 ? `0${hour}` : hour > 12 ? hour - 12 : hour;
            const mm = minutes > 9 ? minutes : `0${minutes}`;
            const ampm = hour > 12 ? 'pm' : 'am';
            return `${hr}:${mm} ${ampm}`;
        }
        if (day + 1 === cday) {
            return time ? `Yesterday, ${hr}:${mm} ${ampm}` : 'Yesterday';
        }
        const dd = day > 9 ? day : `0${day}`;
        const curY = new Date().getFullYear();
        if (Math.abs(curY - year) >= 1) {
            return time
                ? `${dd}/${month}/${year}, ${hr}:${mm} ${ampm}`
                : `${dd}/${month}/${year}`;
        }
        const curM = new Date().getMonth();
        if (Math.abs(curM - month) >= 1) {
            return `${d.toLocaleDateString('en-US', {
                month: 'short',
            })} ${dd}`;
        }
        if (Math.abs(cday - day) >= 2) {
            return `${d.toLocaleDateString('en-US', {
                weekday: 'short',
            })} ${d.toLocaleDateString('en-US', {
                day: 'numeric',
            })}`;
        }
        return '';
    } catch {
        return '';
    }
};

// full hour time format //
export function fullHourTimeFormat(time: number) {
    try {
        var currentHours = Math.floor(time / 3600);
        var currentMinutes = Math.floor(time / 60);
        var currentSeconds = Math.floor(time % 60);
        var hours = '' + currentHours;
        var minutes = '' + currentMinutes;
        var seconds = (currentSeconds < 10 ? '0' : '') + currentSeconds;

        return currentHours >= 1
            ? `${hours}:${minutes}:${seconds}`
            : `${minutes}:${seconds}`;
    } catch {
        return `00:00`;
    }
}

export const getUTCTime = (date?: Date): number => {
    try {
        if (date) {
            return new Date(date).getTime();
        }
        return Date.now();
    } catch (e) {
        console.log('get utc time error ', e);
        return Date.now();
    }
};

export const getDatesSecondDifference = (date1: number, date2: number) => {
    try {
        return new Date(date1).getSeconds() - new Date(date2).getSeconds();
    } catch {
        return 0;
    }
};

export const getHHMM = (date: number) => {
    // Get the hour (0-23)
    const d = new Date(date);
    let hours: number | string = d.getHours();
    const period = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    hours = hours < 10 ? '0' + hours : hours;
    let minutes: number | string = d.getMinutes();
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${period}`;
};

/**
 * eg: sunday, May 14th
 */
export const getDayMonthDate = (date?: number) => {
    try {
        if (date) {
            const d = new Date(date);
            const dayOfWeek = daysOfWeek[d.getDay()];

            const monthOfYear = monthsOfYear[d.getMonth()];

            // Get date of the month and append suffix
            const dateOfMonth = d.getDate();
            let suffix = 'th';
            if (dateOfMonth === 1 || dateOfMonth === 21 || dateOfMonth === 31) {
                suffix = 'st';
            } else if (dateOfMonth === 2 || dateOfMonth === 22) {
                suffix = 'nd';
            } else if (dateOfMonth === 3 || dateOfMonth === 23) {
                suffix = 'rd';
            }

            // Return the formatted date
            return `${dayOfWeek}, ${monthOfYear} ${dateOfMonth}${suffix}`;
        }
        return '';
    } catch {
        return '';
    }
};

export const getMonthName = (date: number) => {
    try {
        const d = new Date(date);
        const month = monthsOfYear[d.getMonth()];
        return `${month}`;
    } catch {
        return '';
    }
};

export const getMonthYear = (date: number) => {
    try {
        const d = new Date(date);
        const month = monthsOfYear[d.getMonth()];
        const year = d.getFullYear();

        return `${month}, ${year}`;
    } catch {
        return '';
    }
};

export const isSameYear = (date1: number, date2: number) => {
    try {
        return new Date(date1).getFullYear() === new Date(date2).getFullYear();
    } catch {
        return false;
    }
};
