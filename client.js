// declaring array //

const myArrayOne = [10, 20, 30];
const myArrayTwo = [40, 50, 60];


// render arrays into html

document.querySelector("#myArray1").innerText = myArrayOne;
document.querySelector("#myArray2").innerText = myArrayTwo;

/* using the .push() method || a practical use would be
for when you want to add another element to you array
for this, i added 35 into my array of 10,20,30. */

myArrayOne.push(35);
document.querySelector("#myArray3").innerText = myArrayOne;

/* using the .pop() method || a practical use would be for
when you want to remove the last element in your array,
in this case, since 35 is the last element, it has been removed from the array. */

myArrayOne.pop();
document.querySelector("#myArray4").innerText = myArrayOne;

/* using the .concat() method to merge 2 arrays || a practical use
would be for when you want to merge arrays together,
in this case, i've merged myArrayOne and myArrayTwo, which now becomes
myArrayThree, and should display, 10,20,30,40,50,60*/

const myArrayThree = myArrayOne.concat(myArrayTwo);
document.querySelector("#myArray5").innerText = myArrayThree;

/* using the .splice() method to cut an array.
with the splice method I've cut the elements starting at index 1 and ending at position 4
(not including position 4, this way 10, 50, and 60 from the array is removed. ||
the practical use would be for when you want to remove certain sections of an array. */

const myArrayFour = myArrayThree.slice(1,4);
document.querySelector("#myArray6").innerText = myArrayFour;

// creating an object "Dawg" with properties.

const Dawg = {
  name:"Jader",
  breed:"Shitzu-Poodle",
  age:6,
  color:"Brown",
}

/* Create and log an array of the values of your object with Object.values() ||
Object.values() in this case is "Jader", "Shitzu-Poodle", "6", "Brown".
Practical use for when you want to display values of said object. */
document.querySelector("#JadaValues").innerText = Object.values(Dawg);


/* Create and log an array of all the keys of your object with Object.keys() ||
Object.keys() in this case is "name:", "breed:", "age:", "color:".
Practical use for when you want to display keys of the object. */
document.querySelector("#JadaKeys").innerText = Object.keys(Dawg);


/* remove a key-value pair from an object with the delete keyword ||
in this instance. i've removed the key 'age' and since a key value pair 
cannot be separated the value '6' is also removed.
Practical use is for when you want to remove a key-value pair that no longer applies or something to that effect.*/

delete Dawg.age;
document.querySelector("#JadaKeyGone").innerText = Object.keys(Dawg);
document.querySelector("#JadaValueGone").innerText = Object.values(Dawg);

