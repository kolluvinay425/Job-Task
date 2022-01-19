import React from "react";
import { useState } from "react";
import "../styles/home.css";
import { Table } from "react-bootstrap";
import UserModel from "./UserModel";

import { fetchUsers } from "../fetches";
function Home() {
  const [modalShow, setModalShow] = useState(false);
  const toggleModal = () => {
    setModalShow(true);
  };
  const hideModal = () => {
    setModalShow(false);
  };
  const [users, setUsers] = useState([]);
  const usersList = async () => {
    try {
      const data = await fetchUsers();
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container gradient-bg">
      <div>
        <button onClick={usersList} className="btn btn-outline-info">
          Get Users
        </button>
        <br />
      </div>
      <br />
      <div className="row">
        <div className="col-sm-12 col-md-12 table">
          <Table striped bordered hover className="">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.phone}
                    <span>
                      <button onClick={toggleModal} id="detail-btn">
                        details
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        {modalShow && <UserModel hideModal={hideModal} show={modalShow} />}
      </div>
    </div>
  );
}

export default Home;