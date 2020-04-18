import React, { Suspense } from 'react';
import { useTranslation, withTranslation, Trans } from 'react-i18next';
//import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

const Body = () => {
    console.log('render intern component');
    const name = 'Jaime';
    const { t, i18n } = useTranslation();//this with hooks
    return(
      <p>
        <Trans i18nKey="body" name={name}>
           Hello <strong>{{name}}</strong>, you have a message guy. <br/>
        </Trans>
      </p>
    );    
};

const Hello = () => {
  console.log('render hello');
  const { t, i18n } = useTranslation();//this with hooks

  return (
    <div>
      <p>{t('hello', { name: " Jaime "})}   .... { t('mipagina.hello') }</p>
      <br/>
      {t('hello', { name: " Jaime "})}
      <Body />
    </div>
  )
}


const IntThankYou = ({ t }) => {
  console.log('render thank you');
  
  return (
    <div>
      {t('thankyou')}  ...
    </div>
  )
}

const ThankYou = withTranslation()(IntThankYou);//This is with HOR

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()
    const language = i18n.language;
    
    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value);
        console.log('change language', event.target.value, t('Spanish'));
    }

    return (
        <div onChange={changeLanguage}>
          <input type="radio" value="en" name="language" defaultChecked={language === "en" ? true: null} /> {t('English')}
          <input type="radio" value="es" name="language" defaultChecked={language === "es" ? true: null}/> {t('Spanish')}
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