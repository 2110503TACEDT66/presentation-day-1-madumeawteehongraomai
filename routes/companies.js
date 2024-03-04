const express = require('express');
const router = express.Router();

router.route('/').get(getCompanies).post(createCompany);
router.route('/:id').get(getCompany).put(updateCompany).delete(deleteCompany);
const {protect} = require('../middleware/auth');

router.route('/').get(getCompanies).post(protect,createCompany);
router.route('/:id').get(getCompany).put(protect,updateCompany).delete(protect,deleteCompany);

module.exports=router;