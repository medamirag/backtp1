const { DeletePatientByIDController, UpdatePatientByIDController, getAllPatientsController, getPatientByIDController, createPatientController } = require('../controllers/patientController');
const patientRoute = require('express').Router();
patientRoute.get('/', getAllPatientsController).get('/:id', getPatientByIDController).post('/', createPatientController).delete('/:id', DeletePatientByIDController).patch('/:id', UpdatePatientByIDController)
module.exports=patientRoute