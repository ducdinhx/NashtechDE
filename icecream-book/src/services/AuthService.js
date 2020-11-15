import axios from "axios"
const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
    async login(account) {
        const response = await axios.post(API_URL + "signin", account);
        console.log(response.data);
        if (response.data.token) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }

    logout() {
        localStorage.removeItem("user");
        window.location.reload();
    }

    register(data) {
        return axios.post(API_URL + "register", data);
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));;
    }

}
export default new AuthService();