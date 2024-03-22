import AxiosClient from "./AxiosClient";

export default class UsersService {
    constructor() {
        this.client = new AxiosClient()
    }

    getUsers = () => {
        const requestInfo = {
            url: `https://localhost:8080/`
        }
        return this.client.makeGetRequest(requestInfo)
    }
}