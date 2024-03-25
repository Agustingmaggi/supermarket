import AxiosClient from "./AxiosClient";

export default class CookiesService {
    constructor() {
        this.client = new AxiosClient()
    }

    getCookies = () => {
        const requestInfo = {
            url: `https://supermarket-syyv.onrender.com`,
            // withCredentials: true
        }
        return this.client.makeGetRequest(requestInfo)
    }
}