const cityInput = document.querySelector(".search");
const searchBtn = document.querySelector(".search-icon");
const info = document.querySelectorAll(".info");
const condition = document.querySelector(".condition");
const weatherImg = document.querySelector(".weather_img");
const boxes = document.querySelectorAll(".box");
const forecastCards = document.querySelectorAll(".forecast-card");
searchBtn.addEventListener("click", () => {
  const city = cityInput.value.toLowerCase();
  if (weatherData[city]) {
    const data = weatherData[city];
    info[0].textContent = `${city},India`;
    info[1].innerHTML = `${data.temp}<sup>°C</sup>`;
    weatherImg.src = data.image;
    condition.textContent = data.condition;
    boxes[0].querySelector("h3").textContent = `${data.humidity}%`;
    boxes[1].querySelector("h3").textContent = `${data.wind}km/h`;
    boxes[2].querySelector("h3").textContent = `${data.feelslike}°C`;

    data.forecast.forEach((item, index) => {
      const card = forecastCards[index];
      card.querySelector("h3").textContent = item.day;
      card.querySelector("span").textContent = item.icon;
      card.querySelector("p").textContent = `${item.high}°C`;
      card.querySelector("small").textContent = `${item.low}°C`;
    });
  } else {
    alert("city not found");
  }

  console.log(city);
});
