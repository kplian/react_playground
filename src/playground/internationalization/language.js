import React, { Suspense } from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import i18n from './i18n';

const InternComp = () => {
    console.log('render intern component');
    return(
        <p>Esto es una prueba</p>
    );    
};

const Hello = () => {
  console.log('render thank hello');
  const { t, i18n } = useTranslation();//this with hooks

  return (
    <div>
      {t('hello.label')}
      <InternComp />
    </div>
  )
}


const IntThankYou = ({t}) => {
  console.log('render thank you');
  return (
    <div>
      {t('thankyou.label')}
    </div>
  )
}

const ThankYou = withTranslation()(IntThankYou);//This is with HOR

const LanguageSelector = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div onChange={changeLanguage}>
        <input type="radio" value="en" name="language" defaultChecked /> English
        <input type="radio" value="es" name="language"/> Spanish
        </div>
    )
}
  
const TestApp = () => {
    return (
    <Suspense fallback={null}>
        <div>        
          <LanguageSelector />
          <Hello />
          <ThankYou />        
      </div>
    </Suspense>
    )
}

export default TestApp