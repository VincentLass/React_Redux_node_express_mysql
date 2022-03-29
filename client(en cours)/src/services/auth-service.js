import axios from 'axios';

class AuthService {
    login = (data) => {
        return axios
            .post('http://localhost:3000/connexion', data)
            .then((res) => {
                if(res) {
                    localStorage.setItem("admin", JSON.stringify(res.data));
                    console.log(res.data);
                }
                return res.data;
            });
    }

    logout = () => {
        localStorage.removeItem('admin');
    };
};

export default new AuthService;