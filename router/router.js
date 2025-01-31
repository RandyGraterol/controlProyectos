const express = require('express');

const router = express.Router();
const {index,otro,contactoCorreo} = require('../controllers/controllers.js'); 

router.get('/',index);
router.get('/otro',otro);

router.post('/contactoCorreo',contactoCorreo);

module.exports = router;