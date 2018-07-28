/**  BMI challange
 **/


/** var markMass, markHeight, markBMI, johnHeight, johnMass, johnBMI, markHigherBMI;

markMass = 150;
markHeight = 2.5;
//console.log(markHeight)
johnHeight = 2;
johnMass = 250;

markBMI = markMass / (markHeight * markHeight);
console.log(markBMI)


johnBMI = johnMass / (johnHeight * johnHeight);
console.log(johnBMI);


markHigherBMI = markBMI > johnBMI
console.log(markHigherBMI);
**/

var firstName = 'Jason'; //var age = 38;
//age >= 18 ? console.log(firstName = 'drinks beer.') : console.log(firstName = 'drinks juice.');


//var drink = age >= 18 ? 'beer' : 'juice';
//
//console.log(drink);


var job = 'hobo with a shot gun';

switch (job) {
    case 'teacher':
        console.log(firstName + ' Teaches kids how to code.');
        break;
    case 'hobo with a shotgun':
        console.log(firstName + ' Is the boss in the new world');
    case 'developer':
        console.log(firstName + ' cranks out the webpages on the interwebs');
    default:
        console.log('drinks beer');
}
