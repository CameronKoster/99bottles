let bottles = "bottles";
let number = 99;

while (number > 0) {
  console.log(`${number} ${bottles} of beer on the wall!`)
  console.log(`${number} ${bottles} of beer!`)
  console.log(`Take one down, pass it around, ${number} ${bottles} of beer on the wall! `)
  number--
}

if (number == 0) {
  console.log(`No more ${bottles} of beer on the wall`)
  console.log(`No more ${bottles} of beer!`)
} else { }