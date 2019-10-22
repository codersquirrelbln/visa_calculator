// delete btn for additional trips
// LINE 129, doe not make min date of exit the entry date...


const time = document.querySelector('.datepicker');
const addBtn = document.querySelector('.add-btn');
const timeFrame = document.querySelector('#time-period');
const maxDays = document.querySelector('#max-days');
const submitBtn = document.querySelector('.submit-btn');
const firstEntry = document.querySelector('#entry-date-1');
const firstExit = document.querySelector('#exit-date-1');
const targetLocation = document.querySelector('.target-location');
let lastExit;
let entryDateNum = 1;
let exitDateNum = 1;
let allNewEntries = [];
let allNewExits = [];
let amountAllDays;
let lastExitReadable;
let timeFrameValue;
let entryDate;
let fpExit;
let exitDate;
let timeFrameValueCalendar;
let newEntryDate;
let newExitDate;
let newFpEntry;
let newFpExit;
let newFieldPairs = 0;
let parent = document.querySelector('.parent');

// get the value of timeFrame input, fired when eventlistener gets input
const setTimeFrame = () => {
  timeFrameValue = parseInt(timeFrame.value);
  return timeFrameValue;
};

time.flatpickr({
  altFormat: "F j, Y",
});

// function to calculate the timeFrame input to the entryDate
const addDays = (date, days) => {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const numOfTrips = () => {
  return (document.querySelectorAll('.datepicker').length/2);
}

let fpEntry = flatpickr('#entry-date-1', {});

firstEntry.addEventListener('input', function(event){
  entryDate = fpEntry.selectedDates[0];
  lastExit = addDays(entryDate, setTimeFrame());

  const html = `<div>You can pick any date before: ${lastExit.toDateString()}</div>`;
  targetLocation.insertAdjacentHTML('afterend', html);

  timeFrameValueCalendar = timeFrameValue;
  // console.log(`this is the timeFrameValueCalendar ${timeFrameValueCalendar}`);

  let fpExit = flatpickr('#exit-date-1', {
    // min new date entry date  fp increment 1??
     minDate: new Date(entryDate),
      maxDate: new Date(entryDate).fp_incr(timeFrameValueCalendar)
  });

  firstExit.addEventListener('input', function(event){
    exitDate = fpExit.selectedDates[0];
  })
});

const createNewField = (id) => {
  let newField = document.createElement('input');
  newField.type = "text";
  newField.className = "datepicker active flatpickr-input";
  newField.id = id;
  if (id.includes('entry')) {
    newField.placeholder = "Entry date";
  } else {
    newField.placeholder = "Exit date";
  }
  return newField;
}

const addFields = function (event) {
  event.preventDefault();
  entryDateNum +=1;
  exitDateNum +=1;

  parent.appendChild(createNewField(`entryDate${entryDateNum}`));
  parent.appendChild(createNewField(`exitDate${exitDateNum}`));

  let allBlockedDates = [];
  allBlockedDates.push({from: entryDate, to: exitDate});

  for (let i = 0; i < (numOfTrips()-2); i ++) {
    let entries = allNewEntries[i];
    // console.log(`entries: ${entries}`);
    newEntryDate = entries.selectedDates[0];
    // console.log(`new entry date = ${newEntryDate}`);
    let exits = allNewExits[i];
    newExitDate = exits.selectedDates[0];
    // console.log(`new exit date = ${newExitDate}`);
    allBlockedDates.push({from: newEntryDate, to: newExitDate});
    // console.log(`all blocked dates entry und exit ${allBlockedDates}`);
  };

 /* create new fields with entry and exit input fields that will have their
   own id that is incremented by 1 each time you click the button
  apply flatpickr to the new elements */
  // console.log(allBlockedDates);
  newFpEntry = flatpickr(`#entryDate${entryDateNum}`,
              //  Block out dates before first entry
              {minDate: new Date(entryDate),
              maxDate: new Date(entryDate).fp_incr(timeFrameValueCalendar),
              disable: allBlockedDates
            });
  console.log(`newfpentry: ${newFpEntry}`);
  newFpExit = flatpickr(`#exitDate${exitDateNum}`,
               //  Block out the dates before first entry
               ///////////////////////////////
  ///////how can i make the min date the date i picked as entry??///////////
               ///////////////////////////////

              {minDate: new Date (entryDate),
               maxDate: new Date(entryDate).fp_incr(timeFrameValueCalendar),
               disable: allBlockedDates
              });

  allNewEntries.push(newFpEntry);
  allNewExits.push(newFpExit);
};


// adding eventListener to the Add Trip button, callbackfunction = addField
addBtn.addEventListener('click', addFields);

// start calculations when the submit button is clicked
submitBtn.addEventListener('click', event => {
  // prevents the fields to be 'filled' with invalid input elements
  event.preventDefault();

  // defining variables and assigning them to values you can use in calculation
  let maxDaysValue = maxDays.value;
  let text;

  /* calculating the days of first trip, adding one day, since the entry day as
  well as exit day count as one full day each */
  let amountFirstDays = ((exitDate - entryDate) / (60*60*24*1000)) + 1;
  let amountFirstDaysRounded = Math.floor(amountFirstDays);

  /* check if there are new fields added or the calculation is limited to onw trip
  if there is an element in the DOM that has the id = entryDate2,
  the value will be assigned to the new entry variables and the amount of days
  bewteen the dates will be calculated */
  let addedDays = 0;
  let allAddedDaysRounded = 0;

  if (numOfTrips() > 1){
    for (let i = 0; i < (numOfTrips()-1); i ++) {
      let entries = allNewEntries[i];
      // console.log(`entries: ${entries}`);
      newEntryDate = entries.selectedDates[0];
      // console.log(`new entry date = ${newEntryDate}`);
      let exits = allNewExits[i];

      newExitDate = exits.selectedDates[0];
      // console.log(`new exit date = ${newExitDate}`);

      /* calculating the days, adding one day, since the entry day as well
      as exit day count as one full day each */
      addedDays = ((newExitDate - newEntryDate) / (60*60*24*1000)) + 1;
      // console.log(`added days = ${addedDays}`);

      /*using Math.floor to round down the days, since it would otherwise
      take hours into account */
      addedDaysRounded = Math.floor(addedDays);
      // console.log(`added days rounded = ${addedDaysRounded}`);

      // adding result to the variable that will later be used to calculate all days
      allAddedDaysRounded += addedDaysRounded;
      // console.log(`all added days rounded = ${allAddedDaysRounded}`);
    }
  }

  if (numOfTrips() < 1){
    // If there is only one trip, amountAllDays = amountFirstDaysRounded
    amountAllDays = amountFirstDaysRounded;
  }else{
    // if there are more trips, it adds them to the first trip
    amountAllDays = amountFirstDaysRounded  + allAddedDaysRounded;
  }

   // applying readable format: Day of the week date month year
  lastExitReadable = lastExit.toDateString();
  /* alternatively applying format: day/month/year
  const dateFormat = Intl.DateTimeFormat().format(lastExit); */

  // output:
  if (maxDaysValue < amountAllDays) {
    text = `To be within the accepted limitations, remove ${amountAllDays - maxDaysValue} days to not overstay your visit.`;
  }else {
    text = `You are within the allowed time range, using ${amountAllDays} days and have another ${maxDaysValue - amountAllDays} days to use until ${lastExitReadable}`;
  }

  /* Creating new DOM-elements to display the output
  identify parent element after which insert the results */
  const result = document.querySelector('#result');
  result.textContent = text;
});

/* Reminder how JS Dates work:
const firstEntry = `${entryDate.getDate()}. ${entryDate.getMonth()+1}. ${entryDate.getYear()+1900}`;
console.log(entryDate.getDate());
console.log(entryDate.getMonth()+1); // JS starts month with index 0
console.log(entryDate.getYear()+1900); // JS starts counting at 1900 */
