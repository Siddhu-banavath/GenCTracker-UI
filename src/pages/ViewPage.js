import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
export default function ViewAll() {

    const [users, setUser] = useState([]);
    
    useEffect(() => {
        localStorage.setItem("user", "normal")

        loadUsers();
    }, []);

    const loadUsers = async () => {

        const result = await axios.get("http://localhost:8080/get/all");

        setUser(result.data);

    };


    return (

        <div className="container">

            <div className="py-4">

               <table className="table border shadow">

                    <thead>

                        <tr>

                            <th scope="col">AssociateID</th>

                            <th scope="col">Assoc_Name</th>

                            <th scope="col">Project_ID</th>

                            <th scope="col">Project_Name</th>

                            <th scope="col">Cust_Name</th>

                            <th scope="col">Skill</th>

                            <th scope="col">Assoc_City</th>

                            <th scope="col">Hcm_Name</th>

                            <th scope="col">Mentor_Name</th>

                            <th scope="col">Current_Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {users.map((user, index) => (

                            <tr>

                                <td>{user.asso_ID}</td>

                                <td>{user.assoName}</td>

                                <td>{user.proj_ID}</td>

                                <td>{user.proj_Name}</td>

                                <td>{user.cust_Name}</td>

                                <td>{user.skill}</td>

                                <td>{user.asso_City}</td>

                                <td>{user.hcm_Name}</td>

                                <td>{user.mentor_Name}</td>

                                <td>{user.current_Status}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    )

}


