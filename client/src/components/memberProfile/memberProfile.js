import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MemberProfile = () => {

    const token = localStorage.getItem('jwtToken');

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [salutation, setSalutation] = useState("");
    const [occupation, setOccupation] = useState("");
    const [email, setEmail ] = useState("");

    useEffect(() => {
        axios.get('/api/member-profile', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setUsername(res.data.username);
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setSalutation(res.data.salutation);
            setOccupation(res.data.occupation);
            setEmail(res.data.email);
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('/update-member-info', {
            username,
            firstName,
            lastName,
            salutation,
            occupation,
            email
        }).then(res => {
            setUsername(res.data.username)
            setFirstName(res.data.firstName)
            setLastName(res.data.lastName)
            setSalutation(res.data.salutation)
            setOccupation(res.data.occupation)
            setEmail(res.data.email)
        })
    }

    const handleOnChange = (e)=> {
        e.preventDefault();
        if (e.target.name === "username")
        {
            setUsername(e.target.value);
        }
        if (e.target.name === "firstName")
        {
            setFirstName(e.target.value);
        }
        if (e.target.name === "lastName")
        {
            setLastName(e.target.value);
        }
        if (e.target.name === "salutation")
        {
            setSalutation(e.target.value);
        }
        if (e.target.name === "occupation")
        {
            setOccupation(e.target.value);
        }
        if (e.target.name === "email")
        {
            setEmail(e.target.value);
        }
    }

    return (
        <>
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="email">Email</label>
                    <input value={email} type="email" className="form-control" name="email" id="email" onChange={handleOnChange} />
                    </div>
                    <div className="form-group col-md-6">
                    <label htmlFor="username">Username</label>
                    <input onChange={handleOnChange} value={username} type="text" className="form-control" name="username" id="username" placeholder="Username" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input onChange={handleOnChange} value={firstName} type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input onChange={handleOnChange} value={lastName} type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="occupation">Occupation</label>
                    <input onChange={handleOnChange} value={occupation} type="text" className="form-control" name="occupation" id="occupation" />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="salutation">Salutation</label>
                    <select onChange={handleOnChange} name="salutation" id="salutation" className="form-control" value={salutation}>
                        <option>Choose...</option>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                    </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input onChange={handleOnChange} className="form-check-input" type="checkbox" name="subscribe" id="subscribe" />
                    <label className="form-check-label" htmlFor="subscribe">
                        subscribe to weekly updates
                    </label>
                    </div>
                </div>
                <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default MemberProfile;