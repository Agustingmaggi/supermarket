import AxiosClient from "./AxiosClient";

export default class CookiesService {
    constructor() {
        this.client = new AxiosClient();
    }

    getCookies = async () => {
        try {
            const response = await this.client.makeGetRequest('https://supermarket-syyv.onrender.com/');
            // Si necesitas acceder a las cookies, puedes hacerlo a través de la propiedad "headers" de la respuesta
            const cookies = response.headers['set-cookie'];
            // Ahora puedes hacer lo que necesites con las cookies
            console.log("Cookies recibidas:", cookies);
            return response; // O devolver cualquier otro dato que necesites
        } catch (error) {
            console.error("Error al obtener las cookies:", error);
            throw error; // Maneja el error según tus necesidades
        }
    }
}