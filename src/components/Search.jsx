import Axios from 'axios';

async function Search(props) {
    var value = props;
    var apiUrl = 'https://pixabay.com/api';
    var apiKey = '12027914-00b10473d10ee790f2812000c';
    var images = [];

    var res = await Axios.get(`${apiUrl}/?key=${apiKey}&q=${value}&image_type=photo%order=latest&per_page=99`);
    images = res.data.hits;
    return images;
}
 
export default Search;
