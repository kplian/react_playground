import React from 'react';
import config from './config'; 
import moment from 'moment-timezone';

const TestApp = () => {
    const serverDate = '2019-08-21 12:56:33:123';
    const momentObj = moment.tz(serverDate, config.dateTime.backendGetFormat, config.dateTime.backendTimezone);    
    const local = moment(momentObj).local().format('DD/MM/YYYY HH:mm:ss');
    const number = 154352345.68;
    return (
    
        <div>        
          <p>Server Date</p>
          <p>{serverDate}</p>
          <p>Server Timezone</p>
          <p>{config.dateTime.backendTimezone}</p>
          <p>Client Date</p>
          <p>{local}</p>
          <p>Client Timezone</p>
          <p>{moment.tz.guess()}</p>
          <p>Number</p>
          <p>{number}</p>
          <p>Local Number</p>
          <p>{number.toLocaleString()}</p>
               
      </div>
    
    )
}

export default TestApp