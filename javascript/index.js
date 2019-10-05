// define my variables that I need => all the form fields
const timeFrame = document.querySelector('#timePeriod');
// const maxDays = document.querySelector('#maxDays');
// const firstEntryDate = document.querySelector('#firstEntry');
// const entryDate = document.querySelector('#entryDate');
// const exitDate = document.querySelector('#exitDate');
const submitBtn = document.querySelector('.submit-btn');


// // use info put into fields to calculate the output info

// // put info on screen for user to see and make adjustments

// // add eventlistener to submit btn and this will trigger
// // the calculation of all the values in the fields

submitBtn.addEventListener('click', event => {
//   // prevent page from clearing fields automatically
  event.preventDefault();
  // const fp = function flatpick() {
  //   flatpickr(".datepicker", {
  //     defaultDate: 'today',
  //     dateFormat: "d.m.Y",
  //     maxDate: "today",
  //     mode: "range",
  //     locale: "ru",
  //   });
  // }


  const fp = flatpickr(entryDate, {});
  console.log(fp);

  console.log(fp.currentYear); // gives us this year, how do we get year of field?
  console.log(fp.currentMonth); // same as above
  console.log(fp.selectedDates); // gives us empty array
});




