import React from 'react';
import { GoogleLogin } from 'react-google-login-component';


function responseGoogle (googleUser) {
    var id_token = googleUser.getAuthResponse().id_token;
    var googleId = googleUser.getId();
    
    console.log({ googleId });
    console.log({accessToken: id_token});
    //anything else you want to do(save to localStorage)...
}

const  myGoogleLogin = () => {
    return ( <div>
        <GoogleLogin socialId="432978383853-mb7fe7mtjecintms1lj9o7vml1l86erf.apps.googleusercontent.com"
                     className="google-login"
                     scope="profile"
                     prompt="select_account"
                     fetchBasicProfile={false}
                     responseHandler={responseGoogle}
                     buttonText="Login With Google"/>
      </div>);
};


export default myGoogleLogin;