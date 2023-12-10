// // Code your solutions in this file
// For Loop
// for (let age = 30; age < 40; age++) {
//   console.log(`I'm ${age} years old. Happy birthday to me`);
//   debugger;
// }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

arrayName = ["Guadalupe", "Ollie", "Aki"];

function writeCards(arrayName, eventName) {
  const emptyArrayName = [];
  for (let i = 0; i < arrayName.length; i++) {
    eventName = `Thank you, ${arrayName[i]}, for the wonderful surprise gift!`;
    emptyArrayName.push(eventName);
  }
  return emptyArrayName;
}
console.log(writeCards(arrayName));

// While Loop...
// while ([condition]) {
//     [loop body]
//   }

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  let i = 0; // the initialization moves OUTSIDE the body of the loop!
  while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
  }

  return gifts;
}

wrapGifts(gifts);
// LOG: Wrapped teddy bear and added a bow!
// LOG: Wrapped drone and added a bow!
// LOG: Wrapped doll and added a bow!
// => ["teddy bear", "drone", "doll"]

// Notice that we've just moved the initialization and iteration statements — declaring the i variable outside the loop, and incrementing it inside the loop.

//CAUTION: When using while loops, it is easy to forget to involve iteration. Leaving iteration out can result in a condition that always evaluates to true, causing an infinite loop!

/* let countup = 0;
while (countup < 10) {
  console.log(countup++);
}

This is perfectly fine as an alternative way to describe:

for (let countup = 0; countup < 10; countup++) {
  console.log(countup);
}
 */
// Assignment for while loop.

let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--);
}
