const time = document.querySelector('.datepicker');

time.flatpickr({
    allowInput: true,
    wrap: true,
    // humanfriendly date
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d"
});

const addBtn = document.querySelector('.add-btn');
const timeFrame = document.querySelector('#timePeriod');
const maxDays = document.querySelector('#maxDays');
const submitBtn = document.querySelector('.submit-btn');
const fpEntry = flatpickr('#entryDate', {});
const fpExit = flatpickr('#exitDate', {});
// const today = new Date();



// addBtn.addEventListener('click', event => {
//   event.preventDefault();
//   // <input class="datepicker" type="text" placeholder="Entry Date.."  id="entryDate">

//   let input = document.createElement("input");

//   input.type = "text";
//   input.className = "datepicker"; // set the CSS class
//   input.placeholder = "Entry Date..";

//   fpExit.appendChild(input); // put it into the DOM
// });


submitBtn.addEventListener('click', event => {
  event.preventDefault();
  let maxDaysValue = maxDays.value
  let timeFrameValue = timeFrame.value;
  const exDate = fpExit.selectedDates[0];
  const enDate = fpEntry.selectedDates[0];
  const amountDays = ((exDate - enDate) / (60*60*24*1000));
  const TimeFrameEnd = ((enDate + timeFrameValue) / (60*60*24*1000));
  const amountDaysRounded = Math.floor(amountDays)+1;

  console.log(amountDaysRounded);

  // const firstEntry = `${enDate.getDate()}. ${enDate.getMonth()+1}. ${enDate.getYear()+1900}`;
  // console.log(enDate.getDate());
  // console.log(enDate.getMonth()+1);
  // console.log(enDate.getYear()+1900);


  // console.log(typeof(timeFrame)); // object object
  console.log(amountDays);

  if (maxDaysValue < amountDaysRounded) {
    console.log(`You are overstaying your visit by ${amountDaysRounded - maxDaysValue} days`)
  }else {
    console.log(`You are within the allowed time range and have another ${maxDaysValue - amountDaysRounded} to use until the ${enDate + timeFrameValue}`)
  }
});



// if not then see how many days each month has




