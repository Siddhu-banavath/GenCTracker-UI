

import axios from 'axios';

import React, { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';


export default function ViewUser() {

    const [user, setUser] = useState({

        asso_name: "",

        proj_id: "",

        proj_name: "",

        cust_name: "",

        skill: "",

        asso_city: "",

        hcm_name: "",

        mentor_name: "",

        current_status: ""





    });

    const { id } = useParams();

    useEffect(() => {

        loadUser();

    }, []);






    const loadUser = async () => {

        const result = await axios.get(`http://localhost:8080/user/${id}`);

        setUser(result.data);




    };

    return (

        <div className="container">

            <div className="row">

                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                    <h2 className="text-center m-4">USER DETAILS</h2>

                    <div className="card">

                        <div className="card-header">

                            <b>Details of user id</b> : {user.asso_id}

                            <ul className="list-group  list-group-flush">

                                <li className="list-group-item">

                                    <b>Asso_name:</b>

                                    {user.asso_name}

                                </li>

                                <li className="list-group-item">

                                    <b>Proj_id : </b>

                                    {user.proj_id}

                                </li>

                                <li className="list-group-item">

                                    <b>Proj_name : </b>

                                    {user.proj_name}

                                </li>

                                <li className="list-group-item">

                                    <b>Cust_name : </b>

                                    {user.cust_name}

                                </li>

                                <li className="list-group-item">

                                    <b>Skill : </b>

                                    {user.skill}

                                </li>

                                <li className="list-group-item">

                                    <b>Asso_city : </b>

                                    {user.asso_city}

                                </li>

                                <li className="list-group-item">

                                    <b>Hcm_name : </b>

                                    {user.hcm_name}

                                </li>

                                <li className="list-group-item">

                                    <b>Mentor_name : </b>

                                    {user.mentor_name}

                                </li>

                                <li className="list-group-item">

                                    <b> Current_status : </b>

                                    {user.current_status}

                                </li>




                            </ul>

                        </div>

                    </div>

                    <Link className="btn btn-primary my-2" to={"/"}>Back to Home</Link>

                </div>

            </div>

        </div>

    );

}