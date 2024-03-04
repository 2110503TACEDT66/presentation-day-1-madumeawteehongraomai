const express = require('express');
const router = express.Router();

const {protect} = require('../middleware/auth');
const {protect,authorize} = require('../middleware/auth');

router.route('/').get(getCompanies).post(protect,createCompany);
router.route('/:id').get(getCompany).put(protect,updateCompany).delete(protect,deleteCompany);
router.route('/').get(getCompanies).post(protect,authorize('admin'),createCompany);
router.route('/:id').get(getCompany).put(protect,authorize('admin'),updateCompany).delete(protect,authorize('admin'),deleteCompany);


router.route('/').get(getCompanies).post(createCompany);
router.route('/:id').get(getCompany).put(updateCompany).delete(deleteCompany);
const {protect} = require('../middleware/auth');

router.route('/').get(getCompanies).post(protect,createCompany);
router.route('/:id').get(getCompany).put(protect,updateCompany).delete(protect,deleteCompany);

module.exports=router;