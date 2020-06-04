const baseURL = 'http://localhost:3000/whiskies/';

export default {
    getWhiskies() {
        return fetch(baseURL)
        .then(res => res.json());
    }
}