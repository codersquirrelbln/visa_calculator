// define my variables that I need => all the form fields
const timeFrame = document.querySelector('#timePeriod');
const maxDays = document.querySelector('#maxDays');
const firstEntryDate = document.querySelector('#firstEntry');
const travelEntry = document.querySelector('#travelEntry');
const travelExit = document.querySelector('#travelExit');
const submitBtn = document.querySelector('.submit-btn');
// use eventlistener to activate fields

// timeFrame.addEventListener('focus', event => {
//   event.target.className = 'highlight';

// });

// use info put into fields to calculate the output info


// put info on screen for user to see and make adjustments

// add eventlistener to submit btn and this will trigger
// the calculation of all the values in the fields

submitBtn.addEventListener('click', event => {
  // prevent page from clearing fields automatically
  event.preventDefault();

  // testing values in form
  let timeFrameValue = timeFrame.value;
  let maxDaysValue = maxDays.value;
  console.log(`${timeFrameValue} minus ${maxDaysValue} equals ${timeFrameValue - maxDaysValue}`);
})


