import React from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import UserModel from "./UserModel";
import { Button } from "react-bootstrap";
function Users({ users }) {
  const [modalShow, setModalShow] = useState(false);
  const toggleModal = () => {
    setModalShow(true);
  };
  const hideModal = () => {
    setModalShow(false);
  };
  return (
    <div>
      <Table striped bordered hover className="table">
        <thead>
          <tr>
            <th>#</th>
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
                  <Button onClick={toggleModal}>datails</Button>
                  <button onClick={toggleModal} id="detail-btn">
                    details
                  </button>
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      {modalShow && <UserModel hideModel={hideModal} />}
    </div>
  );
}

export default Users;
