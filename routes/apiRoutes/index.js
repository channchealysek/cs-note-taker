const router = require('express').Router();
const dataRoutes = require('../apiRoutes/dataRoutes');

router.use(dataRoutes);

module.exports = router;