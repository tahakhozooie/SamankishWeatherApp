const APIkey = "693e4a6d7faa234bab77d78825537766"
const Location = {
    name:'Tehran',
    lat : '35.7000',
    lon : '51.4167'
}
const  BaseURL = "https://api.openweathermap.org/data/2.5";
export const CurrentURL = `${BaseURL}/weather?q=${Location.name}&appid=${APIkey}&lang=fa&units=metric`;
export const HourlyURL = `${BaseURL}/forecast?q=${Location.name}&appid=${APIkey}&lang=fa&units=metric`;

export const BaseIconURL = "http://openweathermap.org/img/wn/";
export const IconSize1 = ".png";
export const IconSize2 = "@2x.png";
export const IconSize4 = "@4x.png";
