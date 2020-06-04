const baseURL = 'http://localhost:3000/regions/';

export default {
    getRegions() {
        return fetch(baseURL)
        .then(res => res.json());
    }
}