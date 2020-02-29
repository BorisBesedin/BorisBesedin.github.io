window.addEventListener('load', () => {
    let tempDescription = document.querySelector('.temperature-description'),
        tempValue = document.querySelector('.temperature-value'),
        tempScale = document.querySelector('.temperature-scale'),
        tempSection = document.querySelector('.temperature-container'),
        timezone = document.querySelector('.location-timezone'),
        cityName = document.querySelector('.location-title');


    // get city coords

    const addButton = document.querySelector('.add-btn'),
        cityInput = document.querySelector('.add-city input');

    function addCity() {
        let location = cityInput.value;

        const geocoder = `https://geocode-maps.yandex.ru/1.x/?apikey=0f35a098-67cb-49e4-a28d-27b3cd6167d0&geocode=${location}&format=json`;

        fetch(geocoder)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let coords = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' '),
                lat = coords[1],
                long = coords[0];
            getWeatherData(lat, long, renderCityItem);             
        })
        .catch(() => {
            alert("something's wrong");
        });
    }

    function renderCityItem(data) {
        const { temperature, summary, icon } = data.currently;

        const template = document.querySelector('.template'),
            citiesList = document.querySelector('.cities-list');
        let listItem = template.querySelector('li').cloneNode(true);

        let celsius = (temperature - 32) * (5 / 9);

        const name = listItem.querySelector('.cities-name'),
            description = listItem.querySelector('.cities-description'),
            temperatureValue = listItem.querySelector('.cities-temperature'),
            closeBtn = listItem.querySelector('.cities-close');

        citiesList.appendChild(listItem);
        name.textContent = cityInput.value;
        description.textContent = data.timezone;
        temperatureValue.textContent = Math.floor(celsius);

        // close item
        
        closeBtn.addEventListener('click', () => {
            listItem.remove();
        });

        // 

        listItem.addEventListener('click', function (evt) {
            if (evt.target !== closeBtn) {
                let lat = data.latitude,
                    long = data.longitude;
                getWeatherData(lat, long, renderMainBlock);
                cityName.textContent = name.textContent;
            }
        });
    }

    addButton.addEventListener('click', () => {
        if (cityInput.value !== '') {
            addCity(cityInput.value);
        } else {
            cityInput.setCustomValidity('enter city name');            
        }        
    });

    // get weather from current location

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            let long = position.coords.longitude,
                lat = position.coords.latitude;
            getWeatherData(lat, long, renderMainBlock);            
        });
    }


    // get weather data from darksky API

    function getWeatherData(lat, long, onSuccess) {
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.darksky.net/forecast/f4e932d02c874450a655bdf5222e1659/${lat}, ${long}`;
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                onSuccess(data);
            });
    }

    // render main section with data

    function renderMainBlock(data) {
        const { temperature, summary, icon } = data.currently;
        const iconElem = document.querySelector('.icon');

        let celsius = (temperature - 32) * (5 / 9);

        tempValue.textContent = Math.floor(celsius);
        tempDescription.textContent = summary;
        timezone.textContent = data.timezone;

        getIcon(icon, iconElem);

        tempSection.addEventListener('click', () => {
            if (tempScale.textContent === "F") {
                tempScale.textContent = "C";
                tempValue.textContent = Math.floor(celsius);
            } else {
                tempScale.textContent = "F";
                tempValue.textContent = Math.floor(temperature);
            }
        });
    }

    // get icons

    function getIcon (icon, iconElement) {
        const skycons = new Skycons({color: "black"}),
            currentIcon = icon.replace(/-/g, "_").toUpperCase();

        if (currentIcon === 'SNOW' || currentIcon === 'RAIN') {
            skycons.color = "SteelBlue";
        }
        if (currentIcon === 'CLEAR_DAY') {
            skycons.color = "Orange";
        }

        if (currentIcon === 'PARTLY_CLOUDY_NIGHT') {
            skycons.color = "grey";
        }

        if (currentIcon === 'CLEAR_NIGHT') {
            skycons.color = "Goldenrod";
        }
        skycons.play();
        return skycons.set(iconElement, Skycons[currentIcon]);        
    }
});