const time = document.querySelector('.datepicker');

time.flatpickr({
    allowInput: true,
    wrap: true,
    // humanfriendly date
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d"
});

const clearEntryBtn = document.querySelector('#clearEntry');
const clearExitBtn = document.querySelector('#clearExit');
const timeFrame = document.querySelector('#timePeriod');
const maxDays = document.querySelector('#maxDays');
const submitBtn = document.querySelector('.submit-btn');
const fpEntry = flatpickr('#entryDate', {});
const fpExit = flatpickr('#exitDate', {});
const today = new Date();


clearEntryBtn.addEventListener('click', event => {
  event.preventDefault();
  fpEntry = 'all gone';
  console.log('hello');
});

clearExitBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log('howdy');
});


submitBtn.addEventListener('click', event => {
  event.preventDefault();
  let maxDaysValue = maxDays.value
  let timeFrameValue = timeFrame.value;
  console.log(today.selectedDates);
  const exDate = fpExit.selectedDates[0];
  const enDate = fpEntry.selectedDates[0];
  const amountDays = ((exDate - enDate) / (60*60*24*1000));
  const TimeFrameEnd = ((enDate + timeFrameValue) / (60*60*24*1000));
  const amountDaysRounded = Math.floor(amountDays)+1;

  console.log(amountDaysRounded);
  console.log(enDate);
 // year, monthIndex , day

  // console.log(typeof(timeFrame)); // object object
  // console.log(amountDays);
// if its the same year and month, just exitday-entryday
  if (maxDaysValue < amountDaysRounded) {
    console.log(`You are overstaying your visit by ${amountDaysRounded - maxDaysValue} days`)
  }else {
    console.log(`You are within the allowed time range and have another ${maxDaysValue - amountDaysRounded} to use until the ${enDate + timeFrameValue}`)
  }
});



// if not then see how many days each month has




