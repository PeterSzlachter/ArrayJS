// let myArray = new Array('un', 'deux', 'trois')
// let myArray = Array('un', 'deux', 'trois')
let myArray = ['un', 'deux', 'trois']  
myArray.push('cinq')
myArray.unshift('zero')
console.log(myArray)
myArray.shift()
myArray.pop()
console.log(myArray)
console.log(myArray.join(', '))

// let myArray2D = new Array(
//     Array('Peter', 'Zinedine', 'Thierry'),
//     Array('Szlachter', 'Zidane', 'Henry')
// )

let myArray2D = [
  ['Peter', 'Zinedine', 'Thierry'],
  ['Szlachter', 'Zidane', 'Henry']
]
myArray2D[0].push('Kylian')
myArray2D[1].push('Mbappe')
console.log(myArray2D)
myArray2D.splice(2,0,['Bgx', 'Madrid','Retraite', 'PSG'])
console.log(myArray2D)

let myAssociativeArray = {
  club: "OL",
  firstname: "Memphis",
  name: "Depay",
  number: "10"
}
myAssociativeArray['nationality'] = "Dutch"
console.log(myAssociativeArray)
delete(myAssociativeArray.nationality)
console.log(myAssociativeArray)

for (const number in myArray ) {
    console.log(number)
    console.log(myArray[number])
}

for (const number of myArray ) {
  console.log(number)
  console.log(myArray.indexOf(number))
}

let countryList = ['France', 'Belgique', 'Japon', 'Maroc']

for (const country of countryList){
  console.log(country)
}

countryList.forEach(e => console.log(`forEach ${e}`))

function concatObj(array){
  let str = ''
  for (const val in array){
    str += (`${val} : ${array[val]} \n`)
  }
  return console.log(str)
}

concatObj(myAssociativeArray)