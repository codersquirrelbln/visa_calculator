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

  let entryDateNum = 0;
  let exitDateNum = 0;


addBtn.addEventListener('click', event => {
  event.preventDefault();
  // <input class="datepicker" type="text" placeholder="Entry Date.."  id="entryDate">


// make new fields with entry and exit input fields that will have their own id that is incremented by 1 each time you click the button
  entryDateNum +=1;
  exitDateNum +=1;

  let newEntry = document.createElement('input');
  let newExit = document.createElement('input');
  let parent = document.querySelector('.parent');

  newEntry.type = "text";
  // newEntry.classList.add = ("datepicker", "flatpickr-input", "active"); // set the CSS class
  newEntry.className += "datepicker"; // set the CSS class
  newEntry.className += " flatpickr-input"; // set the CSS class
  newEntry.className += " active"; // set the CSS class
  newEntry.placeholder = "Entry Date..";
  newEntry.id = `entryDate${entryDateNum}`;
  console.log(newEntry.id);
  newExit.type = "text";
  newExit.className += "datepicker";
  newExit.className += " flatpickr-input";
  newExit.className += " active";
  newExit.placeholder = "Exit Date..";
  newExit.id = `exitDate${exitDateNum}`;
 // new input fields need to be associated with datepicker
  parent.appendChild(newEntry); // put it into the DOM
  parent.appendChild(newExit); // put it into the DOM

});


submitBtn.addEventListener('click', event => {
  event.preventDefault();
  let maxDaysValue = maxDays.value
  let timeFrameValue = parseInt(timeFrame.value);
  const exDate = fpExit.selectedDates[0];
  const enDate = fpEntry.selectedDates[0];
  const amountDays = ((exDate - enDate) / (60*60*24*1000));
  // const timeFrameEnd = ((enDate + timeFrameValue) / (60*60*24*1000));
  const amountDaysRounded = Math.floor(amountDays)+1;

  console.log(amountDaysRounded);

  // const firstEntry = `${enDate.getDate()}. ${enDate.getMonth()+1}. ${enDate.getYear()+1900}`;
  // console.log(enDate.getDate());
  // console.log(enDate.getMonth()+1);
  // console.log(enDate.getYear()+1900);


  // console.log(typeof(timeFrame)); // object object



  function addDays(date, days) {
    let result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
    // console.log(result.getDate());
    // console.log(result.getMonth()+1);
    // console.log(result.getYear()+1900);
  }

  const lastExit = addDays(enDate, timeFrameValue );
  // Day of the week date month year format
  const lastExitReadable = lastExit.toDateString();
  // day/month/year format
  // const dateFormat = Intl.DateTimeFormat().format(lastExit);
  // console.log(dateFormat);


// all this should go into an output box on the screen
  if (maxDaysValue < amountDaysRounded) {
    console.log(`You are overstaying your visit by ${amountDaysRounded - maxDaysValue} days`)
  }else {
    console.log(`You are within the allowed time range, using ${amountDaysRounded} days and have another ${maxDaysValue - amountDaysRounded} days to use until the ${lastExitReadable}`)
  }
});



// if not then see how many days each month has




