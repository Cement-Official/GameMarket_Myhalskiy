
// console.log(itemsDiv)
let itemsDiv = document.getElementById("items");
let itemsArray = [
    {
        firstName: "Віталій",
        lastName: "Шатківський",
        surname: "Миколайович",
        age: 43,
        subject: "CS",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    },
    {
        firstName: "Тарас",
        lastName: "Савінков",
        surname: "Євгенович",
        age: 43,
        subject: "English",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    },
    {
        firstName: "Василь",
        lastName: "Бабій",
        surname: "Дмитрович",
        age: 43,
        subject: "PE",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    },
    {
        firstName: "Лариса",
        lastName: "Забелло",
        surname: "Олександрівна",
        age: 43,
        subject: "English",
        photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
        url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    },
]
if (itemsDiv) {
    itemsArray
        
        // 'Газонокосарка 43',
        // 'Електричний тример 110',
        // 'Електрична газонокосарка',
        // 'Акумуляторний оприскувач',
        // 'Газонокосарка 430',
        // 'Електричний тример 130',
        // 'Електрична газонокосарка',
        // 'Акумуляторний оприскувач',
        // 'Газонокосарка 4303',
        // 'Електричний тример 1303',
        // 'Електрична газонокосарка',
        // 'Акумуляторний оприскувач',

    
    .forEach((item, index) => {
        itemsDiv.innerHTML +=
        `
        <div class = "item">
        <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
        <p>${item.lastName} ${item.firstName} ${item.surname} </p>
        <p>Вік: ${item.age} </p>
        <p><img src = "${item.photo}" class="item-image"> </p>
        <p><a href = "${item.url}" target="_blank">Профіль</p>
        </div>
        `
    })
    // console.log(itemsDiv)
    // console.log('Поле id: ', itemsDiv.id)
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
    // itemsDiv.innerHTML += '<div class = "item"></div>'
} else {
    console.log('Блок товарів не знайдено')
}
// let itemsArray = ['Газонокосарка 43', '', '']
// for (let i = 0; i < [
//     // 'Газонокосарка 43',
//     // 'Електричний тример 110',
//     // 'Електрична газонокосарка 32',
//     // 'Акумуляторний оприскувач 12 N',
//     // 'Газонокосарка 430',
//     // 'Електричний тример 130',
//     // 'Електрична газонокосарка 320',
//     // 'Акумуляторний оприскувач 12 E',
//     // 'Газонокосарка 4303',
//     // 'Електричний тример 1303',
//     // 'Електрична газонокосарка 3203',
//     // 'Акумуляторний оприскувач 12 E1',
//     {
//         firstName: "Віталій",
//         lastName: "Шатківський",
//         age: 43,
//         subject: "CS",
//         photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//         url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//     }
// ].length; i++){
//     console.log([
//         {
//             firstName: "Віталій",
//             lastName: "Шатківський",
//             age: 43,
//             subject: "CS",
//             photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
//             url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
//         }
//             // 'Газонокосарка 43',
//             // 'Електричний тример 110',
//             // 'Електрична газонокосарка 32',
//             // 'Акумуляторний оприскувач 12 N',
//             // 'Газонокосарка 430',
//             // 'Електричний тример 130',
//             // 'Електрична газонокосарка 320',
//             // 'Акумуляторний оприскувач 12 E',
//             // 'Газонокосарка 4303',
//             // 'Електричний тример 1303',
//             // 'Електрична газонокосарка 3203',
//             // 'Акумуляторний оприскувач 12 E1',
//         ][i])
// }
// // itemsArray.sort().forEach((item, index) => {
// //     console.log(index + '-й елемент: ', item)
// // })
// // itemsArray = itemsArray.sort()
// // console.log(itemsArray)

// // for (let i = 0; i < itemsArray.length; i++){
// //     console.log(i + '-й елемент: ', itemsArray[i])
// // }