import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const MemberProfile = (props) => {
    const testToken = localStorage.getItem('jwtToken');

    if((!testToken || testToken === ""))  {
        props.history.push('/login');
    }

    const token = localStorage.getItem('jwtToken');

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [salutation, setSalutation] = useState("");
    const [occupation, setOccupation] = useState("");
    const [email, setEmail ] = useState("");
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        axios.get('/api/member-profile',
            {
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
        axios.put('/api/update-member-info', {
            username,
            firstName,
            lastName,
            salutation,
            occupation,
            email
        }, 
        {headers: {
            Authorization: `Bearer ${token}`
        }}).then(res => {
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
        setDisplay(false);
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
    }

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.setItem('jwtToken', '');
        setDisplay(true);
        setTimeout(() => {
           props.history.push('/');
        }, 1200)
    }

    return (
        <>
        <nav className="navbar navbar-light bg-light">
            <Link to="/" className="navbar-brand">Spaceship</Link>
            <Link to="/" className="ml-auto">Home</Link>
            <a className="nav-link" href="/" onClick={handleLogout}>Logout</a>
        </nav>
        <div className="container">
            <form>
                {display && 
                <div className="alert alert-success" role="alert">
                    Logout Successful!
                </div>
                }
                <div className="form-row">
                    <div className="form-group col-md-6">
                    <label htmlFor="username">Username</label>
                    <input value={username} type="text" className="form-control" name="username" id="username" onChange={handleOnChange} placeholder="Username" />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input value={firstName} type="text" className="form-control" name="firstName" id="firstName" onChange={handleOnChange} placeholder="First Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input value={lastName} type="text" className="form-control" name="lastName" id="lastName" onChange={handleOnChange} placeholder="Last Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="occupation">Occupation</label>
                    <input value={occupation} type="text" className="form-control" name="occupation" id="occupation" onChange={handleOnChange} />
                </div>
                <div className="form-row">
                    <div className="form-group col-md-4">
                    <label htmlFor="salutation">Salutation</label>
                    <select name="salutation" id="salutation" className="form-control" value={salutation} onChange={handleOnChange}>
                        <option>Choose...</option>
                        <option>Mr.</option>
                        <option>Mrs.</option>
                        <option>Ms.</option>
                    </select>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="subscribe" id="subscribe" />
                    <label className="form-check-label" htmlFor="subscribe">
                        subscribe to weekly updates
                    </label>
                    </div>
                </div>
                <button onClick={handleSubmit} className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    )
}
export default MemberProfile;