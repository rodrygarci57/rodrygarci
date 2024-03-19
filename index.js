const moment = require('moment');

// Function to calculate the phase of the moon for a given date
function moonPhase(date) {
    const phases = ['New Moon', 'Waxing Crescent', 'First Quarter', 'Waxing Gibbous', 'Full Moon', 'Waning Gibbous', 'Last Quarter', 'Waning Crescent'];
    const index = Math.floor((date.getMonth() * 30 + date.getDate() + 2) / 7) % 8;
    return phases[index];
}

// Function to check if a given year is a leap year
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Function to calculate the next lunar eclipse date after a given date
function nextLunarEclipseDate(date) {
    // Dummy logic for demonstration
    return moment(date).add(29, 'days').toDate();
}

module.exports = { moonPhase, isLeapYear, nextLunarEclipseDate };
