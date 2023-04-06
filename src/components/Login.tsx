import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState<any>({});

  const navigate = useNavigate();
// handle change for the set data in the state
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };
//   handle submit to submit the password
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setError(validation(login));
  };

//   in UseEffect if error not found and password is correct it will redirect to the dashboard page
  useEffect(() => {
    if (
      Object.keys(error)?.length == 0 &&
      process.env.REACT_APP_SECRET_KEY == login.password
    ) {
      // localStorage.getItem("auth");
      localStorage.setItem("login","true")
      navigate("/dashboard");
    }
  }, [error]);


// validation function for the error shows and not to redirect
  const validation = (val: any) => {
    const err: any = {};

    if (!val.password || !val.cpassword) {
      err.password = "Password is required";
    } else if (val.cpassword !== val.password) {
      err.cpassword = "Password doesn't match";
    } else if (
      val.cpassword != process.env.REACT_APP_SECRET_KEY ||
      val.cpassword != process.env.REACT_APP_SECRET_KEY
    ) {
      err.cpassword = "Password doesn't match with original password";
    }
    return err;
  };

  return (
    <div className="wrapper p-3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Form onSubmit={handleSubmit}>
              <div className="wt-100 d-flex flex-wrap">
                <div className="col-12 pt-2 pb-2 fs-2 text-uppercase ">
                  <span> login</span>
                </div>

                <div className="col-12">
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                      className="password login-icon"
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={login.password}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error?.password}</span>
                  </Form.Group>
                </div>

                <div className="col-12">
                  <Form.Group className="mb-3" controlId="formBasiccpassword">
                    <Form.Control
                      className="password login-icon"
                      type="password"
                      placeholder="Confirm Password"
                      name="cpassword"
                      value={login.cpassword}
                      onChange={handleChange}
                    />
                    <span className="text-danger">{error?.cpassword}</span>
                  </Form.Group>
                </div>

                <div className="col-12">
                  <div className="button">
                    <Button variant="dark" type="submit">
                      Login
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
