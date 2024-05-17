// console.log(itemsDiv)
let itemsDiv = document.getElementById("items");
let itemsArray = [
  {
    firstName: "Віталій",
    lastName: "Шатківський",
    surname: "Миколайович",
    age: 43,
    subject: "CS",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
  },
  {
    firstName: "Тарас",
    lastName: "Савінков",
    surname: "Євгенович",
    age: 43,
    subject: "English",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
  },
  {
    firstName: "Василь",
    lastName: "Бабій",
    surname: "Дмитрович",
    age: 43,
    subject: "PE",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
  },
  {
    firstName: "Лариса",
    lastName: "Забелло",
    surname: "Олександрівна",
    age: 18,
    subject: "English",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
  },
  {
    firstName: "Анжела",
    lastName: "Лознюк",
    surname: "Леонідівна",
    age: 18,
    subject: "Ukrainian",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
  },
  {
    firstName: "Наталія",
    lastName: "Зинюк",
    surname: "Миколаївна",
    age: 18,
    subject: "Chemistry",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
  },
  {
    firstName: "Вікторія",
    lastName: "Нелипович",
    surname: "Віталіївна",
    age: 18,
    subject: "Math",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/nelypovych-viktoriya-vitaliyivna-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/nelypovych-viktoriya-vitaliyivna/",
  },
  {
    firstName: "Олена",
    lastName: "Геча",
    surname: "Анатоліївна",
    age: 18,
    subject: "History",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/hecha-olena-anatoliyivna-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/hecha-o-a/",
  },
  {
    firstName: "Ірина",
    lastName: "Глібко",
    surname: "Анатоліївна",
    age: 18,
    subject: "English",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/01/hlibko-iryna-anatoliyevna.jpg",
    url: "https://lyceum.ztu.edu.ua/team/hlibko-iryna-anatoliyivna/",
  },
  {
    firstName: "Наталія",
    lastName: "Кучер",
    surname: "Вікторівна",
    age: 18,
    subject: "Physic",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/kucher-nataliya-viktorivna-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/kucher-n-v/",
  },
  {
    firstName: "Марія",
    lastName: "Медведєва",
    surname: "Василівна",
    age: 18,
    subject: "Geography",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/medvedyeva-mariya-vasylivna-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/medvedyeva-mariya-vasylivna/",
  },
  {
    firstName: "Ірина",
    lastName: "Боровська-Карандюк",
    surname: "Анатоліївна",
    age: 18,
    subject: "Ukrainian",
    photo:
      "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/borovska-karandyuk-iryna-anatoliyivna-683x1024.jpg",
    url: "https://lyceum.ztu.edu.ua/team/borovska-karandyuk-iryna-anatoliyivna/",
  },
];
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
      itemsDiv.innerHTML += `
        <div class = "item">
        <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
        <p>${item.lastName} ${item.firstName} ${item.surname} </p>
        <p>Вік: ${item.age} </p>
        <p><img src = "${item.photo}" class="item-image"> </p>
        <p><a href = "${item.url}" target="_blank">Профіль</p>
        </div>
        `;
    });
  // console.log(itemsDiv)
  // console.log('Поле id: ', itemsDiv.id)
  // itemsDiv.innerHTML += '<div class = "item"></div>'
  // itemsDiv.innerHTML += '<div class = "item"></div>'
  // itemsDiv.innerHTML += '<div class = "item"></div>'
  // itemsDiv.innerHTML += '<div class = "item"></div>'
} else {
  console.log("Блок товарів не знайдено");
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
