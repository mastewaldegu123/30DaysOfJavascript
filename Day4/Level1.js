let age =prompt('Enter your age: ',30)
if(age>=18){
  
  console.log('You are old enough to drive.')
}else if(age == 15){
  console.log('You are left with 3 years to drive.')
}
let myAge=25

let yourAge= prompt('Enter your age:',30)
let difference = (myAge - yourAge)
if(myAge == yourAge){
  console.log('you are at the same age as me')

}else if(difference > 0){
  console.log(`You are ${Math.abs(difference)} years younger than me` )
}else{
  console.log(`You are ${Math.abs(difference)} years older than me` )
}
let a = 2
let b = 3
if(a<b){
  console.log(`${a} is less than ${b}`)
}else if(a>b){
  console.log(`${a} is greater than ${b}`)
}else {
  console.log(`${a} is equal to ${b}`)
}
let diff = a>b

 diff ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`)
 let number =prompt('Enter the number',2)
 let remainder = number%2
 if(remainder == 0 )
 {
   console.log(`${number} is even number`)
 }else{
   console.log(`${number} is odd number`)
 }