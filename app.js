const input = document.querySelector('input');
const button = document.getElementById('btn');
var x = document.querySelector('.first');
const h1 = document.querySelectorAll('h1');

const api = {
    apiKey: '3090905c3d1ddc992f0412f2672094ea',
    url: 'api.openweathermap.org/data/2.5/'
}



btn.addEventListener('click', (e) => {
    console.log(e);
    e.preventDefault();
    console.dir(input);
    let cityName = input.value;
    const data = findWeather(cityName);
    x.classList.add("second");
    input.value = "";
})

input.addEventListener('keypress',function (e) {
    let cityName = input.value;
    if (e.keyCode === 13) {
        findWeather(cityName);
        x.classList.add("second");
        input.value = "";
    }
})




function findWeather(city) {
    
    fetch(`https://${api.url}weather?q=${city}&units=metric&APPID=${api.apiKey}`)
        .then((apiData) => {
            console.log(apiData);
            return apiData.json();
        }).then((data) => {
            // do stuff with the data
            console.dir(data);
            let name=data.name;
            let country = data.sys.country;
            let temp = data.main.temp;
            let max_temp= data.main.temp_max;
            let min_temp= data.main.temp_min;
            let type = data.weather[0].main;
            let iconcode = data.weather[0].icon;
            let iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
            // console.log(name);
            // console.log(country);
            // console.log(temp);
            // console.log(max_temp);
            // console.log(min_temp);
            // console.log(type);
            h1[1].innerHTML=`${name}, <span id="cnt">${country}<span>`;
            h1[2].innerText=currentDate();
            h1[3].innerHTML=`${Math.round(temp)}<span>&#176;C </span>`
            h1[4].innerText=`${type}`;
            h1[5].innerHTML=`<img src=${iconurl} alt="Image"/>`;
            h1[6].innerHTML=`<span id="min">${Math.round(min_temp)}</span><span>&#176;C </span> /  <span id="max">${Math.round(max_temp)}</span><span>&#176;C </span>`
            // console.log(country);
            div.style.display="visible";
        })
}


function currentDate() {
    var WeekDay = new Date;
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let day = WeekDay.getDate();
    return `${week[WeekDay.getDay()]}- ${day}  ${month[WeekDay.getMonth()]},${WeekDay.getFullYear()}`;
}
