/*
    There are several posibilities when managing dates and timezones:
    1.  Date-time depends on backend. Backend saves in backend timezone, so when we show that data,
        we should chnage to client timezone. Examples: fecha reg and workflow dates.
    2.  Only date field. Some times client selects only a date. This date should keep the same in
        backend and frontend. Examples: fecha de solicitud de compra
    3.  Date time depends on business. Date-time depends on business logic, so this logic should be managed in backend and
        frontend only give some helpers functions in case there are some convertions to do in frontend as well.
        Examples: airbnb (depends on host timezone), diamond (dependes on hotel timezone), airlines tkts(depends on airport timezones)

    We should only allow atomatic convertions in first case, to do this date time fields which require timezone convertions will have a property
    convertoToClientTimezone: true (which is by defult false)

    Try to use only dates if possible
*/
const config = {
    date: {
        backendGetFormat: 'YYYY-MM-DD', //date format we get from backend
        backendSaveFormat: 'Y-m-d', //date format we need to send to backend
        defaultRenderFormat: 'DD-MM-YYYY' //this is format to render dates by default
    },
    dateTime: {
        backendGetFormat: 'YYYY-MM-DD H:mm:ss:S', //date format we get from backend
        backendSaveFormat: 'YYYY-MM-DD H:mm:ss:S', //date format we need to send to backend
        backendTimezone: 'America/Los_Angeles',
        defaultRenderFormat: 'DD-MM-YYYY H:mm:ss' //this is format to render dates by default
    }
};

export default config;
