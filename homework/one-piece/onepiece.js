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
        link: 'https://zh.wikipedia.org/zh-tw/%E7%BE%85%E7%BE%85%E8%AB%BE%E4%BA%9E%C2%B7%E7%B4%A2%E9%9A%86'
    },
    {
        name: 'Nami',
        image: 'images/nami.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E5%A8%9C%E7%BE%8E'
    },
    {
        name: 'Usopp',
        image: 'images/usopp.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E9%A8%99%E4%BA%BA%E5%B8%83'
    },
    {
        name: 'Sanji',
        image: 'images/sanji.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E8%B3%93%E4%BB%80%E8%8E%AB%E5%85%8B%C2%B7%E9%A6%99%E5%90%89%E5%A3%AB'
    },
    {
        name: 'Chopper',
        image: 'images/chopper.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E5%A4%9A%E5%B0%BC%E5%A4%9A%E5%B0%BC%C2%B7%E5%96%AC%E5%B7%B4'
    },
    {
        name: 'Robin',
        image: 'images/robin.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E5%A6%AE%E5%8F%AF%C2%B7%E7%BE%85%E8%B3%93'
    }, {
        name: 'Franky',
        image: 'images/franky.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E4%BD%9B%E6%9C%97%E5%9F%BA'
    }, {
        name: 'Brook',
        image: 'images/brook.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E5%B8%83%E9%AD%AF%E5%85%8B_(ONE_PIECE)'
    }, {
        name: 'Jinbe',
        image: 'images/jinbe.jpg',
        link: 'https://zh.wikipedia.org/zh-tw/%E5%90%89%E8%B2%9D%E7%88%BE'
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
