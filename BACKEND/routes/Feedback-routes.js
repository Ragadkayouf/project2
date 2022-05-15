const express = require('express');
const router = express.Router();
const cors = require('cors');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
const isDevelopment = true;


if (isDevelopment){
    router.use(cors({ origin: "http://localhost:3000", optionsSuccessStatus:200}));

}
function nothing(){

}



router.delete("/:txtAreaMsg", isDevelopment ? cors() : nothing(), (req, res) => {
    // throw new error;
    console.log( req.params.txtAreaMsg.text);
    
})


module.exports = router;

