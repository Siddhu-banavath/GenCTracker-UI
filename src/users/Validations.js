
import { useState } from "react"

export default function Validations(user) {

    // const [errors,setErrors] = useState({})

    const errors = {

        asso_name: "",

        proj_id: "",

        proj_name: "",

        cust_name: "",

        skill: "",

        asso_city: "",

        hcm_name: "",

        mentor_name: "",

        current_status: "",

        error: false




    };

    console.log("control is working")

    if (user.asso_name === "") {

        errors.asso_name = "Associate_Name required!"

        errors.error = true

    }

    console.log("proj id not entered")

    if (user.proj_id === "") {

        errors.proj_id = "Project_ID required"

        errors.error = true

    }

    if (user.proj_name === "") {

        errors.proj_name = "Project_Name required"

        errors.error = true


    }

    if (user.cust_name === "") {

        errors.cust_name = "Customer_Name required"

        errors.error = true

    }

    if (user.skill === "") {

        errors.skill = "Skill required"

        errors.error = true

    }

    if (user.asso_city === "") {

        errors.asso_city= "Skill required"

        errors.error = true

    }

    if (user.hcm_name === "") {

        errors.hcm_name = "Hcm_Name required"

        errors.error = true

    }

    if (user.mentor_name === "") {

        errors.mentor_name = "Mentor_Name required"

        errors.error = true

    }

    if (user.current_status === "") {

        errors.current_status = "Current_statusrequired"

        errors.error = true

    }

   
    console.log("errors", errors)

    return { ...errors }

}


