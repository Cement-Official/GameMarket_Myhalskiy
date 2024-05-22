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
        title: "Carpathians",
        author: "Присяжнюк Богдана",
        author_photo: "images/Присяжнюк.jpg",
        email: "23a_pbv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Prydana/Phaser2stGame",
        game_pages: "https://prydana.github.io/Phaser2stGame/",
        docs: "https://drive.google.com/drive/folders/1K--lAbvnwzUQ4BjN136Blvp46ErW0mkJ",
        forms: "https://forms.gle/HnBZ5pzJ4DLpa6E69",
        gamemarket_github: "https://github.com/Prydana/GameMarket_Prysiazhniuk",
        gamemarket_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/",
        market_pages: "https://prydana.github.io/GameMarket_Prysiazhniuk/market.html",
        stars: ""
    },
    {
        title: "Phaser2stGame2",
        author: "Недзвецький Олег",
        author_photo: "images/Недзвецький.jpg",
        email: "23a_nom@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Viogoo/Phaser2stGame2",
        game_pages: "https://viogoo.github.io/Phaser2stGame2/",
        docs: "https://drive.google.com/drive/folders/1a-3VlIBE5SnalcPulY1mKWRTqvyydk5i?usp=sharing",
        forms: "https://forms.gle/bvgt8tydcyS6AXPA6",
        gamemarket_github: "https://github.com/Viogoo/Game_Market_Nedzvetskiy_Oleg",
        gamemarket_pages: "https://viogoo.github.io/Game_Market_Nedzvetskiy_Oleg/",
        market_pages: "https://viogoo.github.io/market/",
        stars: ""
    },
    {
        title: "Phaser2ndGame",
        author: "Ніцкевич Дар'я",
        author_photo: "/images/Ніцкевич 1.jpg",
        email: "23a_ndi@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Daria1284/Phaser2ndGame",
        game_pages: "https://daria1284.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1sx_bP3YdCY99mFM02u-FVcmtGm8bfNc1?usp=drive_link",
        forms: "https://forms.gle/PSoFKF3f8JE8JDF18",
        gamemarket_github: "https://github.com/Daria1284/GameMarket_Nitskevich",
        gamemarket_pages: "https://daria1284.github.io/GameMarket_Nitskevich/",
        market_pages: "https://daria1284.github.io/GameMarket_Nitskevich/market.html",
        stars: ""
    },
    {
        title: "phaser2ndGame",
        author: "Соломонюк Богдан",
        author_photo: "/images/Соломонюк.jpg",
        email: "23a_sbr@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/23asbr/phaser2ndGame",
        game_pages: "https://23asbr.github.io/phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1JcIFHoj8MY56cyNeD8yoQkIgYxHIFwl3?usp=drive_link",
        forms: "https://forms.gle/DbGSNNiXNbAfQx6x6",
        gamemarket_github: "https://github.com/23asbr/Game_Market_solomoniyk",
        gamemarket_pages: "https://23asbr.github.io/Game_Market_solomoniyk/",
        market_pages: "https://23asbr.github.io/Game_Market_solomoniyk/market.html",
        stars: ""
    },
    {
        title: "Comiks",
        author: "Філімончук Євгеній",
        author_photo: "/images/Філімончук.jpg",
        email: "23a_fyev@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/filimonchukevgeniy/Phaser2ndGame",
        game_pages: "https://filimonchukevgeniy.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1gLzj_epUzeFt_KBhcfez33Xx4fcSrSJ9",
        forms: "https://forms.gle/gd2oE6EtLB3yFCa9A",
        gamemarket_github: "https://github.com/filimonchukevgeniy/GameMarket_Filimochuk/settings/pages",
        gamemarket_pages: "https://filimonchukevgeniy.github.io/GameMarket_Filimochuk/",
        market_pages: "",
        stars: ""
    },
    {
        title: "Phaser2ndGame",
        author: "Сікалюк Артем",
        author_photo: "/images/Сікалюк.jpg",
        email: "23a_sai@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/lokloter/Phaser2ndGame",
        game_pages: "https://lokloter.github.io/Phaser2ndGame/",
        docs: "https://drive.google.com/drive/folders/1CVaq2qHRHtju8V-IVYyI2a2bBJLlE-VH?usp=sharing",
        forms: "https://forms.gle/7oHYvp5hUw1oDwGZA",
        gamemarket_github: "https://github.com/lokloter/gamemarket",
        gamemarket_pages: "https://lokloter.github.io/gamemarket/",
        market_pages: "",
        stars: ""
    },
    {
        title: "Phaser-2nd-Game",
        author: "Якубець Денис",
        author_photo: "/images/Якубець.jpg",
        email: "23a_yada@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/D3nis1238/Phaser-2nd-Game",
        game_pages: "https://d3nis1238.github.io/Phaser-2nd-Game/?authuser=0",
        docs: "https://docs.google.com/document/d/1H_AWqM8u9rFfDKVAxynlz5wGyiIW2AzeI2gTvWWs7Wc/edit?usp=sharing",
        forms: "https://forms.gle/NtHkb7ErZAcexoPY7",
        gamemarket_github: "https://github.com/D3nis1238/GameMarket_Yakubets",
        gamemarket_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/",
        market_pages: "https://d3nis1238.github.io/GameMarket_Yakubets/market.html?authuser=0",
        stars: ""
    },
    {
        title: "Platformer",
        author: "Будішевський Єгор",
        author_photo: "/images/Будішевський Єгор.jpg",
        email: "23a_byeyu@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/EgorZTUkl/Platformer",
        game_pages: "https://egorztukl.github.io/Platformer/",
        docs: "https://drive.google.com/drive/folders/1Gme_cOgj7R14t3kaxbLxjPxgmTvhTKYq?usp=drive_link",
        forms: "https://forms.gle/ziZ41L7qHnzp6o7x6",
        gamemarket_github: "",
        gamemarket_pages: "",
        market_pages: "",
        stars: ""
    },
    {
        title: "Minorun",
        author: "Михальський Нікіта",
        author_photo: "/images/Михальський.jpg",
        email: "23a_mnv@liceum.ztu.edu.ua",
        group: "10-А 2",
        image: "",
        game_github: "https://github.com/Cement-Official/Minorun",
        game_pages: "https://cement-official.github.io/Minorun/",
        docs: "https://docs.google.com/document/d/1lgWfQHAtTu1E_xi-3cKiAC_8ZR0TD4xTL6B5dMvqGY0/edit?usp=sharing",
        forms: "https://forms.gle/XVTQaam7Maj2HLCh8",
        gamemarket_github: "https://github.com/Cement-Official/GameMarket_Myhalskiy",
    }
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
        <div class="item-title">${item.author}</div>
        <div class="item-image">
        <img src = "${item.image}" class="item-image">
        <img src = "${item.author_photo}" class="item-image">
        </div>
        <div class="parts-pay">
        <div><img src="images/mono-lapka.png" alt="">${item.mono}</div>
        <div><img src="images/pngegg.png" alt="">${item.privatbank}</div>
        </div>
        <div class="prise">
        <div><span>${item.normal_price} </span><sup>грн</sup></div>
        <div><span class="number">${item.discount_price} </span><sup>грн</sup></div>
        </div>
        <div class="prise bonus">
        <div><a href = "${item.game_pages}" target=_blank>Грати в гру</a></div>
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
