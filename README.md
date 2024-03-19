# Rodrygarci

Rodrygarci is a Node.js module that provides functionality for lunar phase calculations and celestial events.

## Installation

You can install Rodrygarci via npm: `npm install rodrygarci`

## Usage

Here's an example of how to use Lunar Utils in your Node.js application:

```javascript
const lunarUtils = require('lunar-utils');

const date = new Date(); // Use any date you want
console.log('Moon phase:', lunarUtils.moonPhase(date));
console.log('Is leap year:', lunarUtils.isLeapYear(date.getFullYear()));
console.log('Next lunar eclipse date:', lunarUtils.nextLunarEclipseDate(date));
```


