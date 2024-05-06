
console.log('Первірка підключеного файлу скриптів market.js')

let itemsDiv = document.getElementById("items");

console.log(itemsDiv)

if (itemsDiv) {
    console.log(itemsDiv)
    // console.log('Поле classList: ', itemsDiv.classList)
    // console.log('Поле id: ', itemsDiv.id)
    // console.log('Поле clientWidth: ', itemsDiv.clientWidth)
    // console.log('Поле innerHTML: ', itemsDiv.innerHTML)
    itemsDiv.innerHTML += '<div class = "item"></div>'
    itemsDiv.innerHTML += '<div class = "item"></div>'
    itemsDiv.innerHTML += '<div class = "item"></div>'
    itemsDiv.innerHTML += '<div class = "item"></div>'
} else {
    console.log('Блок товарів не знайдено')
}