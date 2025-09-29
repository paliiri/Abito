const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-box input");
const cardWraper = document.querySelector(".content-main__list");

cardWraper.style.justifyContent = "flex-start";
cardWraper.style.gap = "30px";

const cardArray = [
  {
    id: 0,
    title: "Пвх материал первый сорт",
    price: "171 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png"
  },
  {
    id: 1,
    title: "Пвх материал второй сорт",
    price: "173 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png"
  },
  {
    id: 2,
    title: "Пвх материал третий сорт",
    price: "176 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png"
  },
  {
    id: 3,
    title: "Пвх материал четвертый сорт",
    price: "178 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png"
  },
  {
    id: 4,
    title: "Пвх материал пятый сорт",
    price: "179 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png"
  },
  {
    id: 5,
    title: "Пвх материал шестой сорт",
    price: "170 ₽",
    address: "Казань, р-н Вахитовский",
    date: "10 июля 11:39",
    img: "./img/card-img.png"
  }
]

const render = (cardList) => {
  cardWraper.innerHTML = "";
  cardList.forEach((item, index) => {
    cardWraper.insertAdjacentHTML("beforeend", `
      <a href="/product.html" class="content-main__list-item">
        <div class="content-main__list-item--img">
          <img src="${item.img}" alt="${item.img}">
        </div>
        <h5 class="content-main__list-item--title">
          ${item.title}
        </h5>
        <strong class="content-main__list-item--price">
          ${item.price}
        </strong>
        <div class="content-main__list-item--desc-box">
          <span class="content-main__list-item--desc">
           ${item.address}
          </span>
          <span class="content-main__list-item--desc">
            ${item.date}
          </span>
        </div>
      </a>
    `)
  })
}
const filteredArray = (array, value) => {
  return array.filter((item) => {
    return item.title.includes(value) || item.price.includes(value)
  })
}

render(cardArray)

searchBtn.addEventListener("click", () => {
  render(filteredArray(cardArray, searchInput.value))

})