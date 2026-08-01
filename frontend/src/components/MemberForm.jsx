import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addMember } from "../services/MemberService";


function MemberForm() {

    const navigate = useNavigate();

    const [member , serMember] = useState({
        MEMBER_ID : "",
        FULL_NAME : "",
        NIC : "",
        GENDER : "",
        DATE_OF_BIRTH: "",
        EMAIL: "",  
        PHONE_NO : "",
        ADDRESS : "",
        MEMBER_TYPE : "",
        REGISTRATION_DATE: ""
    });



    //function to handle change
    const handleChange = (event) => {
        const {name , value} = event.target;

        setMember({
            ...member,
            [name] : value
        });
    };

    //function to handle the submit
    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await addMember(member);
            alert("Member Registered Successfully!")
            navigate("/members");
        } catch(error) {
            console.log(error);
            alert("Unable to register member!")
        }
    };

    //reseting 
    const handleReset = () => {
        MEMBER_ID : "",
        FULL_NAME : "",
        NIC : "",
        GENDER : "",
        DATE_OF_BIRTH: "",
        EMAIL: "",  
        PHONE_NO : "",
        ADDRESS : "",
        MEMBER_TYPE : "",
        REGISTRATION_DATE: ""
    }

    return (

        <div className="container">

            <div className="form-container">

                <h2>Member Registration</h2>

                <form onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Member ID</label>
                        <input
                            type="text"
                            name="memberId"
                            value={member.memberId}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            value={member.fullName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>NIC</label>
                        <input
                            type="text"
                            name="nic"
                            value={member.nic}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Gender</label>

                        <select
                            name="gender"
                            value={member.gender}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>

                    </div>

                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            value={member.dob}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            value={member.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Phone Number</label>
                        <input
                            type="text"
                            name="phone"
                            value={member.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>Address</label>

                        <textarea
                            name="address"
                            rows="3"
                            value={member.address}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="form-group">

                        <label>Membership Type</label>

                        <select
                            name="membershipType"
                            value={member.membershipType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Type</option>
                            <option value="Annual">Annual</option>
                            <option value="Lifetime">Lifetime</option>
                            <option value="Student">Student</option>
                        </select>

                    </div>

                    <div className="form-group">
                        <label>Registration Date</label>
                        <input
                            type="date"
                            name="registrationDate"
                            value={member.registrationDate}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="save-btn"
                    >
                        Register Member
                    </button>

                    <button
                        type="button"
                        className="reset-btn"
                        onClick={handleReset}
                    >
                        Reset
                    </button>

                </form>

            </div>

        </div>

    );

}

export default MemberForm;