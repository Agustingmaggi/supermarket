import AxiosClient from "./AxiosClient";

export default class CookiesService {
    constructor() {
        this.client = new AxiosClient()
    }

    getCookies = () => {
        const requestInfo = {
            url: `http://localhost:8080/`,
            // { withCredentials: true }
        }
        return this.client.makeGetRequest(requestInfo)
    }
}