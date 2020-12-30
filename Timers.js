// Timers are important in javascript and they fireasynchronously. They are used in animation , video games etc..

// setTimeOut()
let timeoutId = setTimeout(function () {
  console.log("1 second pased");
}, 1000);

// if need to cancel
clearTimeout(timeoutId);

// ssetInterval()
let intervalId = setInterval(function () {
  console.log("1 second passed");
}, 1000);

// if need to cancel
clearInterval(intervalId);
