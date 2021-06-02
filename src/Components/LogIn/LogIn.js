import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../LogInManager/firebase.config';
import { AllContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import Header from '../Header/Header';

// import fbIcon from '../../Icon/fb.png';
// import googleIcon from '../../Icon/google.png';



const LogIn = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const {user, vehicles} = useContext(AllContext);
  const [loggedInUser, setLoggedInUser] = user;
  const [vehicle, setVehicle] = vehicles;
  const [newUser, setNewUser] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();



  const handleGoogleSignIn = () => {
    firebase.auth()
      .signInWithPopup(googleAuthProvider)
      .then((result) => {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: 'true',
          name: displayName,
          email: email
        };
        setLoggedInUser(signedInUser);
        history.replace(from);

      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage)
      });
  }



  const handleFacebookSignin = () => {

    firebase.auth().signInWithPopup(fbProvider)
      .then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = {
          isSignedIn: 'true',
          name: displayName,
          email: email
        };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  }

  const handleBlur = (e) => {
    let isFieldValid = true;
    if (e.target.name === 'email') {
      isFieldValid =/\S+@\S+\.\S+/.test(e.target.value);

    }
    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/.test(e.target.value);
      isFieldValid = (isPasswordValid && passwordHasNumber)
    }
    if (isFieldValid) {
      const newUserInfo = { ...loggedInUser };
      newUserInfo[e.target.name] = e.target.value;
      setLoggedInUser(newUserInfo);

    }
  }


  const handleSubmit = (e) => {
    if (newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then(res => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = " ";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserName(loggedInUser.name);
          const signedInUser = {
            isSignedIn: 'true',
            name: res.user.displayName,
            email: res.user.email
          };
          setLoggedInUser(signedInUser);
          history.replace(from);

        })
        .catch(error => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }

    if (!newUser && loggedInUser.email && loggedInUser.password) {
      firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
        .then(res => {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = " ";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          updateUserName(loggedInUser.name);
          const signedInUser = {
            isSignedIn: 'true',
            name: res.user.displayName,
            email: res.user.email
          };
          setLoggedInUser(signedInUser);
          history.replace(from);

        })
        .catch(function (error) {
          const newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }

    e.preventDefault();
  }

  const updateUserName = name => {
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {

    })
      .catch(function (error) {

      });
  }


  return (
    <div className="loginPageBackgroundImage">
      <Header/>
      <div className="container">
        <div className="row mt-3 justify-content-center">
          <div className="col-md-6 border border-secondary">


            <div>
              <h1>Login</h1>
              <br />


              <form onSubmit={handleSubmit}>
                {newUser && <input type="name" name="name" className="form-control" onBlur={handleBlur} placeholder="Your name" required />}
                <br />
                <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="Your email" required />
                <br />
                <input type="password" name="password" className="form-control" onBlur={handleBlur} placeholder="password" required />
                <div class="form-text" style={{color: 'white'}}>Password length more than 8 and must have ( A UPPER CASE, a lower case , a number ) </div>
                <br />
                <div className="row d-flex justify-content-around text-center">
                  <div className="col-6">
                    <input type="checkbox" value="remember" style={{cursor:'pointer'}}/>
                    <label>Remember Me</label>
                  </div>
                  <div className="col-6">
                    <span className="text-right cursor-pointer">Forgot Password</span>
                  </div>
                </div>
                <br />
                <input type="submit" className="btn btn-outline-info" value={newUser ? "Sign up" : "Sign In"} />
                <p style={{cursor:'pointer'}} className="text-center">Don't have an account?<span onClick={() => setNewUser(!newUser)} style={{ color: "#00FF00" }}>Create a new account</span></p>
              </form>


              {loggedInUser.length === 0 && "loading......."}
              <p style={{ color: 'red', textAlign: 'center' }}>{loggedInUser.error}</p>
              {
                loggedInUser.success && <p style={{ color: 'green' }}>User {newUser ? "created" : "logged in"} successfully</p>
              }
            </div>


            <p className="text-center">or</p>
            <div className="row m-2 border border-secondary rounded-pill" onClick={handleGoogleSignIn} style={{cursor:'pointer'}}>
              <div className="col-2">
                <img src="https://i.ibb.co/xC2HwBj/pngegg.png" style={{width:"40px", height:"40px"}} className="imageSizing cursor-pointer" alt="" />
              </div>
              <div className="col-8 text-center cursor-pointer">
                <p >Continue with Google</p>
              </div>
            </div>


            <div className="row m-2 border border-secondary rounded-pill" onClick={handleFacebookSignin} style={{cursor:'pointer'}}>
              <div className="col-2">
                <img src="https://i.ibb.co/w0P3v7h/pngegg-1.png" style={{width:"40px", height:"40px"}} className="imageSizing" alt="" />
              </div>
              <div className="col-8 text-center cursor-pointer">
                <p>Continue with Facebook</p>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;