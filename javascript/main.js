
// html syntax use - exit-date-1
// change to new arrow func syntax const setTimeFrame = () => {

// calculate dynamically, without submit btn

// delete btn for additional trips

//  give last exit date information as soon as time frame and first entry date are entered
// using eventlistener, what typoe of event? click or input reacts already just on
// clicking in field. we want trigger when date is picked. mouseout works, but i want it to
// trigger, even if mouse is not moved

const time = document.querySelector('.datepicker');
const addBtn = document.querySelector('.add-btn');
const timeFrame = document.querySelector('#timePeriod');
const maxDays = document.querySelector('#maxDays');
const submitBtn = document.querySelector('.submit-btn');
const firstEntry = document.querySelector('#entryDate1');
const firstExit = document.querySelector('#exitDate1');
const targetLocation = document.querySelector('.target-location');
console.log(targetLocation);
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
// dates for the days that should get blocked out
let entryDt;
let exitDt;
let parent = document.querySelector('.parent');



// get the value of timeFrame input, fired when eventlistener gets input
const setTimeFrame = () => {
  // timeFrameValue = timeFrame.value // gives me 180
  timeFrameValue = parseInt(timeFrame.value);
  // console.log(`this is the timeFrameValue: ${timeFrameValue} `);
  console.log(timeFrameValue);
  return timeFrameValue;
};

// timeFrame.addEventListener('input', setTimeFrame);

// needs to get triggered when first date is input
// const timeFrameInfo = () => {
//   const newDiv = document.createElement("p");
//   const timeFramePrint = document.createTextNode(lastExitReadable);
//   newDiv.appendChild(timeFramePrint);

//   // add the newly created element and its content into the DOM

//   // console.log(currentP);
//   // console.log(timeFramePrint);
//   document.body.insertBefore(newDiv, target);
//   const html = `<div>${lastExitReadable}</div>`

//   targetLocation.insertAdjacentHTML('afterend', html)
// }

// firstEntry.addEventListener('input', timeFrameInfo());
// firstEntry.addEventListener('input', timeFrameInfo())
// {
//   event.preventDefault();
//   // setTimeFrame();
//   timeFrameInfo();
// });

// timeFrame.addEventListener('input', setTimeFrame);

time.flatpickr({
  // allowInput: true,
  // wrap: true,
  // humanfriendly date
  // altInput: true,
  altFormat: "F j, Y",
  dateFormat: "d.m.Y"

  // maxDate:
});

// function to calculate the timeFrame input to the entryDate
function addDays(date, days) {
  let result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const numOfTrips = () => {
  return (document.querySelectorAll('.datepicker').length/2);
}
  // console.log(numOfTrips()); // gives me already existing 3 with datepickr class
// console.log(`This is the one after fucntion def: ${numOfTrips}`);

let fpEntry = flatpickr('#entryDate1', {});

// timeFrame.addEventListener('input', setTimeFrame);
firstEntry.addEventListener('input', function(event){
  entryDate = fpEntry.selectedDates[0];
  // console.log(`this is the entryDate: ${entryDate}`);

  lastExit = addDays(entryDate, setTimeFrame() );
  console.log(`Last exit: ${lastExit}`);
  const html = `<div>${lastExit}</div>`;
  // strf

  targetLocation.insertAdjacentHTML('afterend', html);
  //////////////////////////
  // call function to insert paragraph with info last exit date HERE


  //////////////////////////


  // lastExitReadable = lastExit.toDateString();
  // console.log(lastExitReadable);

  timeFrameValueCalendar = timeFrameValue;
  // console.log(`this is the timeFrameValueCalendar ${timeFrameValueCalendar}`);

  let fpExit = flatpickr('#exitDate1', {
    // min new date entry date  fp increment 1??
     minDate: new Date(entryDate),
      maxDate: new Date(entryDate).fp_incr(timeFrameValueCalendar)
  });

  // let firstEntryDay = firstEntry.getDate();
  // console.log(firstEntryDay);
  firstExit.addEventListener('input', function(event){
    exitDate = fpExit.selectedDates[0];
    // console.log(`this is the exitDate ${exitDate}`);
  })
});

let classNum = 0;
console.log(`classnum before new field: ${classNum}`);
const createNewField = (id) => {
  classNum += 1;
console.log(`classnum after new field: ${classNum}`);

  let newField = document.createElement('input');
  newField.type = "text";
  newField.className = " classNum datepicker active flatpickr-input";
  newField.id = id;
  if (id.includes('entry')) {
    newField.placeholder = "Entry date";
  } else {
    newField.placeholder = "Exit date";
  }
  return newField;
}

const createDeleteButton = () => {
  classNum += 1;
console.log(`classnum after del btn: ${classNum}`);

  const delBtn = document.createElement("Button");
  const btnText = document.createTextNode('Delete');
  delBtn.setAttribute("style", "border: none, border-radius: 10px, padding: 12px 10px, text-align: center, cursor: pointer, background: coral, color: whitesmoke");
  delBtn.class = 'classNum';
  delBtn.appendChild(btnText);
    // strf
  parent.appendChild(delBtn);

  // console.log(`parent: ${parent}`);
// delBtn.addEventListener('click', deleteTrip = () => {

// const childElement = document.getElementById(`entryDate${entryDateNum}`);
// document.getElementById(`entryDate${entryDateNum}`).removeChild(childElement);
//   if (true) {
//     console.log('deleting');
//   }
// });
}


const deleteTrip = () => {
  const delEntry = document.getElementById(`entryDate${entryDateNum}`);
  const delExit = document.getElementById(`exitDate${exitDateNum}`);
  console.log(delEntry);
  console.log(delExit);

  // if (delBtn.id === newField.id) {
  //   console.log('deleting');
  // }
}
deleteTrip();

const addFields = function (event) {
  event.preventDefault();
  entryDateNum +=1;
  exitDateNum +=1;

  parent.appendChild(createNewField(`entryDate${entryDateNum}`));
  parent.appendChild(createNewField(`exitDate${exitDateNum}`));
  createDeleteButton(`${exitDateNum}`);



  let allBlockedDates = [];
  allBlockedDates.push({from: entryDate, to: exitDate});
  // console.log(`blcoekd dates first trip: ${allBlockedDates}`);
  // let newDates;
 console.log(numOfTrips());
  for (let i = 0; i < (numOfTrips()-2); i ++) {
    let entries = allNewEntries[i];
    // console.log(`entries: ${entries}`);
    newEntryDate = entries.selectedDates[0];
    // console.log(`new entry date = ${newEntryDate}`);
    // console.log(`all blocked dates entry ${allBlockedDates}`);
    let exits = allNewExits[i];

    newExitDate = exits.selectedDates[0];
    // console.log(`new exit date = ${newExitDate}`);
    allBlockedDates.push({from: newEntryDate, to: newExitDate});
    // console.log(`all blocked dates entry und exit ${allBlockedDates}`);
    // console.log(typeof(allBlockedDates));
  };

  console.log(`all blocked dates entry und exit ${allBlockedDates}`);

  // // need to iterate through all complete array
    function Block(entry, exit) {
      this.entry = entry;
      this.exit = exit;
    }

 /* create new fields with entry and exit input fields that will have their
   own id that is incremented by 1 each time you click the button
  apply flatpickr to the new elements */
  console.log(allBlockedDates);
  newFpEntry = flatpickr(`#entryDate${entryDateNum}`,
    //  block out dates before first entry
              {minDate: new Date(entryDate),
                maxDate: new Date(entryDate).fp_incr(timeFrameValueCalendar),
              disable: allBlockedDates
                    });
  newFpExit = flatpickr(`#exitDate${exitDateNum}`,
    //  block out the dates before first entry
              {minDate: new Date(newFpEntry),
                maxDate: new Date(entryDate).fp_incr(timeFrameValueCalendar),
                disable: allBlockedDates
                    });


// needs to call function that loops through the dates and place the right to and from pairs together
// needs to loop and open new pair as long as there are pairs
  // console.log(`all blocked dates after flatpickr: ${allBlockedDates}`);
  allNewEntries.push(newFpEntry);
  allNewExits.push(newFpExit);
};


// adding eventListener to the Add Trip button, callbackfunction = addField
addBtn.addEventListener('click', addFields);



// firstExit.addEventListener('click', event => {

// start calculations when the submit button is clicked
submitBtn.addEventListener('click', event => {
// console.log(`This is the one after hitting submit: ${numOfTrips()}`);

  // prevents the fields to be 'filled' with invalid input elements
  event.preventDefault();

  // defining variables and assigning them to values you can use in calculation
  let maxDaysValue = maxDays.value;
  // let timeFrameValue = parseInt(timeFrame.value);
  let text;
  // let entryDate = fpEntry.selectedDates[0];
  // let exitDate = fpExit.selectedDates[0];

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

  // console.log(numOfTrips());
    if (numOfTrips() > 1){
      // console.log('num trips is larger than 1');

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


  // calling addDays function, assigning result to last day of time frame


   // lastExit = addDays(entryDate, timeFrameValue );

   // applying readable format: Day of the week date month year
   let lastExitReadable = lastExit.toDateString();
   /* alternatively applying format: day/month/year
  const dateFormat = Intl.DateTimeFormat().format(lastExit); */


  // output:
  if (maxDaysValue < amountAllDays) {
    text = `Please remove ${amountAllDays - maxDaysValue} days to not overstay your visit.`;
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
