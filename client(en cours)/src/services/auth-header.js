
export default function authHeader() {
    const admin = JSON.parse(localStorage.getItem('admin'));
    console.log(admin);
    if (admin && admin.accessToken) {
        return { 'x-access-token' : admin.accessToken};
    } else {
        return {};
    }
}