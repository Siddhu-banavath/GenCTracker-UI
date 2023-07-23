import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link, useParams } from 'react-router-dom';

export default function Home() {

    const [users, setUsers] = useState([]);

    const { id } = useParams();

    useEffect(() => {

       // localStorage.setItem("user", "admin")

        loadUsers();

    }, []);

    const loadUsers = async () => {

        const result = await axios.get("http://localhost:8080/user");

        setUsers(result.data);

    };

    const deleteUser = async (id) => {

        await axios.delete(`http://localhost:8080/user/${id}`);

        loadUsers();

    };

    return (

        <div className="container">

            <div className='py-4'>

                <table className="table border shadow">

                    <thead>

                        <tr>

                            <th scope="col">Asso_id</th>

                            <th scope="col">Asso_name</th>

                            <th scope="col">Proj_id</th>

                            <th scope="col">Proj_name</th>

                            <th scope="col">Cust_name</th>

                            <th scope="col">Skill</th>

                            <th scope="col">asso_city</th>

                            <th scope="col">Hcm_name</th>

                            <th scope="col">Mentor_name</th>

                            <th scope="col">Current_status</th>

                            <th scope="col">Action</th>

                        </tr>

                    </thead>

                    <tbody>

                        {users.map((user, index) => (

                            <tr>

                                <th scope="row" key={index}>

                                    {index + 1}

                                </th>

                                <td>{user.asso_name}</td>

                                <td>{user.proj_id}</td>

                                <td>{user.proj_name}</td>

                                <td>{user.cust_name}</td>

                                <td>{user.skill}</td>

                                <td>{user.asso_city}</td>

                                <td>{user.hcm_name}</td>

                                <td>{user.mentor_name}</td>

                                <td>{user.current_status}</td>

                                <td>

                                    <Link className="btn btn-outline-primary mx-2" to={`/viewuser/${user.asso_id}`}>View</Link>

                                    <Link className="btn btn-outline-primary mx-2"

                                        to={`/edituser/${user.asso_id}`}

                                    >Edit</Link>

                                    <button className="btn btn-outline-danger mx-2" onClick={() => deleteUser(user.asso_id)}>

                                        Delete</button>

                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

        </div>

    );


}