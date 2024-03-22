import AxiosClient from "./AxiosClient";

export default class UsersService {
    constructor() {
        this.client = new AxiosClient()
    }

    getUsers = () => {
        const requestInfo = {
            url: `https://supermarket-syyv.onrender.com/`
        }
        return this.client.makeGetRequest(requestInfo)
    }
}