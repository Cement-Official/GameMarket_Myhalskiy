
console.log('Підключено файл скриптів market.js')

let itemsDiv = document.getElementById("items");
let itemsArray = [
    'Газонокосарка 43',
    'Електричний тример 110',
    'Електрична газонокосарка 32',
    'Акумуляторний оприскувач 12 N',
    'Газонокосарка 430',
    'Електричний тример 130',
    'Електрична газонокосарка 320',
    'Акумуляторний оприскувач 12 E',
]

// console.log(itemsDiv)

if (itemsDiv) {
    itemsArray.forEach
    // console.log(itemsDiv)
    // console.log('Поле id: ', itemsDiv.id)
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
} else {
    console.log('Блок товарів не знайдено')
}

// itemsArray.sort().forEach((item, index) => {
//     console.log(index + '-й елемент: ', item)
// })
// itemsArray = itemsArray.sort()
// console.log(itemsArray)

// for (let i = 0; i < itemsArray.length; i++){
//     console.log(i + '-й елемент: ', itemsArray[i])
// }