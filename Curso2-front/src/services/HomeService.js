import AxiosClient from "./AxiosClient";

export default class HomeService {
    constructor() {
        this.client = new AxiosClient()
    }

    getHome = (data) => {
        const requestInfo = {
            url: `https://supermarket-syyv.onrender.com/`,
            withCredentials: true
        }
        return this.client.makeGetRequest(requestInfo)
    }
}