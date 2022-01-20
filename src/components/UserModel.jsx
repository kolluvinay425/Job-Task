import React from "react";
import { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { fetchCurrentUser } from "../fetches";
function UserModel({ hideModal, show, user }) {
  const [userAddress, setUserAddress] = useState({});
  const [userCompany, setUserCompany] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await fetchCurrentUser(user.id);
      setUserAddress(data.address);
      setUserCompany(data.company);
    };
    fetchUserData();
  }, [user.id]);
  //   console.log("user Address", userAddress);
  //   console.log("user Company", userCompany);

  return (
    <div id="bg-gradient">
      <>
        <Modal
          dialogClassName="modal-90w public-profile-modal-class"
          className="special_modal"
          show={show}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              <span style={{ color: "#f25591" }}>{user.name}</span> Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-8">
                <h4>Company</h4>
                <p>
                  Name: <b>{userCompany.name}</b>
                </p>
                <p>
                  Website: <b>{user.website}</b>
                </p>
                <p>
                  Role: <b>{userCompany.catchPhrase}</b>
                </p>
                <p></p>
              </div>
              <div className="col-md-4">
                <h4>Address</h4>
                <p>
                  City: <b>{userAddress.city}</b>
                </p>
                <p>
                  Street: <b>{userAddress.street}</b>
                </p>
                <p>
                  House No: <b>{userAddress.suite}</b>
                </p>
                <p>
                  Zip Code: <b>{userAddress.zipcode}</b>
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button onClick={hideModal} className="button">
              <span>Close</span>
            </button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default UserModel;
