const express = require('express');
const router = express.Router();
const {getCompanies, getCompany, createCompany, updateCompany, deleteCompany} = require('../controllers/companies');

//Include other resource routers
const interviewRouter=require('./interviews');
const jobpositionRouter=require('./jobposition');

const {protect,authorize} = require('../middleware/auth');

//Re-route into other resource routers
router.use('/:companyId/interviews/', interviewRouter);
router.use('/:companyId/positions/', jobpositionRouter)

router.route('/').get(getCompanies).post(protect,authorize('admin'),createCompany);
router.route('/:id').get(getCompany).put(protect,authorize('admin'),updateCompany).delete(protect,authorize('admin'),deleteCompany);


module.exports=router;