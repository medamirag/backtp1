const { DeletePatientByIDService, UpdatePatientByIDService, getPatientByIDService, getPatientsService, createPatientService } = require('../services/patientService');
const wrapper= require('../shared/wrapper')
const createPatientController = async (req, res) => {
    const {
        nom, prenom, age
    } = req.body
    await createPatientService(nom, prenom, age)
    res.status(201).send("Created");
}
const getPatientByIDController = async (req, res) => {

    const patient = await getPatientByIDService(req.params.id)
    res.status(200).send(patient);
}

const getAllPatientsController = async (req, res) => {

    const patients = await getPatientsService()

    res.status(200).send(patients);
}

const DeletePatientByIDController = async (req, res) => {

    await DeletePatientByIDService(req.params.id)

    res.status(200).send("deleted");
}
const UpdatePatientByIDController = async (req, res) => {
    const {
        body: { nom, prenom, age },
        params: { id: idpatient }
    }
        = req
    // const {
    //     nom,prenom,age
    // } = req.body
        await UpdatePatientByIDService(idpatient, nom, prenom, age)
        res.status(201).send("Updated");
    
}

module.exports = { DeletePatientByIDController, UpdatePatientByIDController, getAllPatientsController, getPatientByIDController, createPatientController }
