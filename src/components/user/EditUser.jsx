import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

function EditUser() {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        name: "",
        username: "",
        email: "",
        phone: "",
        website: ""
    });
    

    const { name, username, email, phone, website } = user;
    const onInputChange = e => {
        // console.log(e.target.value)

        setUser({ ...user, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        loadUser();
    }, [])

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:3003/users/${id}`, user);
        history.push("/");
    };

    const loadUser = async () => {
        const response = await axios.get(`http://localhost:3003/users/${id}`);
        setUser(response.data);
        // console.log(response.data);
    }
      
    return (
        <>
            <section className="container py-5">
                <div className="row">
                    <div className="col-md-6  mx-auto">
                        <form className="border p-5 bg-secondary" onSubmit={e=> onSubmit(e)}>
                           
                            <div>
                                <h5 className="text-center text-white pb-3">Edit a User</h5>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Name"
                                    name="name"
                                    value={name}
                                    onChange={e => onInputChange(e)}
                                />


                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter User Name"
                                    name="username"
                                    value={username}
                                    onChange={e => onInputChange(e)}
                                />

                            </div>
                            <div className="mb-3" >
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter Email"
                                name="email"
                                value={email}
                                onChange={e => onInputChange(e)}
                            />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Phone No"
                                    name="phone"
                                    value={phone}
                                    onChange={e => onInputChange(e)}
                                />

                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Website Name"
                                    name="website"
                                    value={website}
                                    onChange={e => onInputChange(e)}
                                />

                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Add User
                            </button>
                        </form>
                    </div>


                </div>
            </section>

        </>
    )
}

export default EditUser