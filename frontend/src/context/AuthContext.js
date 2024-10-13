/*AuthContext code without jwt refresh tokens

import {createContext, useState, useEffect} from "react";
import jwt_decode from "jwt-decode";
import {useHistory} from "react-router-dom";
const swal = require('sweetalert2');

const AuthContext = createContext();

export default AuthContext

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("authTokens")
            ? JSON.parse(localStorage.getItem("authTokens"))
            : null
    );


    const [user, setUser] = useState(() => 
        localStorage.getItem("authTokens")
            ? jwt_decode(localStorage.getItem("authTokens"))
            : null
    );

    const [user, setUser] = useState(() =>
      localStorage.getItem("authTokens")
        ? { ...jwt_decode(localStorage.getItem("authTokens")), user_id: jwt_decode(localStorage.getItem("authTokens")).user_id }
        : null
    );
    


    const [loading, setLoading] = useState(true);

    const history = useHistory();

    const loginUser = async (email, password) => {
        const response = await fetch("/api/token/", {
            method: "POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })
        const data = await response.json()
        console.log(data);

        if(response.status === 200){
            console.log("Logged In");
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem("authTokens", JSON.stringify(data))
            history.push("/homepage")
            swal.fire({
                title: "Login Successful",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })

        } else {    
            console.log(response.status);
            console.log("there was a server issue");
            swal.fire({
                title: "Username or password does not exists",
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

    const registerUser = async (email, username, password, password2) => {
        const response = await fetch("/api/register/", {
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                email, username, password, password2
            })
        })
        if(response.status === 201){
            history.push("/login")
            swal.fire({
                title: "Registration Successful, Login Now",
                icon: "success",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        } else {
            console.log(response.status);
            console.log("There was a server issue");
            swal.fire({
                title: "An Error Occured " + response.status,
                icon: "error",
                toast: true,
                timer: 6000,
                position: 'top-right',
                timerProgressBar: true,
                showConfirmButton: false,
            })
        }
    }

    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem("authTokens")
        history.push("/login")
        swal.fire({
            title: "You have been logged out...",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }

    const contextData = {
        user, 
        setUser,
        authTokens,
        setAuthTokens,
        registerUser,
        loginUser,
        logoutUser,
    }

    useEffect(() => {
        if (authTokens) {
            setUser(jwt_decode(authTokens.access))
        }
        setLoading(false)
    }, [authTokens, loading])

    return (
        <AuthContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthContext.Provider>
    )

}*/


/*  csrf code
import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
const swal = require('sweetalert2');

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null
  );

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const loginUser = async (email, password) => {
    
    const cookies =document.cookie.split(';').reduce((acc,cookie)=>{
      const [name,value]=cookie.split('=');
      acc[name]=decodeURIComponent(value);
      return acc;
    },{});
    const headers = {
      'X-CSRFToken': cookies.csrftoken,
      'Content-type': 'application/json'
    };
    console.log(headers);
    const response = await fetch('/api/token/', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      console.log("Logged In");
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
      history.push('/homepage');
      swal.fire({
        title: "Login Successful",
        icon: "success",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
    })
    } else {
      swal.fire({
        title: 'Error',
        text: 'Password thappu da!',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };
  const registerUser = async (email, username, password, password2) => {
    
    const cookies =document.cookie.split(';').reduce((acc,cookie)=>{
      const [name,value]=cookie.split('=');
      acc[name]=decodeURIComponent(value);
      return acc;
    },{});
    const headers = {
      'X-CSRFToken': cookies.csrftoken,
      'Content-type': 'application/json'
    };
    console.log(headers);
    const response = await fetch("/api/register/", {
        method: "POST",
        headers,
        body: JSON.stringify({
            email, username, password, password2
        })
    })
    if(response.status === 201){
        history.push("/login")
        swal.fire({
            title: "Registration Successful, Login Now",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    } else {
        console.log(response.status);
        console.log("There was a server issue");
        swal.fire({
            title: "An Error Occured " + response.status,
            icon: "error",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }
}

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    history.push('/login');
    swal.fire({
      title: "You have been logged out...",
      icon: "success",
      toast: true,
      timer: 6000,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
  })
  };

  const updateToken = async () => {
    const response = await fetch('/api/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    const fourMinutes = 1000 * 60 * 4;

    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
    registerUser,
  };

  return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};*/

import { createContext, useState, useEffect } from 'react';
import jwt_decode from 'jwt-decode';
import { useHistory } from 'react-router-dom';
const swal = require('sweetalert2');

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null
  );

  const [user, setUser] = useState(() =>
    localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null
  );

  const [loading, setLoading] = useState(true);

  const history = useHistory();

  const loginUser = async (email, password) => {
    const response = await fetch('/api/token/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      console.log("Logged In");
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
      history.push('/homepage');
      swal.fire({
        title: "Login Successful",
        icon: "success",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
    })
    } else {
      swal.fire({
        title: 'Error',
        text: 'Password thappu da!',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };
  const registerUser = async (email, username, password, password2) => {
    const response = await fetch("/api/register/", {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            email, username, password, password2
        })
    })
    if(response.status === 201){
        history.push("/login")
        swal.fire({
            title: "Registration Successful, Login Now",
            icon: "success",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    } else {
        console.log(response.status);
        console.log("There was a server issue");
        swal.fire({
            title: "An Error Occured " + response.status,
            icon: "error",
            toast: true,
            timer: 6000,
            position: 'top-right',
            timerProgressBar: true,
            showConfirmButton: false,
        })
    }
}

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem('authTokens');
    history.push('/login');
    swal.fire({
      title: "You have been logged out...",
      icon: "success",
      toast: true,
      timer: 6000,
      position: 'top-right',
      timerProgressBar: true,
      showConfirmButton: false,
  })
  };

  const updateToken = async () => {
    const response = await fetch('/api/token/refresh/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refresh: authTokens?.refresh }),
    });

    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwt_decode(data.access));
      localStorage.setItem('authTokens', JSON.stringify(data));
    } else {
      logoutUser();
    }

    if (loading) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (loading) {
      updateToken();
    }

    const fourMinutes = 1000 * 60 * 4;

    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, loading]);

  const contextData = {
    user,
    authTokens,
    loginUser,
    logoutUser,
    registerUser,
  };

  return <AuthContext.Provider value={contextData}>{loading ? null : children}</AuthContext.Provider>;
};


/*Authcontext code trying to implement CSRF tokens

import { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
const swal = require('sweetalert2');

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState(null);
  const history = useHistory();

  const fetchCSRFToken = async () => {
    const response = await fetch('/api/csrf-token/');
    const data = await response.json();
    setCsrfToken(data.csrfToken);
  };

  const loginUser = async (email, password) => {
    await fetchCSRFToken();
    
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,  // Include CSRF token in the request header
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (response.status === 200) {
      console.log("Logged In");
      history.push('/homepage');
      swal.fire({
        title: "Login Successful",
        icon: "success",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      swal.fire({
        title: 'Error',
        text: 'Invalid credentials!',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  const logoutUser = () => {
    fetch('/api/logout/', {
      method: 'GET',
    }).then(() => {
      setCsrfToken(null);
      history.push('/login');
      swal.fire({
        title: "You have been logged out...",
        icon: "success",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    });
  };

  const contextData = {
    loginUser,
    logoutUser,
  };

  return <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>;
};*/


/*import { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
const swal = require('sweetalert2');

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [csrfToken, setCsrfToken] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const loginUser = async (email, password) => {
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': csrfToken,
      },
      body: JSON.stringify({
        email,
        password,
      }),
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Logged In");
      setUser(data.user);
      history.push('/homepage');
      swal.fire({
        title: "Login Successful",
        icon: "success",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      swal.fire({
        title: 'Error',
        text: 'Invalid credentials',
        icon: 'error',
        confirmButtonText: 'Okay',
      });
    }
  };

  const logoutUser = async () => {
    const response = await fetch('/api/logout/', {
      method: 'GET',
      credentials: 'include',
    });

    if (response.ok) {
      setUser(null);
      setCsrfToken(null);
      history.push('/login');
      swal.fire({
        title: "You have been logged out...",
        icon: "success",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false,
      });
    } else {
      console.log("Logout failed");
    }
  };

  useEffect(() => {
    const fetchCsrfToken = async () => {
      const response = await fetch('/api/get-csrf-token/', {
        method: 'GET',
        credentials: 'include',
      });
      const csrfToken = response.headers.get('X-CSRFToken');
      setCsrfToken(csrfToken);
      setLoading(false);
    };
    fetchCsrfToken();
  }, []);

  const contextData = {
    user,
    csrfToken,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};*/
