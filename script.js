let player = {
    namn: 'Sudden',
    realName: 'Mats Sundin',
    jersey:13
  };

// let name = player.name;
// let realName = player.realName;

//Byt ut player mot props...
const { namn, realName, jersey } = player;
console.log(namn)
console.log(realName)

// array 
const numbers = [13, 21, 2]
const [numOne, numTwo, numThree] = numbers

console.log(numOne) // 13
console.log(numTwo) // 21

const [age, setAge] = useState(50) // I React funkar det så
console.log(age) // 50
setAge(34)
console.log(age) // 34




  

