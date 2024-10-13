import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function Loginpage() {
  const { loginUser } = useContext(AuthContext);

  const handleSubmitL = (e) => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

     email.length > 0 && loginUser(email,password) 
  
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#212529' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                   <img
                      //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmitL}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h2 fw-bold mx-auto mb-0">Welcome</span>
                          </div>
                          <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h5 mx-auto mb-0">Sign in to your account</span>
                          </div>
                        <div className="form-outline mb-4">
                            <input
                              type="email"
                              name="email"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Email Address"
                            />
                          </div>
                        <div className="form-outline mb-4">
                        <input
                              type="password"
                              name="password"
                              id="form2Example17"
                              className="form-control form-control-lg"
                              placeholder="Password"
                            />
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                          Don't have an account?{' '}
                          <Link to="/register" style={{ color: '#393f81' }}>
                            Register
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 - till date Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
             D
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Loginpage;


/*For CSRF
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  const { loginUser } = useContext(AuthContext);

  const handleSubmitL = (e) => {
    console.log("dsada");
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (email.length > 0) {
      loginUser(email, password);
    }
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#212529' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmitL}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h2 fw-bold mx-auto mb-0">Welcome</span>
                        </div>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h5 mx-auto mb-0">Sign in to your account</span>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            name="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Password"
                          />
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                          Don't have an account?{' '}
                          <Link to="/register" style={{ color: '#393f81' }}>
                            Register
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-light text-center text-lg-start">
        <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2024 - till date Copyright:
          <a className="text-dark" href="https://mdbootstrap.com/">
            D
          </a>
        </div>
      </footer>
    </div>
  );
}

export default LoginPage;*/



/*                        <label className="form-label" htmlFor="form2Example17">
                            Email address
                          </label>
                          <input
                            type="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            name="email"
                          />
                        </div>

                        <label className="form-label" htmlFor="form2Example27">
                            Password
                          </label>
                          <input
                            type="password"
                            id="form2Example27"
                            className="form-control form-control-lg"
                            name="password"
                          />
            
*/


/*import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

function LoginPage() {
  const { loginUser } = useContext(AuthContext);

  const handleSubmitL = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    email.length > 0 && loginUser(email, password);

    console.log(email);
    console.log(password);
  };

  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: '#212529' }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem' }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      //src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: '1rem 0 0 1rem' }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmitL}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h2 fw-bold mx-auto mb-0">Welcome</span>
                        </div>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }} />
                          <span className="h5 mx-auto mb-0">Sign in to your account</span>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            name="email"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Email Address"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            name="password"
                            id="form2Example17"
                            className="form-control form-control-lg"
                            placeholder="Password"
                          />
                        </div>
                        <div className="pt-1 mb-4">
                          <button className="btn btn-dark btn-lg btn-block" type="submit">
                            Login
                          </button>
                        </div>
                        <a className="small text-muted" href="#!">
                          Forgot password?
                        </a>
                        <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>
                          Don't have an account? <Link to="/register">Register here</Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LoginPage;*/

