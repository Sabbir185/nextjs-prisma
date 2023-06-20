/**
 * 
 * Date Object
 *  
 */
// 1.a answer:
function getDayOfWeek(date) {
  let date_split = date.split('-');
  let year = parseInt(date_split[0]);
  let month = parseInt(date_split[1]) - 1;
  let day = parseInt(date_split[2]);

  let n = new Date(year, month, day);
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return daysOfWeek[n.getDay()];
}
let inputDate = "2023-06-20";
let dayOfWeek = getDayOfWeek(inputDate);
console.log(dayOfWeek);


// 1.b answer:
function getCurrentDayOfWeek() {
  let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let currentDate = new Date();
  let dayOfWeek = currentDate.getDay();

  return daysOfWeek[dayOfWeek];
}
let currentDayOfWeek = getCurrentDayOfWeek();
console.log(currentDayOfWeek);



/**
 * 
 * Math Object
 *  
 */
// 2.a answer:
function squareRootOfSumOfSquares(numbers) {
  let sumOfSquares = numbers.reduce(function (acc, num) {
    return acc + Math.pow(num, 2);
  }, 0);

  let squareRoot = Math.sqrt(sumOfSquares);

  return squareRoot;
}
let numbers = [2, 3, 4, 5];
let result = squareRootOfSumOfSquares(numbers);
console.log(result);


// 2.b answer:
function displaySquareRootOfSumOfSquares(numbers) {
  const sumOfSquares = numbers.reduce((sum, number) => sum + (number * number), 0);
  const squareRoot = Math.sqrt(sumOfSquares);
  console.log('Square root of the sum of squares:', squareRoot);
}
const nums = [3, 4, 5];
displaySquareRootOfSumOfSquares(nums);



/**
 * 
 * Numbers
 *  
 */
// 3.a answer:
function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));  // true
console.log(isPrime(12)); // false


// 3.b answer:
const checkPrime = (number) => {
  let isPrime = true;
  if (number <= 1) {
    console.log(`${number} is a not prime number`);

  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }

  } else {
    console.log("The number is not a prime number.");
  }
}

checkPrime(12) // pass argument(number) to check prime number



/**
 * 
 * Window Object
 *  
 */
// 4.a answer:
function openWindowWithDimensions(url, width, height) {
  const windowFeatures = `width=${width},height=${height}`;
  const newWindow = window.open(url, '_blank', windowFeatures);
  if (newWindow) {
    newWindow.focus();
  } else {
    console.log('Failed');
  }
}
openWindowWithDimensions('https://github.com/Sabbir185', 800, 600);


// 4.b answer:
function openWindowWithDimensions() {
  const url = 'https://www.example.com';
  const width = 800;
  const height = 600;

  const windowFeatures = `width=${width},height=${height}`;

  const newWindow = window.open(url, '_blank', windowFeatures);

  if (newWindow) {
    newWindow.focus();
  } else {
    console.log('Failed to open the new window. Please check your browser settings.');
  }
}

openWindowWithDimensions();


/**
 * 
 * Navigator Object
 *  
 */
// 5.a answer:
function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName, browserVersion;

  if (userAgent.includes('Firefox')) {
    browserName = 'Firefox';
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Chrome')) {
    browserName = 'Chrome';
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Safari')) {
    browserName = 'Safari';
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Edge')) {
    browserName = 'Edge';
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('MSIE')) {
    browserName = 'Internet Explorer';
    browserVersion = userAgent.match(/MSIE (\d+\.\d+)/)[1];
  } else {
    browserName = 'Unknown';
    browserVersion = 'Unknown';
  }

  return {
    name: browserName,
    version: browserVersion
  };
}
const browserInfo = getBrowserInfo();
console.log('Browser Name:', browserInfo.name);
console.log('Browser Version:', browserInfo.version);


// 5.b answer:
function displayBrowserInfo() {
  const browserInfo = getBrowserInfo();
  console.log('Browser Name:', browserInfo.name);
  console.log('Browser Version:', browserInfo.version);
}

function getBrowserInfo() {
  const userAgent = navigator.userAgent;
  let browserName, browserVersion;

  if (userAgent.includes('Firefox')) {
    browserName = 'Firefox';
    browserVersion = userAgent.match(/Firefox\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Chrome')) {
    browserName = 'Chrome';
    browserVersion = userAgent.match(/Chrome\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Safari')) {
    browserName = 'Safari';
    browserVersion = userAgent.match(/Version\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('Edge')) {
    browserName = 'Edge';
    browserVersion = userAgent.match(/Edge\/(\d+\.\d+)/)[1];
  } else if (userAgent.includes('MSIE')) {
    browserName = 'Internet Explorer';
    browserVersion = userAgent.match(/MSIE (\d+\.\d+)/)[1];
  } else {
    browserName = 'Unknown';
    browserVersion = 'Unknown';
  }

  return {
    name: browserName,
    version: browserVersion
  };
}

displayBrowserInfo();



/**
 * 
 * Geolocation
 *  
 */
// 6.a answer:
function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        console.log('Latitude:', latitude);
        console.log('Longitude:', longitude);
      },
      error => {
        console.log('Error:', error.message);
      }
    );
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
}

getCurrentLocation();


/**
 * 
 * JS Common Events
 *  
 */
// 7.a answer:
document.addEventListener('click', function(event) {
  const x = event.pageX;
  const y = event.pageY;
  alert('Coordinates (x, y): ' + x + ', ' + y);
});


// 7.b answer:
document.addEventListener('keydown', function(event) {
  const keyCode = event.keyCode || event.which;

  alert('Key Code: ' + keyCode);
});


// 7.c answer:
<img id="myImage" src="original-image.jpg" alt="Image" />

const image = document.getElementById('myImage');

image.addEventListener('mouseover', function() {
  image.src = 'new-image.jpg';
});

image.addEventListener('mouseout', function() {
  image.src = 'original-image.jpg';
});

