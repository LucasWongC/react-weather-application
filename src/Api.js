const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API
const URL = "https://api.openweathermap.org/data/2.5/forecast/daily"

// export const coordinates = (location) => `${URL}weather?q=${location}&appid=${API_KEY}`

export const weatherForecast = (loc) => `${URL}?q=${loc}&units=metric&cnt=7&appid=${API_KEY}`
