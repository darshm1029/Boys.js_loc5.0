const express = require("express");
const router = express.Router();
const Company = require("../models/company.model");
const CompanyAuth = require("../middleware/companyAuth");
var mongoose = require("mongoose");
const Job = require("../models/job.model");
const Interview = require("../models/interview.model");


// router.post("/interview",CompanyAuth, async(req,res)=>{



// })

