import React from 'react';
import FacebookLogin from 'react-facebook-login';
import client from 'pxp-client';

client.init(
  'dev.pxp.citas.kplian.com',
  'lib/rest',
  'cors',
  '80',
  'http',
  '2',
);

const responseFacebook = (response) => {
  console.log(response);
  client.oauthLogin(response.email, response.accessToken, 'facebook').then((data) => {
    console.log(data);
  });
};

const myLogin = () => {
  return (<FacebookLogin
    appId="1146525882368432"
    autoLoad={true}
    fields="name,email,picture"
    callback={responseFacebook}
    cssClass="my-facebook-button-class"
    icon="fa-facebook"
  />);
};


export default myLogin;