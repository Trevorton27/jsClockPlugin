const theMonth = [
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
    'December'
];

const theDay = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
];

const todaysDate = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
    '13th',
    '14th',
    '15th',
    '16th',
    '17th',
    '18th',
    '19th',
    '20th',
    '21st',
    '22nd',
    '23rd',
    '24th',
    '25th',
    '26th',
    '27th',
    '28th',
    '29th',
    '30th',
    '31st'
];


//global variable to set initial time display based on 12hr clock
let twelveHourTime = true;

//pulls current time from browser via the Date object and concatenates "0" for two digit display of single digit time values also establishes logic for 12 and 24 hour time displays.
function displayTime() {
    const theTime = new Date();
    const hour = theTime.getHours();
    const minute = theTime.getMinutes();
    const second = theTime.getSeconds();
    const amPmHours = hour > 12 ? hour - 12 : hour;
    const twoDigitMinutes = minute < 10 ? minute.innerText = "0" + minute : theTime.getMinutes();
    const twoDigitSeconds = second < 10 ? second.innerText = "0" + second : theTime.getSeconds();
    let currentTime = `${amPmHours}:${twoDigitMinutes}:${twoDigitSeconds}`;
    let currentMiltaryTime = `${hour}:${twoDigitMinutes}:${twoDigitSeconds}`;

    if(twelveHourTime) {
        document.getElementsByClassName("clock")[0].innerHTML = currentTime;
    } else {
        document.getElementsByClassName("clock")[0].innerHTML = currentMiltaryTime;
    }
    

    
};

//pulls and conficugures data for display of current month, day and date using Date object
function displayDate(){
    const theDate = new Date();
    const month = theMonth[theDate.getMonth()];
    const date = todaysDate[theDate.getDate() -1];
    const day = theDay[theDate.getDay() -1];
    const todayIs = `Today is ${day} ${month} ${date}`;

    document.getElementsByClassName("date")[0].innerHTML = todayIs;
}

//event listener to change between 12/24 hr display via "Click Me" button below clock.
document.getElementById("timechange-button").addEventListener("click", function() {
    if(twelveHourTime) {
        twelveHourTime = false;
    } else {
        twelveHourTime = true;
    }
});
displayDate();
displayTime();
setInterval(displayTime, 1000);
