// console.log(itemsDiv)
let itemsDiv = document.getElementById("items");
let itemsArray = [
    // {
    //     firstName: "Віталій",
    //     lastName: "Шатківський",
    //     surname: "Миколайович",
    //     age: 43,
    //     subject: "CS",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/03/dsc07815-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/shatkivskyy-v-m/",
    // },
    // {
    //     firstName: "Тарас",
    //     lastName: "Савінков",
    //     surname: "Євгенович",
    //     age: 43,
    //     subject: "English",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/savinkov-taras-yevhenovych-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/savinkov-taras-yevhenovych/",
    // },
    // {
    //     firstName: "Василь",
    //     lastName: "Бабій",
    //     surname: "Дмитрович",
    //     age: 43,
    //     subject: "PE",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/babiy-vasyl-dmytrovych-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/babiy-vasyl-dmytrovych/",
    // },
    // {
    //     firstName: "Лариса",
    //     lastName: "Забелло",
    //     surname: "Олександрівна",
    //     age: 18,
    //     subject: "English",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/04/zabello-larysa-oleksandrivna-682x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zabello-l-o/",
    // },
    // {
    //     firstName: "Анжела",
    //     lastName: "Лознюк",
    //     surname: "Леонідівна",
    //     age: 18,
    //     subject: "Ukrainian",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2023/10/photo_2023-10-25_15-46-33-1-693x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/loznyuk-anzhela-leonidivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Зинюк",
    //     surname: "Миколаївна",
    //     age: 18,
    //     subject: "Chemistry",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    // {
    //     firstName: "Вікторія",
    //     lastName: "Нелипович",
    //     surname: "Віталіївна",
    //     age: 18,
    //     subject: "Math",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Зинюк",
    //     surname: "Миколаївна",
    //     age: 18,
    //     subject: "Chemistry",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Зинюк",
    //     surname: "Миколаївна",
    //     age: 18,
    //     subject: "Chemistry",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Зинюк",
    //     surname: "Миколаївна",
    //     age: 18,
    //     subject: "Chemistry",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Зинюк",
    //     surname: "Миколаївна",
    //     age: 18,
    //     subject: "Chemistry",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    // {
    //     firstName: "Наталія",
    //     lastName: "Зинюк",
    //     surname: "Миколаївна",
    //     age: 18,
    //     subject: "Chemistry",
    //     photo: "https://lyceum.ztu.edu.ua/wp-content/uploads/2024/01/zynjuk-natalija-mykolayivna-683x1024.jpg",
    //     url: "https://lyceum.ztu.edu.ua/team/zynyuk-nataliya-mykolayivna/",
    // },
    {
        title: "Мотокоса 43",
        img: "https://budpostach.ua/image/cache/catalog/easyphoto/3585/motokosa-benzinova-m-430-bukovina-1-1200x1200.jpg",
        mono: "6",
        privatbank: "8",
        normal_price: "5499",
        discount_price: "4497",
        coupon_price: "4395",

    },
    {
        title: "Електричний тример 110",
        img: "https://budpostach.ua/image/cache/catalog/easyphoto/8403/elektrichniy-trimer-forte-emk-361-1-1200x1200.jpg",
        mono: "6",
        privatbank: "8",
        normal_price: "4497",
        discount_price: "3498",
        coupon_price: "3396",
    },
    {
        title: "Електрична газонокосарка 32",
        img: "https://storgom.ua/cache/i/products/43/102013/52082884.873x735.jpg",
        mono: "6",
        privatbank: "8",
        normal_price: "4497",
        discount_price: "3297",
        coupon_price: "3195",
    },
    {
        title: "Акумуляторний обприскувач 12 N",
        img: "https://images.prom.ua/1649168929_w640_h640_opryskivatel-sadovyj-rantsevyj.jpg",
        mono: "6",
        privatbank: "8",
        normal_price: "2190",
        discount_price: "1698",
        coupon_price: "1596",
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
        <div class="item">
        <div class="item-title">${item.title}</div>
        <div class="item-image"><img src = "${item.img}" class="item-image"></div>
        <div class="parts-pay">
        <div><img src="images/mono-lapka.png" alt="">${item.mono}</div>
        <div><img src="images/pngegg.png" alt="">${item.privatbank}</div>
        </div>
        <div class="prise">
        <div><span>${item.normal_price} </span><sup>грн</sup></div>
        <div><span class="number">${item.discount_price} </span><sup>грн</sup></div>
        </div>
        <div class="prise bonus">
        <div>ціна за купоном</div>
        <div><span>${item.coupon_price} </span><sup>грн</sup></div>
        </div>
        </div>
        `
        // <div class = "item">
        // <h2>Вчитель № ${index + 1} з ${itemsArray.length}</h2>
        // <p>${item.lastName} ${item.firstName} ${item.surname} </p>
        // <p>Вік: ${item.age} </p>
        // <p><img src = "${item.photo}" class="item-image"> </p>
        // <p><a href = "${item.url}" target="_blank">Профіль</p>
        // </div>
    })
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
