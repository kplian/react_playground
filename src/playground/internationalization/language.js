import React, { Suspense } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
//import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const Body = () => {
    console.log('render intern component');
    return(
        <p>Esto es una prueba</p>
    );    
};

const Hello = () => {
  console.log('render hello');
  const { t, i18n } = useTranslation();//this with hooks

  return (
    <div>
      {t('hello', { name: " Jaime "})}
      <Body />
    </div>
  )
}


const IntThankYou = ({ t }) => {
  console.log('render thank you');
  
  return (
    <div>
      {t('thankyou')}
    </div>
  )
}

const ThankYou = withTranslation()(IntThankYou);//This is with HOR

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        console.log('change language');
    }

    return (
        <div onChange={changeLanguage}>
        <input type="radio" value="en" name="language" defaultChecked /> English
        <input type="radio" value="es" name="language"/> Spanish
        </div>
    )
}

const Loader = () => (
  <div className="App">    
    <div>loading...</div>
  </div>
);
  
const TestApp = () => {
    return (
    <Suspense fallback={<Loader />}>
        <div>        
          <LanguageSelector />
          <Hello />
          <ThankYou />
               
      </div>
    </Suspense>
    )
}

export default TestApp