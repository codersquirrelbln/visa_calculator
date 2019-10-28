## Visa Calculator
This visa calculator helps plan trips with single or multiple trip dates, enabling to insert indivivual visa regulations of countries and visa zones such as Schengen.


### Table of Content
* [Introduction](#Introduction)
* [Motivation](#Motivation)
* [Code Style](#Code_Style)
* [Screenshots](#Screenshots)
* [Tech/framework used](#Tech/framework_used)
* [Features](#Features)
* [Installation](#Installation)
* [Contribution](#Contribution)
* [Thanks](#Thanks)


### Introduction
This Visa Calculator was created for travellers, that want to calculate one or more stays in a country within a certain time frame.
The user can insert individual travel limitations set by different countries and will get information about how many days they can still use up or how many days they would have to remove from their travels to be within the visa regulations.


### Motivation
Since I like travelling and my s.o. and I work remotely, we have to be aware of visa regulations of the countries we visit for expanded times. We were calculating dates manually and rechecked continuously, so we would comply with the law.
Additionally to its personal practicality, this project gave me the chance to expand my knowledge and experience working with JavaScript and flatpickr. As a backend developer it is important to understand front-end complexities and limitations as well as your own area of expertise. This ultimately improves the collaboration in teams of backend and frontend developers.


### Code style
Standard


### Screenshots
_yet to come_


### Tech/framework used
Built with\
JavaScript, using flatpickr, 4.6.3


### Features
* Enter country's visa regulations (maximum days in certain time frame, for example: Schengen Zone - 90 out of 180 days).
* Enter first date of entry.
* The user will be informed when the time frame ends - until when can I plan my 90 days.
* Multiple trips are calculateable.
* Previously picked dates are blocked to avoid overlap.
* Dates after the end of the time frame are blocked for correct results.
* Trips can be deleted.
* The amount of days are calculated, once the submit button is hit.
  * It informs on how many days are still open to fill the maximum days or how many days need to be removed to be within regulations.
  * It informs the user when the time frame ends.


### Installation
You will have to install
"bootstrap": "^4.3.1",
"flatpickr": “^4.6.3"\
Bower users: please use https://www.npmjs.com/package/bower-npm-resolver \
_using npm install_\
`npm i flatpickr --save`

For more information, please check:  https://flatpickr.js.org/getting-started/


### Contribute
If you find any of the open issues interesting or you have ideas on how to improve the project, let me know.


### Thanks
I had my wonderful colleague [Ronan](https://github.com/Holdenro) - design the front end for me, thank you for that!


