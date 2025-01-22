const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Database setup


const db = new sqlite3.Database('./database2.sqlite', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        db.serialize(() => {
            db.run('PRAGMA journal_mode = WAL;'); // Use Write-Ahead Logging mode
            db.run(`CREATE TABLE IF NOT EXISTS patients (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                fullName TEXT,
                age INTEGER,
                gender TEXT,
                bloodType TEXT,
                drugAllergies TEXT,
                foodAllergies TEXT,
                environmentalAllergies TEXT,
                diabetes TEXT,
                hypertension TEXT,
                asthma TEXT,
                heartDisease TEXT,
                kidneyDisease TEXT,
                currentMedications TEXT,
                medicationChanges TEXT,
                surgeries TEXT,
                illnesses TEXT,
                emergencyContactName TEXT,
                emergencyContactRelationship TEXT,
                emergencyContactPhone TEXT,
                tetanus TEXT,
                covid19 TEXT,
                otherImmunizations TEXT,
                smoker TEXT,
                alcohol TEXT,
                dietaryRestrictions TEXT,
                physicianName TEXT,
                physicianContact TEXT,
                insuranceProvider TEXT,
                insurancePolicy TEXT,
                PatientID TEXT
            )`, (err) => {
                if (err) {
                    console.error('Error creating table:', err.message);
                } else {
                    console.log('Table created or already exists.');
                }
            });
        });
    }
});

// Routes
// app.post('/api/patients', (req, res) => {
//     const patient = req.body;
//     const sql = `INSERT INTO patients (fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies, diabetes, hypertension, asthma, heartDisease, kidneyDisease, currentMedications, medicationChanges, surgeries, illnesses, emergencyContactName, emergencyContactRelationship, emergencyContactPhone, tetanus, covid19, otherImmunizations, smoker, alcohol, dietaryRestrictions, physicianName, physicianContact, insuranceProvider, insurancePolicy) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     const params = [
//         patient.fullName, patient.age, patient.gender, patient.bloodType,
//         patient.drugAllergies, patient.foodAllergies, patient.environmentalAllergies,
//         patient.diabetes, patient.hypertension, patient.asthma, patient.heartDisease,
//         patient.kidneyDisease, patient.currentMedications, patient.medicationChanges,
//         patient.surgeries, patient.illnesses, patient.emergencyContactName,
//         patient.emergencyContactRelationship, patient.emergencyContactPhone,
//         patient.tetanus, patient.covid19, patient.otherImmunizations,
//         patient.smoker, patient.alcohol, patient.dietaryRestrictions,
//         patient.physicianName, patient.physicianContact, patient.insuranceProvider,
//         patient.insurancePolicy
//     ];


app.post('/api/patients', (req, res) => {
    const {
        fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies,
        diabetes, hypertension, asthma, heartDisease, kidneyDisease, currentMedications,
        medicationChanges, surgeries, illnesses, emergencyContactName, emergencyContactRelationship,
        emergencyContactPhone, tetanus, covid19, otherImmunizations, smoker, alcohol,
        dietaryRestrictions, physicianName, physicianContact, insuranceProvider, insurancePolicy
    } = req.body;

    const sql = `INSERT INTO patients (
        fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies,
        diabetes, hypertension, asthma, heartDisease, kidneyDisease, currentMedications,
        medicationChanges, surgeries, illnesses, emergencyContactName, emergencyContactRelationship,
        emergencyContactPhone, tetanus, covid19, otherImmunizations, smoker, alcohol,
        dietaryRestrictions, physicianName, physicianContact, insuranceProvider, insurancePolicy
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    const params = [
        fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies,
        diabetes, hypertension, asthma, heartDisease, kidneyDisease, currentMedications,
        medicationChanges, surgeries, illnesses, emergencyContactName, emergencyContactRelationship,
        emergencyContactPhone, tetanus, covid19, otherImmunizations, smoker, alcohol,
        dietaryRestrictions, physicianName, physicianContact, insuranceProvider, insurancePolicy
    ];
    
    db.run(sql, params, function(err) {
        if (err) {
            console.error('Error inserting data:', err.message);
            return res.status(400).json({ error: err.message });
        }
        console.log('Data inserted successfully with ID:', this.lastID);
        res.status(201).json({ id: this.lastID });
    });
});

app.put('/api/patients/:id/patientID', (req, res) => {
    const { patientID } = req.body;
    const sql = `UPDATE patients SET PatientID = ? WHERE id = ?`;
    const params = [patientID, req.params.id];

    db.run(sql, params, function(err) {
        if (err) {
            console.error('Error updating PatientID:', err.message);
            return res.status(400).json({ error: err.message });
        }
        console.log('PatientID updated successfully for ID:', req.params.id);
        res.status(200).json({ message: 'PatientID updated successfully' });
    });
});

app.get('/api/patients/patientID/:patientID', (req, res) => {
    const sql = `SELECT * FROM patients WHERE PatientID = ?`;
    const params = [req.params.patientID];
    db.get(sql, params, (err, row) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        if (!row) {
            res.status(404).json({ error: 'Patient not found' });
            return;
        }
        res.json(row);
    });
});



// Start server
// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

// new server

// filepath: /f:/amit/html/pat3/hospital-management-app/server.js
// app.listen(PORT, '192.168.0.104', () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });


// Read SSL certificate and key
const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};

// Start HTTPS server
https.createServer(options, app).listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on https://localhost:${PORT}`);
}); 