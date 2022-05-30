import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

function AddUser() {
   let history=useHistory();
    const [user,setUser]=useState({
        name:"",
        username:"",
        email:"",
        phone:"",
        website:""
    });
    const {name,username,email,phone,website}=user;
    const onInputChange=e=>{
        console.log(e.target.value)

        setUser({...user,[e.target.name]:e.target.value})
    }

    const onSubmit=async e=>{
        e.preventDefault();
        await axios.post("http://localhost:3003/users",user);

        history.push('/');
    }
  
    return (
        <>
            <section className='container py-5'>
                <div className="row">
                    <div className="col-md-6  mx-auto">
                        <form className='border p-5 bg-secondary' onSubmit={e=>onSubmit(e)}>
                            <div>
                                <h5 className='text-center text-white pb-3'>Add a User</h5>
                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Name'
                                    name='name'
                                    value={name}
                                    onChange={e=>onInputChange(e)}
                                />

                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter User Name'
                                    name='username'
                                    value={username}
                                    onChange={e=>onInputChange(e)}
                                />

                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder='Enter Email'
                                    name='email'
                                    value={email}
                                    onChange={e=>onInputChange(e)}
                                />

                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Phone No'
                                    name='phone'
                                    value={phone}
                                    onChange={e=>onInputChange(e)}
                                />

                            </div>
                            <div className="mb-3">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder='Enter Website Name'
                                    name='website'
                                    value={website}
                                    onChange={e=>onInputChange(e)}
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

export default AddUser