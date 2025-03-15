console.log('Hello world 1234');


// const dateFns = require('date-fns')
import { format } from "date-fns";

const currentDate = new Date();

console.log('currentDate: ', currentDate);

console.log('Date: ', format(currentDate, 'MM/dd/yyyy'));
