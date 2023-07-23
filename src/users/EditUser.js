import axios from 'axios';

import React, { useEffect } from "react";

import react, { useState } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {

    let navigate = useNavigate()

    const { id } = useParams()


    const [user, setUser] = useState({

        asso_id: "",

        asso_name: "",

        proj_id: "",

        proj_name: "",

        cust_name: "",

        skill: "",

        asso_city: "",

        hcm_name: "",

        mentor_name: "",

        current_status: ""

    })

    const { asso_id,

        asso_name,

        proj_id,

        proj_name,

        cust_name,

        skill,

        asso_city,

        hcm_name,

        mentor_name,

        current_status } = user

    const onInputChange = (e) => {

        setUser({ ...user, [e.target.name]: e.target.value });

    };

    useEffect(() => {

        loadUser()

    }, []);

    const onSubmit = async (e) => {

        e.preventDefault();

        await axios.put(`http://localhost:8080/user/${id}`, user)

        navigate("/");




    };

    const loadUser = async () => {

        const result = await axios.get(`http://localhost:8080/user/${id}`)

        setUser(result.data)

    }


    return (<div className="container">

        <div className="row">

            <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                <h2 className="text-center m-4">EDIT USER</h2>

                <form align="left" onSubmit={(e) => onSubmit(e)}>

                    <div className="mb-3">

                        <label htmlFor="asso_name" className="form-label">

                            <b>Asso_name</b>

                        </label>

                        <input type={"text"}

                            className="form-control"

                            placeholder="Enter your Associate_name"

                            name="asso_name"

                            value={asso_name}

                            onChange={(e) => onInputChange(e)}

                        />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="proj_id" className="form-label">

                            <b>Proj_id</b>

                        </label>

                        <input

                            type={"text"}

                            className="form-control"

                            placeholder="Enter your proj_id"

                            name="proj_id"

                            value={proj_id}

                            onChange={(e) => onInputChange(e)}

                        />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="proj_name" className="form-label">

                            <b>Proj_name</b>

                        </label>

                        <input

                            type={"text"}

                            className="form-control"

                            placeholder="Enter your proj_name"

                            name="proj_name"

                            value={proj_name}

                            onChange={(e) => onInputChange(e)}

                        />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="cust_name" className="form-label">

                            <b>Cust_name</b>

                        </label>

                        <input

                            type={"text"}

                            className="form-control"

                            placeholder="Enter your cust_name"

                            name="cust_name"

                            value={cust_name}

                            onChange={(e) => onInputChange(e)}

                        />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="skill" className="form-label">

                            <b>Skill</b>

                        </label>

                        <select className="form-select" name="skill"

                            onChange={onInputChange} value={user.skill}>

                            <label for="language"></label>

                            <option value="">Enter Skill</option>

                            <option value="TIBCO">TIBCO</option>

                            <option value="Micro service">Micro service</option>

                            <option value="Opensource" >Opensource</option></select>

                    </div>

                    <div className="mb-3">

                        <label htmlFor="asso_city" className="form-label">

                            <b>Asso_city</b>

                        </label>

                        <select className="form-select" name="asso_city"

                            onChange={onInputChange} value={user.asso_city}>

                            <option value="">Hyderabad</option>

                            <option value="Bangalore">Bangalore</option>

                            <option value="Pune" >Pune</option>

                            <option value="Kolkata" >Kolkata</option>

                            <option value="Noida" >Noida

                            </option>

                            <option value="Coimbatore" >Coimbatore

                            </option>

                            <option value="PGurgaon" >Gurgaon

                            </option>

                            <option value="Mumbai" >Mumbai

                            </option>

                        </select>

                    </div>

                    <div className="mb-3">

                        <label htmlFor="hcm_name" className="form-label">

                            <b>Hcm_name</b>

                        </label>

                        <input

                            type={"text"}

                            className="form-control"

                            placeholder="Enter your hcm_name"

                            name="hcm_name"

                            value={hcm_name}

                            onChange={(e) => onInputChange(e)}

                        />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="mentor_name" className="form-label">

                            <b>Mentor_name</b>

                        </label>

                        <input

                            type={"text"}

                            className="form-control"

                            placeholder="Enter your mentor_name"

                            name="mentor_name"

                            value={mentor_name}

                            onChange={(e) => onInputChange(e)}

                        />

                    </div>

                    <div className="mb-3">

                        <label htmlFor="current_status" className="form-label">

                            <b>Current_status</b>

                        </label>

                        <select className="form-select" name="current_status"

                            onChange={onInputChange} value={user.current_status}>

                            <label for="Current Status"></label>

                            <option value=""> Enter Status</option>

                            <option value="Batch 10">Batch 11 </option>

                            <option value="Working on POC Project">Working on POC Project </option>

                            <option value="Working Client Project" >Working Client Project</option>

                        </select>

                    </div>

                    <button type="submit" className="btn btn-outline-primary">SUBMIT</button>

                    <Link className="btn btn-outline-danger mx-2" to={"/"}>CANCEL</Link>

                </form>

            </div>

        </div>

    </div>

    );

}