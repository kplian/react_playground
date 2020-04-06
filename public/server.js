const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');
var i18next = require("i18next");
var middleware = require("i18next-express-middleware");

i18next.use(middleware.LanguageDetector).init({
    preload: ["en", "es"]
  });

const app = express();
app.use(express.static(path.join(__dirname)));
app.use(
    middleware.handle(i18next, {
        ignoreRoutes: ["/foo"], // or function(req, res, options, i18next) { /* return true to ignore */ }
        removeLngFromUrl: false
    })
);


// in your request handler
app.get("myRoute", function(req, res) {
    var lng = req.language; // 'de-CH'
    var lngs = req.languages; // ['de-CH', 'de', 'en']
    req.i18n.changeLanguage("en"); // will not load that!!! assert it was preloaded
  
    var exists = req.i18n.exists("myKey");
    var translation = req.t("myKey");
  });
  

app.get('/ping', function (req, res) {
 return res.send('pong');
});

/*With this we return translations file */
/*app.get("/locales/:lng/:ns", function (req, res) {    
    res.sendFile(path.join(__dirname, 'locales', req.params.lng, req.params.ns));
});*/

app.get("/locales/:lng/:ns", middleware.getResourcesHandler(i18next));

/*With this we add translation to missing file*/
/*app.get("/locales/add/:lng/:ns", function (req, res) {    
    try {
        if (fs.existsSync(path.join(__dirname, 'locales', req.params.lng, req.params.ns))) {
          
        } else {
            console.log('not exists');
        }
        
    } catch(err) {
        console.error(err)
    }
    return res.send('pong');
});*/

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});



app.listen(process.env.PORT || 8080);