// // define my variables that I need => all the form fields
// const timeFrame = document.querySelector('#timePeriod');
// // const maxDays = document.querySelector('#maxDays');
// // const firstEntryDate = document.querySelector('#firstEntry');
// const entryDate = document.querySelector('#entryDate');
// // const exitDate = document.querySelector('#exitDate');
// const submitBtn = document.querySelector('.submit-btn');


// // // use info put into fields to calculate the output info

// // // put info on screen for user to see and make adjustments

// // // add eventlistener to submit btn and this will trigger
// // // the calculation of all the values in the fields

// submitBtn.addEventListener('click', event => {
// //   // prevent page from clearing fields automatically
//   event.preventDefault();
//   // const fp = function flatpick() {
//   //   flatpickr(".datepicker", {
//   //     defaultDate: 'today',
//   //     dateFormat: "d.m.Y",
//   //     maxDate: "today",
//   //     mode: "range",
//   //     locale: "ru",
//   //   });
//   // }

//   let d = new Date();
//   console.log(timeFrame.value);
//   console.log(d.toString());
//   // const fp = flatpickr(entryDate, {});
//   // console.log(fp);

//   // console.log(fp.currentYear); // gives us this year, how do we get year of field?
//   // console.log(fp.currentMonth); // same as above
//   // console.log(fp.selectedDates); // gives us empty array
// });
const time = document.querySelector('.datepicker');

time.flatpickr({
    allowInput: true,
    wrap: true,
    altInput: true,
    // humanfriendly date
    altFormat: "F j, Y",
    dateFormat: "Y-m-d"
});


// const timeFrame = document.querySelector('#timePeriod');
const submitBtn = document.querySelector('.submit-btn');
// const exitDate = document.querySelector('#exitDate');
// const entryDate = document.querySelector('#entryDate');

// fpExit.selectedDates[0]
// const amountDays = ((fpExit.selectedDates - fpEntry.selectedDates) / (60*60*24*1000));

// const array = Object.values(fpExit)[27];
// const arraySplit = JSON.stringify(array);
// const sliceArray = fpEntry.selectedDates[0].slice;
const fpEntry = flatpickr('#entryDate', {});
const fpExit = flatpickr('#exitDate', {});
// const amountDays = fpExit - fpEntry;
submitBtn.addEventListener('click', event => {
  event.preventDefault();
const exDate = fpExit.selectedDates[0];
const enDate = fpEntry.selectedDates[0];
const amountDays = ((exDate - enDate) / (60*60*24*1000));

const amountDaysRounded = Math.floor(amountDays)+1;

// console.log(fpEntry);
// console.log(fpExit);
console.log(amountDaysRounded);
console.log(amountDays);
});

// if its the same year and month, just exitday-entryday
// if not then see how many days each month has




