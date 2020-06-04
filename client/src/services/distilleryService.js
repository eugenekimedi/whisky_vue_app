const baseURL = 'http://localhost:3000/distilleries/';

export default {
    getDistilleries() {
        return fetch(baseURL)
        .then(res => res.json());
    }
}