const time = document.querySelector('.datepicker');
const addBtn = document.querySelector('.add-btn');
const timeFrame = document.querySelector('#timePeriod');
const maxDays = document.querySelector('#maxDays');
const submitBtn = document.querySelector('.submit-btn');
let entryDateNum = 0;
let exitDateNum = 0;

time.flatpickr({
    allowInput: true,
    wrap: true,
    // humanfriendly date
    altInput: true,
    altFormat: "F j, Y",
    dateFormat: "Y-m-d"
});

let fpEntry = flatpickr('#entryDate', {});
let fpExit = flatpickr('#exitDate', {});
let addedDays;
let newFpEntry;
let newFpExit;


const addFields = function (event) {
  event.preventDefault();
  entryDateNum +=1;
  exitDateNum +=1;

  let newEntry = document.createElement('input');
  let newExit = document.createElement('input');
  // identify the parent element after which the new elements should be placed
  let parent = document.querySelector('.parent');

  // give newEntry properties
  newEntry.type = "text";
  // not working: newEntry.classList.add = ("datepicker", "flatpickr-input", "active");
  //adding CSS class names individually
  newEntry.className += "datepicker";
  newEntry.className += " flatpickr-input";
  newEntry.className += " active";
  newEntry.placeholder = "Entry Date..";
  newEntry.id = `entryDate${entryDateNum}`;

  // give newExit properties
  newExit.type = "text";
  newExit.className += "datepicker";
  newExit.className += " flatpickr-input";
  newExit.className += " active";
  newExit.placeholder = "Exit Date..";
  newExit.id = `exitDate${exitDateNum}`;

  // inserting both new elements into the DOM
  parent.appendChild(newEntry);
  parent.appendChild(newExit);

  // make new fields with entry and exit input fields that will have their
  // own id that is incremented by 1 each time you click the button

  // apply flatpickr to the new elements
 newFpEntry = flatpickr(`#entryDate${entryDateNum}`, {});
 newFpExit = flatpickr(`#exitDate${exitDateNum}`, {});

  // return newFpEntry;
  // return newFpExit;
  // console.log(newFpExit);
}

addBtn.addEventListener('click', addFields);

// }


// when the input date or exit date is after timeframe set, it needs to ignore the days
// could limit the dates you can pick by using first entry + timeframe and cancel out every date after that
// using lastExit as limit on datepickr

// start calculations when the submit button is clicked
submitBtn.addEventListener('click', event => {
  // prevents the fields to be 'filled' with invalid input elements
  event.preventDefault();
    // console.log('HELLO');
    const enNDate = newFpEntry.selectedDates[0];
    // console.log(enNDate);
    const exNDate = newFpExit.selectedDates[0];
  // calculating the days
    addedDays = ((exNDate - enNDate) / (60*60*24*1000));
    // using Math.floor to round down the days, since it would otherwise take hours into account
    // adding one day, since the entry day as well as exit day count as one full day each
    addedDaysRounded = Math.floor(addedDays)+1;
    // console.log(addedDaysRounded);
    // return addedDaysRounded;
    // return addedDaysRounded;
  let maxDaysValue = maxDays.value
  let timeFrameValue = parseInt(timeFrame.value);
  const exDate = fpExit.selectedDates[0];
  const enDate = fpEntry.selectedDates[0];
  // const enNDate = newFpEntry.selectedDates[0];
  // const exNDate = newFpExit.selectedDates[0];

  const amountDays = ((exDate - enDate) / (60*60*24*1000) + addedDaysRounded);
  // calculating the days
  // const amountDays = ((exDate - enDate) / (60*60*24*1000)) + ((exNDate - enNDate) / (60*60*24*1000));
  // using Math.floor to round down the days, since it would otherwise take hours into account
  // adding one day, since the entry day as well as exit day count as one full day each
  const amountDaysRounded = Math.floor(amountDays)+1;

  console.log(amountDaysRounded);

  // const firstEntry = `${enDate.getDate()}. ${enDate.getMonth()+1}. ${enDate.getYear()+1900}`;
  // console.log(enDate.getDate());
  // console.log(enDate.getMonth()+1); // JS starts month with index 0
  // console.log(enDate.getYear()+1900); // JS starts counting at 1900

  // function to calculate the timeFrame input to the entryDate
  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  const lastExit = addDays(enDate, timeFrameValue );
  // applying readable format: Day of the week date month year
  const lastExitReadable = lastExit.toDateString();
  // alternatively applying format: day/month/year
  // const dateFormat = Intl.DateTimeFormat().format(lastExit);
  // console.log(dateFormat);

  let text;
  if (maxDaysValue < amountDaysRounded) {
    text = `Please remove ${amountDaysRounded - maxDaysValue} days to not overstay your visit.`;
  }else {
    text = `You are within the allowed time range, using ${amountDaysRounded} days and have another ${maxDaysValue - amountDaysRounded} days to use until ${lastExitReadable}`;
  }


  // Creating new DOM-elements to display the output
  // identify parent element after which insert the results
  const parent = document.querySelector('#result');
  parent.textContent = text;
});
