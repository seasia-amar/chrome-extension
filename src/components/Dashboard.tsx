import { Button, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { encryptData } from "./Welcome";

const Dashboard = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [gtoken, setToken] = useState(localStorage.getItem("auth"));

  

  const handleReset = async () => {
    setToken(encryptData());
  };

  const handleLogout = () => {
    setModal(true);
  };

  return (
    <>
      <Modal
        style={{ zIndex: 999999 }}
        show={modal}
        onHide={() => setModal(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to Restart?</p>
          <Button
            className="me-2"
            onClick={() => {
              navigate("/");
              localStorage.clear();
            }}
          >
            Yes
          </Button>
          <Button onClick={() => setModal(false)}>No</Button>
        </Modal.Body>
      </Modal>

      <div className="wrapper p-2">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div wt-100 pt-2 pb-2>
              <div className="col-12">
            <div className="wt-100 pt-2 pb-2">
              <div className="welcome-text">
                <span> Welcome to Dashboard</span>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="wt-100 displayToken d-flex flex-wrap">
              <span className="col-12 pt-2 pb-2 fs-4"> Your Token is</span>
              <span className="col-12 pt-2 pb-2 fs-5 getToken">{gtoken ? gtoken : "token doesn't exist"}</span>
            </div>
          </div>

          <div className="buttoncontainer wt-100 d-flex flex-wrap">
          <div className="col-6">
            <div className="wt-100 button mt-3">
              <button
               onClick={handleReset}
              >
               Reset
              </button>
            </div>
          </div>

          <div className="col-6">
            <div className="wt-100 button mt-3">
              <button
              onClick={handleLogout}
              >
               Logout
              </button>
            </div>
          </div>
          </div>

        
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
