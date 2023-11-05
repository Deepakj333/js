import { showtoggle } from './toggleLoading.js'
const fetchDrinks = async (url) => {

    showtoggle();
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export default fetchDrinks;
