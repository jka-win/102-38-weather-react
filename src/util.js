
const owmDomain = "https://api.openweathermap.org";
const owmKey = "6939073922af39303e48a31042083059";

export function fetchOwm(path, params) {
    params = { ...params, appid: owmKey };
    return fetch(`${owmDomain}/${path}?${new URLSearchParams(params)}`)
        .then(res => res.json());
}


const owmZipPath = 'geo/1.0/zip';

export function fetchOwmZip(params) {
    return fetchOwm(owmZipPath, params);
}


const owmOneCallPath = 'data/2.5/onecall';

export function fetchOwmOneCall(params) {
    return fetchOwm(owmOneCallPath, params);
}


export function kelvinToCelcius(k) {
    return k - 273.15;
}

export function kelvinToFahrenheit(k) {
    return (k -273.15) * 9 / 5 + 32;
}
