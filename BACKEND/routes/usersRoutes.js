const MyRepository = require('../MyRepository')
const express = require('express');
const router = express.Router();
const app = express();



router.get("/all", async (req, res) => {
    const x = await MyRepository.getall(req.params.all);
    res.send(x);
});
router.get("/:userName", async(req, res) => {
    const x = await MyRepository.getUserByUsername(req.params.userName)
    res.send(x);
})


router.post("/", async(req, res) => {
   
    let isAllOK = await MyRepository.addUser(req.body);
    if (isAllOK === true) {
        res.send("added new user");
    }
    else {
        res.send("unsuccessful adding new user");
    }
});

router.put("/:userName", async(req, res) => {
    let isAllOk = await MyRepository.updateUserByUsername(req.params.userName, req.body);
    if (isAllOk === true){
        res.send("successfully updated")
    }
    else{
        res.send("unsuccessfull update")
    }
    
    });

    router.delete("/:userName", async(req, res) => {
        let isAllOk = await MyRepository.deleteUserByUsername(req.params.userName);
        console.log("hello");
        if(isAllOk === true){
            res.send("deleted user");
        }
        else{
            res.send("user with username is not found")
        }
    
    });
    
    


module.exports = router;