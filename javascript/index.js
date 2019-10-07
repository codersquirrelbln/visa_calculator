const time = document.querySelector('.datepicker');

time.flatpickr({
    allowInput: true,
    wrap: true,
    altInput: true,
    // humanfriendly date
    altFormat: "F j, Y",
    dateFormat: "Y-m-d"
});


const timeFrame = document.querySelector('#timePeriod');
const submitBtn = document.querySelector('.submit-btn');
const fpEntry = flatpickr('#entryDate', {});
const fpExit = flatpickr('#exitDate', {});

submitBtn.addEventListener('click', event => {
  event.preventDefault();
  const exDate = fpExit.selectedDates[0];
  const enDate = fpEntry.selectedDates[0];
  const amountDays = ((exDate - enDate) / (60*60*24*1000));
  const amountDaysRounded = Math.floor(amountDays)+1;

  console.log(amountDaysRounded);
  console.log(amountDays);
});

// if its the same year and month, just exitday-entryday
// if not then see how many days each month has




