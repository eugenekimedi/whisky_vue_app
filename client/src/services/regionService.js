const baseURL = 'http://localhost:3000/regions/';

export default {
    getRegions() {
        return fetch(baseURL)
        .then(res => res.json());
    },
    async getRegionById(id) {
        try {
            const response = await fetch(baseURL + id)
            const region = await response.json()
            return region
        } catch (error) {
            console.log(error)
        }
    }
}