import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

const secretPass: any = process.env.REACT_APP_SECRET_PASSCODE;
// used the math random function for the random text
let rand = function () {
  return Math.random().toString(36).substr(2);
};

// Used the cryptojs function for the encryption
export const encryptData = () => {
  let token = CryptoJS.AES.encrypt(
    JSON.stringify(rand() + rand()),
    secretPass
  ).toString();
  return token;
};

const Welcome = () => {
  const navigate = useNavigate();
  const [gtoken, setToken] = useState("");

  //if token not found then it will set the token in useEffect
  useEffect(() => {
    if (!gtoken) {
      return setToken(encryptData());
    }
  }, [gtoken]);

  return (
    <section className="wrapper p-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wt-100 pt-2 pb-2">
              <div className="welcome-text">
                <span> Hii Welcome !</span>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="wt-100 displayToken d-flex flex-wrap">
              <span className="col-12 pt-2 pb-2 fs-4"> Your Token is</span>
              <span className="col-12 pt-2 pb-2 fs-5 getToken">
                {gtoken && gtoken}
              </span>
            </div>
          </div>
          <div className="col-12">
            <div className="wt-100 button mt-3">
              <button
                onClick={() => {
                  navigate("/login");
                  localStorage.setItem("auth", gtoken);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
