function formatTime(min) {
    let day, hour;
    day = Math.floor(min / 1440);
    min -= 1440 * day;
    hour = Math.floor(min/60);
    min -= 60 * hour;
    return `${day} day(s) ${hour} hour(s) ${min} minute(s)`;
}
console.log(formatTime(1501));