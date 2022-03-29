import React from 'react';
import { useEffect } from 'react';
import AdminService from '../services/admin-service';

const Admin = () => {

    // useEffect(() => {
    //     AdminService
    //         .getAdmin()
    //         .then((res) => {
    //             console.log(res);
    //         })
    // }, []);

    return (
        <div>
            <h2>Page admin</h2>
        </div>
    );
};

export default Admin;