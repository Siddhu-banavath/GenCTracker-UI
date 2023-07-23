import axios from 'axios';

import React from 'react';

import react, { useState } from "react";

import Validations from './Validations';

import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate = useNavigate()

    const [user, setUser] = useState({

        asso_name: "",

        proj_id: "",

        proj_name: "",

        cust_name: "",

        skill: "",

        asso_city: "",

        hcm_name: "",

        mentor_name: "",

        current_status: "",


    });

    const [errors, setErrors] = useState({})

    const {

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

    const onSubmit = async (e) => {

        e.preventDefault();

        setErrors(Validations(user))

        if (errors.error === false) {

            await axios.post("http://localhost:8080/user", user)

            navigate("/");

        }

    };


    return (

        <div className="container">

            <div className="row">

                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">

                    <h2 className="text-center m-4">REGISTER USER</h2>

                    <form align="left" onSubmit={(e) => onSubmit(e)}>

                        <div className='mb-3'>

                            <label htmlFor='asso_name' className='form-label'>

                                <b>Associate_Name : </b>

                            </label>

                            <input type={"text"}

                                className="form-control"

                                placeholder="Enter your Associate_name"

                                name="asso_name"

                                value={asso_name}

                                onChange={(e) => onInputChange(e)}

                            />

                             {errors.asso_name && <p style={{ color: "red" }}>{errors.asso_name}</p>}

                        </div>

                        <div className="mb-3">

                            <label htmlFor="proj_id" className="form-label">

                                <b>Poject_Id : </b>

                            </label>

                            <input

                                type={"text"}

                                className="form-control"

                                placeholder="Enter your proj_id"

                                name="proj_id"

                                value={proj_id}

                                onChange={(e) => onInputChange(e)}

                            />

                             {errors.proj_id && <p style={{ color: "red" }}>{errors.proj_id}</p>}

                        </div>

                        <div className="mb-3">

                            <label htmlFor="proj_name" className="form-label">

                                <b>Proj_Name : </b>

                            </label>

                            <input

                                type={"text"}

                                className="form-control"

                                placeholder="Enter your proj_name"

                                name="proj_name"

                                value={proj_name}

                                onChange={(e) => onInputChange(e)}

                            />

                             {errors.proj_name&& <p style={{ color: "red" }}>{errors.proj_name}</p>}

                        </div>

                        <div className="mb-3">

                            <label htmlFor="cust_name" className="form-label">

                                <b>Cust_Name : </b>

                            </label>

                            <input

                                type={"text"}

                                className="form-control"

                                placeholder="Enter your cust_name"

                                name="cust_name"

                                value={cust_name}

                                onChange={(e) => onInputChange(e)}

                            />

                             {errors.cust_name&& <p style={{ color: "red" }}>{errors.cust_name}</p>}

                        </div>

                        <div className="mb-3">

                            <label htmlFor="skill" className="form-label">

                                <b>Skill : </b>

                            </label>

                            <select className="form-select" name="skill"

                                onChange={onInputChange} value={user.skill}>

                                <label for="language"></label>

                                <option value="">Enter Skill</option>

                                <option value="TIBCO">TIBCO</option>

                                <option value="Micro service">Micro service</option>

                                <option value="Opensource" >Opensource</option></select>

                                {errors.skill&& <p style={{ color: "red" }}>{errors.skill}</p>}




                        </div>

                        <div className="mb-3">

                            <label htmlFor="asso_city" className="form-label">

                                <b>Asso_City : </b>

                            </label>

                            <select className="form-select" name="asso_city"

                                onChange={onInputChange} value={user.asso_city}>

                                <option value="/">Enter City</option>

                                <option value="Hyderabad">Hyderabad</option>

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

                            {errors.asso_city&& <p style={{ color: "red" }}>{errors.asso_city}</p>}

                        </div>

                        <div className="mb-3">

                            <label htmlFor="hcm_name" className="form-label">

                                <b>Hcm_Name : </b>

                            </label>

                            <input

                                type={"text"}

                                className="form-control"

                                placeholder="Enter your hcm_name"

                                name="hcm_name"

                                value={hcm_name}

                                onChange={(e) => onInputChange(e)}

                            />

                            {errors.hcm_name&& <p style={{ color: "red" }}>{errors.hcm_name}</p>}

                        </div>

                        <div className="mb-3">

                            <label htmlFor="mentor_name" className="form-label">

                                <b>Mentor_Name : </b>

                            </label>

                            <input

                                type={"text"}

                                className="form-control"

                                placeholder="Enter your mentor_name"

                                name="mentor_name"

                                value={mentor_name}

                                onChange={(e) => onInputChange(e)}

                            />

                            {errors.mentor_name&& <p style={{ color: "red" }}>{errors.mentor_name}</p>}

                        </div>

                        <div className="mb-3">

                            <label htmlFor="current_status" className="form-label">

                                <b>Current_Status : </b>

                            </label>

                            <select className="form-select" name="current_status"

                                onChange={onInputChange} value={user.current_status}>

                                <label for="Current Status"></label>

                                <option value="">Enter Status </option>

                                <option value="Batch 10">Batch 11 </option>

                                <option value="Working on POC Project">Working on POC Project </option>

                                <option value="Working Client Project" >Working Client Project</option>

                            </select>

                            {errors.current_status&& <p style={{ color: "red" }}>{errors.current_status}</p>}

                        </div>

                        <button type="submit" className="btn btn-outline-primary" >

                            SUBMIT

                        </button>

                        <Link className="btn btn-outline-danger mx-2" to={"/"}>CANCEL</Link>

                    </form>

                </div>

            </div>

        </div>

    );




}



