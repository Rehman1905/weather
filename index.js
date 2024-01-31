const ad = document.querySelector("#name")
const btn = document.querySelector("#btn")
const temperatur = document.querySelector("#temperatur")
const humid = document.querySelector("#humid")
const speed = document.querySelector("#speed")
const situated = document.querySelector("#situated")
const place = document.querySelector("#place")
btn.addEventListener('click', function (e) {
    temperatur.innerHTML = ''
    humid.innerHTML = ''
    speed.innerHTML = ''
    situated.innerHTML = ''
    e.preventDefault()
    const a = ad.value
    
    const result = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${a}&units=metric&appid=178a3c934b2df7d2d100f80914ef03a1`)
    result.then(function (e) {
        return e.json()
    }).then(function (e) {
        place.innerHTML = e.name
        temperatur.innerHTML = `${e.main.temp.toFixed(1)}°C`
        humid.innerHTML = e.main.humidity
        speed.innerHTML = e.wind.speed.toFixed(1)
        situated.innerHTML = e.weather[0].main
    })
    ad.value = ''
})
