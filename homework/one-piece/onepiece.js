// 假設以下是角色資料，可以根據你的需求進行調整
const characters = [
    {
        name: 'Luffy',
        image: 'images/luffy.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E8%92%99%E5%85%B6%C2%B7D%C2%B7%E9%AD%AF%E5%A4%AB'
    },
    {
        name: 'Zoro',
        image: 'images/zoro.jpg',
    },
    {
        name: 'Nami',
        image: 'images/nami.jpg',
    },
    {
        name: 'Usopp',
        image: 'images/usopp.jpg',
    },
    {
        name: 'Sanji',
        image: 'images/sanji.jpg',
    },
    {
        name: 'Chopper',
        image: 'images/chopper.jpg',
    },
    {
        name: 'Robin',
        image: 'images/robin.jpg',
    }, {
        name: 'Franky',
        image: 'images/franky.jpg',
    }, {
        name: 'Brook',
        image: 'images/brook.jpg',
    }, {
        name: 'Jinbe',
        image: 'images/jinbe.jpg',
    },


    // 其他角色資料...
];

// 生成角色卡片
function generateCharacterCards() {
    const characterList = document.getElementById('character-list');

    characters.forEach(character => {
        const card = document.createElement('div');
        card.classList.add('character-card');

        const imageLink = document.createElement('a'); // 使用 <a> 元素包裹圖片
        imageLink.href = character.link; // 設置超連結的目標網址

        const image = document.createElement('img');
        image.src = character.image;
        imageLink.appendChild(image); // 將圖片添加到超連結元素中
        card.appendChild(imageLink); // 將超連結元素添加到卡片中

        const name = document.createElement('h3');
        name.textContent = character.name;
        card.appendChild(name);

        const description = document.createElement('p');
        description.textContent = character.description;
        card.appendChild(description);

        characterList.appendChild(card);
    });
}

// 網頁載入完成後生成角色卡片
window.addEventListener('DOMContentLoaded', generateCharacterCards);
