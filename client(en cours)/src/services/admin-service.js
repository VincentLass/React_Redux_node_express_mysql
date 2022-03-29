import axios from 'axios';
import authHeader from './auth-header';

class AdminService {
    getAdmin = () => {
        return axios.get('http://localhost:3000/admin', {headers: authHeader()})
    }
}
 

export default AdminService;