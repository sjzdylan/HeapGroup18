const express = require('express')
const path = require('path')
const router = express.Router();

const rootdir = require('../utils/path');



router.use('/main',(req,res,next)=>{
    console.log('currently in the main page')
    res.sendFile(path.join(rootdir,'backend','view','main.html'));
});

router.use('/login',(req,res,next)=>{
    console.log('currently in the login page')
    res.sendFile(path.join(rootdir,'backend','view','login.html'));
});
router.use('/random',(req,res,next)=>{
    console.log('currently in a random page')
    res.sendFile(path.join(rootdir,'backend','view','random.html'));
});

router.use((req,res,next)=>{
    let url = req.url;
    if (url === '/'){
        res.redirect('/main');
    }else{
        console.log('what you doing here');
        res.status(404).send("<h1>Biatch why you try to search for some weird webpage</h1>");
    }
    
    
})



module.exports = router;