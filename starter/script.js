// // // // // // // // // // let js = "amazing";
// // // // // // // // // // if (js === "amazing") console.log("Javascript is FUN!");

// // // // // // // // // // console.log(40 + 8 + 23 - 10);

// // // // // // // // // // console.log("EllisCrisanto");
// // // // // // // // // // console.log(23);

// // // // // // // // // // let firstName = "Ellis";
// // // // // // // // // // let firstNamePerson = "Cris";

// // // // // // // // // // console.log(firstName);
// // // // // // // // // // console.log(firstNamePerson);

// // // // // // // // // // let myFirstJob = "Programer";
// // // // // // // // // // let myCurrentJob = "Teacher";

// // // // // // // // // // console.log(`My first job was ${myFirstJob} and now my job is ${myCurrentJob}`);

// // // // // // // // // // //Data types

// // // // // // // // // // let javascriptIsFun = true;

// // // // // // // // // // console.log(javascriptIsFun);

// // // // // // // // // // console.log(typeof false);
// // // // // // // // // // console.log(typeof javascriptIsFun);
// // // // // // // // // // console.log(typeof firstName);

// // // // // // // // // // let year;
// // // // // // // // // // console.log(year);

// // // // // // // // // // year = 1993;
// // // // // // // // // // console.log(typeof year);

// // // // // // // // // // console.log(typeof null);

// // // // // // // // // // let age = 30;
// // // // // // // // // // age = 31;

// // // // // // // // // // const birthYear = 1995;

// // // // // // // // // // //Basic Operators

// // // // // // // // // // //Math operators
// // // // // // // // // // const now = 2023;
// // // // // // // // // // const ageEllis = now - 1993;
// // // // // // // // // // const ageX = now - 2000;
// // // // // // // // // // console.log(ageEllis, ageX);
// // // // // // // // // // console.log(ageEllis * 2, ageEllis / 10, 2 * 3);

// // // // // // // // // // const firstNameEllis = "Ellis";
// // // // // // // // // // const lastNameEllis = "velandia";
// // // // // // // // // // console.log(firstNameEllis + " " + lastNameEllis);

// // // // // // // // // // //Assigment operators
// // // // // // // // // // let x = 10 + 5;
// // // // // // // // // // x += 10;
// // // // // // // // // // x *= 4;
// // // // // // // // // // x++;
// // // // // // // // // // x--;
// // // // // // // // // // console.log(x);

// // // // // // // // // // //Comparison operators

// // // // // // // // // // console.log(ageEllis > ageX);
// // // // // // // // // // console.log(ageX >= 18);
// // // // // // // // // // console.log(now - 1991 > now - 2018);

// // // // // // // // // // let z, y;
// // // // // // // // // // z = y = 25 - 10 - 5;
// // // // // // // // // // console.log(x, y);

// // // // // // // // // // const averageAge = (ageEllis + ageX) / 2;
// // // // // // // // // // console.log(ageEllis, ageX, averageAge);

// // // // // // // // // // const massMark = 78;
// // // // // // // // // // const heightMark = 1.69;

// // // // // // // // // // const massJohn = 92;
// // // // // // // // // // const heightJohn = 1.95;

// // // // // // // // // // const BMIMark = massMark / heightMark ** 2;
// // // // // // // // // // const BMIjohn = massJohn / (heightJohn * heightJohn);

// // // // // // // // // // const markHigherBMI = BMIMark > BMIjohn;

// // // // // // // // // // console.log(BMIMark, BMIjohn, markHigherBMI);

// // // // // // // // // //Template literals

// // // // // // // // // // const firstName  = "Ellis crisanto";
// // // // // // // // // // const lastName = "Velandia";
// // // // // // // // // // const job = "SuperHero";
// // // // // // // // // // const birthYear = 1993;
// // // // // // // // // // const year = 2023

// // // // // // // // // // const ellis = "I'm " + firstName + ', a ' +  (year - birthYear) + ' Years  old ' + job + '!';

// // // // // // // // // // console.log(ellis);

// // // // // // // // // // const ellisNew = `I'm ${firstName} ${lastName}, a ${year - birthYear} years old, my job is ${job}!`;
// // // // // // // // // // console.log(ellisNew);

// // // // // // // // // //if / else

// // // // // // // // // const age = 15;
// // // // // // // // // const isOldEnough = age >= 18;

// // // // // // // // // if (isOldEnough) {
// // // // // // // // //   console.log("Sarah can start drivinhg license 🚑🚗🚓");
// // // // // // // // // } else {
// // // // // // // // //   const yearsLeft = 18 - age;
// // // // // // // // //   console.log(`Sara cannot driving 🛴 wait another ${yearsLeft} years`);
// // // // // // // // // }

// // // // // // // // // const birthYear = 1993;
// // // // // // // // // let century;

// // // // // // // // // if (birthYear <= 2000) {
// // // // // // // // //   century = 20;
// // // // // // // // // } else {
// // // // // // // // //   century = 21;
// // // // // // // // // }

// // // // // // // // // console.log(century);

// // // // // // // // const massMark = 78;
// // // // // // // // const heightMark = 1.69;

// // // // // // // // const massJohn = 92;
// // // // // // // // const heightJohn = 1.95;

// // // // // // // // const BMIMark = massMark / heightMark ** 2;
// // // // // // // // const BMIjohn = massJohn / (heightJohn * heightJohn);

// // // // // // // // const markHigherBMI = BMIMark > BMIjohn;

// // // // // // // // console.log(BMIMark, BMIjohn, markHigherBMI);

// // // // // // // // if (BMIMark > BMIjohn) {
// // // // // // // //   console.log("Mark")
// // // // // // // // }else {
// // // // // // // //   console.log("Jonh")
// // // // // // // // }

// // // // // // // //type conversion
// // // // // // // const inputYear = "1993";

// // // // // // // console.log(Number(inputYear), inputYear);
// // // // // // // console.log(inputYear + 18);

// // // // // // // console.log(Number("Ellis"));
// // // // // // // console.log(typeof NaN);

// // // // // // // console.log(String(23), 23);

// // // // // // // //type coercion
// // // // // // // console.log('i am ' + 20 + ' years old')
// // // // // // // console.log("i am " + String(20) + " years old");
// // // // // // // console.log('23' - '10' - 3);
// // // // // // // console.log('23' / '2');

// // // // // // // let n = '1' + 1;
// // // // // // // n = n - 1;
// // // // // // // console.log(n)

// // // // // // // // falsy values: 0,'', undefined ,null, NaN

// // // // // // // console.log(Boolean(0));
// // // // // // // console.log(Boolean(undefined));
// // // // // // // console.log(Boolean());
// // // // // // // console.log(Boolean(''));
// // // // // // // console.log(Boolean("Ellis"));
// // // // // // // console.log(Boolean({}));

// // // // // // // const money = 100;

// // // // // // // if (money) {
// // // // // // //   console.log("Don't spend it all");
// // // // // // // }else {
// // // // // // //   console.log('You should get a job!');
// // // // // // // }

// // // // // // // let height = 123;

// // // // // // // if (height) {
// // // // // // //   console.log('Yah. height is defined');
// // // // // // // }else {
// // // // // // //   console.log('height is undefined');
// // // // // // // }

// // // // // // const age = 18;

// // // // // // if (age === 18) {
// // // // // //   console.log("You just became an adult(strict)");
// // // // // // }

// // // // // // if (age == 18) {
// // // // // //   console.log("You just became an adult (loose)");
// // // // // // }

// // // // // // const favorite = Number(prompt("what's your favorite number"));
// // // // // // console.log(favorite);
// // // // // // console.log(typeof favorite);

// // // // // // if (favorite == 23) {
// // // // // //   console.log("Cool 23 is an amazing number!");
// // // // // // } else if (favorite === 7) {
// // // // // //   console.log("7 is also a cool number");
// // // // // // } else {
// // // // // //   console.log("Number is no t 23 or 7");
// // // // // // }

// // // // // // if (favorite !== 23) {
// // // // // //   console.log("Why not 23?")
// // // // // // }

// // // // // const hasDriversLicence = true;
// // // // // const hasGoodVision = true;

// // // // // console.log(hasDriversLicence && hasGoodVision);
// // // // // console.log(hasDriversLicence || hasGoodVision);
// // // // // console.log(!hasGoodVision);

// // // // // const shouldDrve = hasDriversLicence && hasGoodVision;

// // // // // // if (hasDriversLicence && hasGoodVision) {
// // // // // //   console.log("Sarah is able to driven")
// // // // // // }else {
// // // // // //   console.log("someone else should drive..")
// // // // // // }


// // // // // const isTired = false;
// // // // // console.log(hasDriversLicence || hasGoodVision || isTired);

// // // // // if (hasDriversLicence && hasGoodVision && !isTired) {
// // // // //   console.log("Sarah is able to drive!");
// // // // // } else {
// // // // //   console.log("someone else should drive..");
// // // // // }

// // // // // const scoreDolphins = (96 + 108 + 89) / 3;
// // // // // const scoreKoalas = (88 + 91 + 110) / 3;

// // // // // console.log(scoreDolphins, scoreKoalas);

// // // // // if (scoreDolphins > scoreKoalas) {
// // // // //   console.log("Dolphins win the trophy")
// // // // // }else if(scoreKoalas > scoreDolphins){
// // // // // console.log("Koalas win the trophy")
// // // // // }else if(scoreDolphins === scoreKoalas){
// // // // //   console.log("Both win the trophy!")
// // // // // }


// // // // //BOUNUS 1
// // // // const scoreDolphins = (97 + 112 + 101) / 3;
// // // // const scoreKoalas = (109 + 95 + 123) / 3;

// // // // console.log(scoreDolphins, scoreKoalas);

// // // // if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
// // // //   console.log("Dolphins win the trophy")
// // // // }else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
// // // // console.log("Koalas win the trophy")
// // // // }else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
// // // //   console.log("Both win the trophy!")
// // // // }else {
// // // //   console.log("No one wins the trophy")
// // // // }

// // // if (23 > 10) {
// // //   const str = '23 is bigger';
// // // } 

// // // console.log(`I'm ${2023 - 1993} years old`)

// // //Conditional operator

// // const age = 17;

// // age >= 18 ? console.log("I like to drink beer") : "I dont like drink anything";

// // const drink = age >= 18 ? "wine" : "water";
// // console.log(drink);

// // let drink2;

// // if (age >= 18) {
// //   drink2 = "wine";
// // }else {
// //   drink2 = "water";
// // }

// // console.log(drink2);

// // console.log(`I like to drink ${age >= 18 ? "wine" : "water" }`);

// const bill = 275;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bil was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)