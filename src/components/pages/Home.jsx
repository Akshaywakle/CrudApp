import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'
const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, [])
 

  const loadUsers = async () => {
    const response = await axios.get("http://localhost:3003/users");

    console.log(response)
    setUsers(response.data);
  }
  const deleteUser = async id => {
    await axios.delete(`http://localhost:3003/users/${id}`);
    loadUsers();
  };

  return (
    <>
      <section classNameName='container-fluid'>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => {
              return (<>
                <tr>
                  <th scope="row">{i + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>


                  <td>
                    <Link to={`/users/${user.id}`}><i className="las la-eye  "></i></Link>
                    <Link to={`/editUser/${user.id}`}><i className="las la-edit m-3"></i></Link>
                    <Link onClick={() => deleteUser(user.id)}><i className="las la-trash"></i></Link>
                  </td>

                </tr>
              </>)
            })}


          </tbody>
        </table>
      </section>

      





    </>
  )
}

export default Home