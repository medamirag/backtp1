const {db,cnx} = require('../shared/connectdb');


const createPatientService = (nom, prenom, age) => {
    let qr = `insert into patient(nom,prenom,age)values('${nom}','${prenom}',${age})`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}
//getAllPatients
const getPatientsService = () => {
    let qr = `select * from patient`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}
//getByID
const getPatientByIDService = (id) => {
    let qr = `select * from patient where patient.id=${id}`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}

//deletePatientByID
const DeletePatientByIDService = (id) => {
    let qr = `delete from patient where patient.id=${id}`
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}
//UpdatePatient
const UpdatePatientByIDService = (id, nom, prenom, age) => {
    let qr = `update patient set 
    patient.nom='${nom}',
    patient.prenom='${prenom}',
    patient.age=${age}
    where patient.id = ${id}
    `
    return new Promise((resolve, reject) => {
        cnx.query(qr, (err, result) => {
            err ? reject(err) : resolve(result);

        });
    })
}

module.exports={DeletePatientByIDService,UpdatePatientByIDService,getPatientByIDService,getPatientsService,createPatientService}