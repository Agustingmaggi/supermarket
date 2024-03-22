import AxiosClient from "./AxiosClient";

export default class AuthService {
    constructor() {
        this.client = new AxiosClient()
    }

    registerUser = (formData) => {
        const requestInfo = {
            url: `https://supermarket-syyv.onrender.com/api/sessions/register`,
            data: formData
        }
        return this.client.makePostRequest(requestInfo)
    }
}