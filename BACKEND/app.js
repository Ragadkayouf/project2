const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql')


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus: 200}));
app.use(express.static('public'));

app.use('/users', require('./routes/usersRoutes'));


var server = app.listen(5789, '127.0.0.1', function (){
    var host = server.address().address
    var port = server.address().port
    console.log("My app is listening at http://%s:%s", host, port)
});












// const cookieparser = require('cookie-parser');

// app.use(cookieparser('myseceret'));
// app.get('/hello-cookie', function (req, res) {

//     const cookieConfig1 = {
      
//         httpOnly: true,
  
//         maxAge: (24 * 60 * 60 + 10) * 1000,
//         signed: true,
      
//         path: '/',
       
//     };
//     res.cookie('mycookiesigned', 'val3', cookieConfig1);
   
    
   
//     const cookieConfig2 = {
     
//         httpOnly: true,
     
//         maxAge: (24 * 60 * 60 + 10) * 1000,
//         signed: false,
        
//         path: '/',
        
//     };
//     res.cookie('mycookie-NOT-signed', 'val3', cookieConfig2);
   

//     res.end('hello');
// });


// app.get('/check-the-secret-cookie', (req, res) => {
//     const str = cookieparser.signedCookie('mycookiesigned', 'myseceret');
//     console.log('Signed Cookie: ', req.signedCookies.mycookiesigned);
//     console.log(str);
//     res.send();
// });
