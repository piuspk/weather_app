const submit = document.getElementById("submitBtn");
const city = document.getElementById("cityName");
const city_space = document.getElementById("city_name");
const temperature = document.getElementById("temp");

const fnc = async (e) => {
  e.preventDefault();
  let citysearch = city.value;

  if (citysearch === "") {
    city_space.innerText = `please enter city name`;
  } else {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${citysearch}&units=metric&appid=b479f73063454dd2e2a39417717a3614`;
      const respose = await fetch(url);
      const data = await respose.json();
      const arrdata = [data];
      temperature.innerHTML = arrdata[0].main.temp;
      city_space.innerHTML = `${arrdata[0].name}, ${arrdata[0].sys.country}`;
       
    } catch (error) {
        city_space.innerHTML = `please valid inputs`
    }
  }
};
submit.addEventListener("click", fnc);
