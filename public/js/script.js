// document.getElementById('patientForm').addEventListener('submit', async (event) => {
//     event.preventDefault();
//     const fullName = document.getElementById('fullName').value;
//     const age = document.getElementById('age').value;
//     const gender = document.getElementById('gender').value;
//     const bloodType = document.getElementById('bloodType').value;
//     const drugAllergies = document.getElementById('drugAllergies').value;
//     const foodAllergies = document.getElementById('foodAllergies').value;
//     const environmentalAllergies = document.getElementById('environmentalAllergies').value;
//     const diabetes = document.getElementById('diabetes').value;
//     const hypertension = document.getElementById('hypertension').value;
//     const asthma = document.getElementById('asthma').value;
//     const heartDisease = document.getElementById('heartDisease').value;
//     const kidneyDisease = document.getElementById('kidneyDisease').value;
//     const currentMedications = document.getElementById('currentMedications').value;
//     const medicationChanges = document.getElementById('medicationChanges').value;
//     const surgeries = document.getElementById('surgeries').value;
//     const illnesses = document.getElementById('illnesses').value;
//     const emergencyContactName = document.getElementById('emergencyContactName').value;
//     const emergencyContactRelationship = document.getElementById('emergencyContactRelationship').value;
//     const emergencyContactPhone = document.getElementById('emergencyContactPhone').value;
//     const tetanus = document.getElementById('tetanus').value;
//     const covid19 = document.getElementById('covid19').value;
//     const otherImmunizations = document.getElementById('otherImmunizations').value;
//     const smoker = document.getElementById('smoker').value;
//     const alcohol = document.getElementById('alcohol').value;
//     const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
//     const physicianName = document.getElementById('physicianName').value;
//     const physicianContact = document.getElementById('physicianContact').value;
//     const insuranceProvider = document.getElementById('insuranceProvider').value;
//     const insurancePolicy = document.getElementById('insurancePolicy').value;

//     const response = await fetch('/api/patients', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies,
//             diabetes, hypertension, asthma, heartDisease, kidneyDisease, currentMedications,
//             medicationChanges, surgeries, illnesses, emergencyContactName, emergencyContactRelationship,
//             emergencyContactPhone, tetanus, covid19, otherImmunizations, smoker, alcohol,
//             dietaryRestrictions, physicianName, physicianContact, insuranceProvider, insurancePolicy
//         })
//     });

//     const result = await response.json();
//     const messageElement = document.getElementById('message');
//     if (response.ok) {
//         messageElement.textContent = 'Patient data saved successfully!';
//         messageElement.classList.add('alert', 'alert-success');
//     } else {
//         messageElement.textContent = `Error: ${result.error}`;
//         messageElement.classList.add('alert', 'alert-danger');
//     }
// });

// document.getElementById('writeButton').addEventListener('click', async () => {
//     const fullName = document.getElementById('fullName').value;
//     const age = document.getElementById('age').value;
//     const gender = document.getElementById('gender').value;
//     const bloodType = document.getElementById('bloodType').value;
//     const drugAllergies = document.getElementById('drugAllergies').value;
//     const foodAllergies = document.getElementById('foodAllergies').value;
//     const environmentalAllergies = document.getElementById('environmentalAllergies').value;
//     const diabetes = document.getElementById('diabetes').value;
//     const hypertension = document.getElementById('hypertension').value;
//     const asthma = document.getElementById('asthma').value;
//     const heartDisease = document.getElementById('heartDisease').value;
//     const kidneyDisease = document.getElementById('kidneyDisease').value;
//     const currentMedications = document.getElementById('currentMedications').value;
//     const medicationChanges = document.getElementById('medicationChanges').value;
//     const surgeries = document.getElementById('surgeries').value;
//     const illnesses = document.getElementById('illnesses').value;
//     const emergencyContactName = document.getElementById('emergencyContactName').value;
//     const emergencyContactRelationship = document.getElementById('emergencyContactRelationship').value;
//     const emergencyContactPhone = document.getElementById('emergencyContactPhone').value;
//     const tetanus = document.getElementById('tetanus').value;
//     const covid19 = document.getElementById('covid19').value;
//     const otherImmunizations = document.getElementById('otherImmunizations').value;
//     const smoker = document.getElementById('smoker').value;
//     const alcohol = document.getElementById('alcohol').value;
//     const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
//     const physicianName = document.getElementById('physicianName').value;
//     const physicianContact = document.getElementById('physicianContact').value;
//     const insuranceProvider = document.getElementById('insuranceProvider').value;
//     const insurancePolicy = document.getElementById('insurancePolicy').value;

//     if (!fullName || !age || !gender || !bloodType || !emergencyContactName || !emergencyContactRelationship || !emergencyContactPhone || !physicianName || !physicianContact || !insuranceProvider || !insurancePolicy) {
//         alert('Please fill in all required fields.');
//         return;
//     }

//     const message = `
//         ${fullName || 'N/A'},${age || 'N/A'},${gender || 'N/A'},${bloodType || 'N/A'},
//         ${drugAllergies || 'N/A'},${foodAllergies || 'N/A'},${environmentalAllergies || 'N/A'},
//         ${diabetes || 'N/A'},${hypertension || 'N/A'},${asthma || 'N/A'},${heartDisease || 'N/A'},${kidneyDisease || 'N/A'},
//         ${currentMedications || 'N/A'},${medicationChanges || 'N/A'},
//         ${surgeries || 'N/A'},${illnesses || 'N/A'},
//         ${emergencyContactName || 'N/A'},${emergencyContactRelationship || 'N/A'},${emergencyContactPhone || 'N/A'},
//         ${tetanus || 'N/A'},${covid19 || 'N/A'},${otherImmunizations || 'N/A'},
//         ${smoker || 'N/A'},${alcohol || 'N/A'},${dietaryRestrictions || 'N/A'},
//         ${physicianName || 'N/A'},${physicianContact || 'N/A'},
//         ${insuranceProvider || 'N/A'},${insurancePolicy || 'N/A'}
//     `;

//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.write(message).then(() => {
//                 document.getElementById('message').textContent = 'Message written.';
//                 document.getElementById('message').classList.add('alert', 'alert-success');
//             }).catch(error => {
//                 document.getElementById('message').textContent = `Write failed: ${error}.`;
//                 document.getElementById('message').classList.add('alert', 'alert-danger');
//             });
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//             document.getElementById('message').classList.add('alert', 'alert-danger');
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//         document.getElementById('message').classList.add('alert', 'alert-danger');
//     }
// });

// document.getElementById('readButton').addEventListener('click', async () => {
//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.scan();
//             ndef.onreading = event => {
//                 const decoder = new TextDecoder();
//                 for (const record of event.message.records) {
//                     const data = decoder.decode(record.data);
//                     populateFormFields(data);
//                 }
//             };
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//             document.getElementById('message').classList.add('alert', 'alert-danger');
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//         document.getElementById('message').classList.add('alert', 'alert-danger');
//     }
// });

// document.getElementById('readNFCButton').addEventListener('click', async () => {
//     if ('NDEFReader' in window) {
//         try {
//             const ndef = new NDEFReader();
//             await ndef.scan();
//             ndef.onreading = event => {
//                 const decoder = new TextDecoder();
//                 for (const record of event.message.records) {
//                     const data = decoder.decode(record.data);
//                     const formattedData = formatNFCData(data);
//                     const newWindow = window.open();
//                     newWindow.document.write(`
//                         <html>
//                         <head>
//                             <title>NFC Tag Data</title>
//                             <style>
//                                 body {
//                                     font-family: Arial, sans-serif;
//                                     background-color: #f4f4f4;
//                                     margin: 0;
//                                     padding: 20px;
//                                 }
//                                 .container {
//                                     background-color: #fff;
//                                     padding: 20px;
//                                     border-radius: 8px;
//                                     box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//                                 }
//                                 h1 {
//                                     text-align: center;
//                                     color: #333;
//                                 }
//                                 p {
//                                     color: #333;
//                                 }
//                             </style>
//                         </head>
//                         <body>
//                             <div class="container">
//                                 <h1>NFC Tag Data</h1>
//                                 <pre>${formattedData}</pre>
//                             </div>
//                         </body>
//                         </html>
//                     `);
//                 }
//             };
//         } catch (error) {
//             document.getElementById('message').textContent = `Error: ${error}`;
//             document.getElementById('message').classList.add('alert', 'alert-danger');
//         }
//     } else {
//         document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
//         document.getElementById('message').classList.add('alert', 'alert-danger');
//     }
// });

// function formatNFCData(data) {
//     const sections = data.split(/\d+\./).filter(Boolean);
//     const sectionLabels = [
//         "Personal Information",
//         "Allergies",
//         "Chronic Conditions",
//         "Medications",
//         "Past Medical History",
//         "Emergency Contact",
//         "Immunization Records",
//         "Lifestyle Factors",
//         "Physician Details",
//         "Insurance Information"
//     ];
//     const keyLabels = {
//         "FN": "Full Name",
//         "A": "Age",
//         "G": "Gender",
//         "BT": "Blood Type",
//         "D": "Drug Allergies",
//         "F": "Food Allergies",
//         "E": "Environmental Allergies",
//         "D": "Diabetes",
//         "H": "Hypertension",
//         "A": "Asthma",
//         "HD": "Heart Disease",
//         "KD": "Kidney Disease",
//         "C": "Current Medications",
//         "CH": "Medication Changes",
//         "S": "Surgeries",
//         "I": "Illnesses",
//         "N": "Emergency Contact Name",
//         "R": "Emergency Contact Relationship",
//         "P": "Emergency Contact Phone",
//         "T": "Tetanus",
//         "C": "COVID-19",
//         "O": "Other Immunizations",
//         "S": "Smoker",
//         "A": "Alcohol",
//         "DR": "Dietary Restrictions",
//         "N": "Physician Name",
//         "C": "Physician Contact",
//         "P": "Insurance Provider",
//         "PN": "Insurance Policy"
//     };

//     let formattedData = "";
//     sections.forEach((section, index) => {
//         formattedData += `${sectionLabels[index]}:\n`;
//         const pairs = section.split('|');
//         pairs.forEach(pair => {
//             const [key, value] = pair.split(':');
//             formattedData += `  ${keyLabels[key] || key}: ${value || 'N/A'}\n`;
//         });
//         formattedData += '\n';
//     });

//     return formattedData;
// }

// function populateFormFields(data) {
//     // Clear all form fields before assigning new data
//     document.getElementById('fullName').value = '';
//     document.getElementById('age').value = '';
//     document.getElementById('gender').value = '';
//     document.getElementById('bloodType').value = '';
//     document.getElementById('drugAllergies').value = '';
//     document.getElementById('foodAllergies').value = '';
//     document.getElementById('environmentalAllergies').value = '';
//     document.getElementById('diabetes').value = '';
//     document.getElementById('hypertension').value = '';
//     document.getElementById('asthma').value = '';
//     document.getElementById('heartDisease').value = '';
//     document.getElementById('kidneyDisease').value = '';
//     document.getElementById('currentMedications').value = '';
//     document.getElementById('medicationChanges').value = '';
//     document.getElementById('surgeries').value = '';
//     document.getElementById('illnesses').value = '';
//     document.getElementById('emergencyContactName').value = '';
//     document.getElementById('emergencyContactRelationship').value = '';
//     document.getElementById('emergencyContactPhone').value = '';
//     document.getElementById('tetanus').value = '';
//     document.getElementById('covid19').value = '';
//     document.getElementById('otherImmunizations').value = '';
//     document.getElementById('smoker').value = '';
//     document.getElementById('alcohol').value = '';
//     document.getElementById('dietaryRestrictions').value = '';
//     document.getElementById('physicianName').value = '';
//     document.getElementById('physicianContact').value = '';
//     document.getElementById('insuranceProvider').value = '';
//     document.getElementById('insurancePolicy').value = '';

//     const fields = data.split('|');
//     fields.forEach(field => {
//         const [key, value] = field.split(':');
//         switch (key) {
//             case 'FN':
//                 document.getElementById('fullName').value = value || 'N/A';
//                 break;
//             case 'A':
//                 document.getElementById('age').value = value || 'N/A';
//                 break;
//             case 'G':
//                 document.getElementById('gender').value = value || 'N/A';
//                 break;
//             case 'BT':
//                 document.getElementById('bloodType').value = value || 'N/A';
//                 break;
//             case 'D':
//                 document.getElementById('drugAllergies').value = value || 'N/A';
//                 break;
//             case 'F':
//                 document.getElementById('foodAllergies').value = value || 'N/A';
//                 break;
//             case 'E':
//                 document.getElementById('environmentalAllergies').value = value || 'N/A';
//                 break;
//             case 'D':
//                 document.getElementById('diabetes').value = value || 'N/A';
//                 break;
//             case 'H':
//                 document.getElementById('hypertension').value = value || 'N/A';
//                 break;
//             case 'A':
//                 document.getElementById('asthma').value = value || 'N/A';
//                 break;
//             case 'HD':
//                 document.getElementById('heartDisease').value = value || 'N/A';
//                 break;
//             case 'KD':
//                 document.getElementById('kidneyDisease').value = value || 'N/A';
//                 break;
//             case 'C':
//                 document.getElementById('currentMedications').value = value || 'N/A';
//                 break;
//             case 'CH':
//                 document.getElementById('medicationChanges').value = value || 'N/A';
//                 break;
//             case 'S':
//                 document.getElementById('surgeries').value = value || 'N/A';
//                 break;
//             case 'I':
//                 document.getElementById('illnesses').value = value || 'N/A';
//                 break;
//             case 'N':
//                 document.getElementById('emergencyContactName').value = value || 'N/A';
//                 break;
//             case 'R':
//                 document.getElementById('emergencyContactRelationship').value = value || 'N/A';
//                 break;
//             case 'P':
//                 document.getElementById('emergencyContactPhone').value = value || 'N/A';
//                 break;
//             case 'T':
//                 document.getElementById('tetanus').value = value || 'N/A';
//                 break;
//             case 'C':
//                 document.getElementById('covid19').value = value || 'N/A';
//                 break;
//             case 'O':
//                 document.getElementById('otherImmunizations').value = value || 'N/A';
//                 break;
//             case 'S':
//                 document.getElementById('smoker').value = value || 'N/A';
//                 break;
//             case 'A':
//                 document.getElementById('alcohol').value = value || 'N/A';
//                 break;
//             case 'DR':
//                 document.getElementById('dietaryRestrictions').value = value || 'N/A';
//                 break;
//             case 'N':
//                 document.getElementById('physicianName').value = value || 'N/A';
//                 break;
//             case 'C':
//                 document.getElementById('physicianContact').value = value || 'N/A';
//                 break;
//             case 'P':
//                 document.getElementById('insuranceProvider').value = value || 'N/A';
//                 break;
//             case 'PN':
//                 document.getElementById('insurancePolicy').value = value || 'N/A';
//                 break;
//         }
//     });
// }


document.getElementById('patientForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bloodType = document.getElementById('bloodType').value;
    const drugAllergies = document.getElementById('drugAllergies').value;
    const foodAllergies = document.getElementById('foodAllergies').value;
    const environmentalAllergies = document.getElementById('environmentalAllergies').value;
    const diabetes = document.getElementById('diabetes').value;
    const hypertension = document.getElementById('hypertension').value;
    const asthma = document.getElementById('asthma').value;
    const heartDisease = document.getElementById('heartDisease').value;
    const kidneyDisease = document.getElementById('kidneyDisease').value;
    const currentMedications = document.getElementById('currentMedications').value;
    const medicationChanges = document.getElementById('medicationChanges').value;
    const surgeries = document.getElementById('surgeries').value;
    const illnesses = document.getElementById('illnesses').value;
    const emergencyContactName = document.getElementById('emergencyContactName').value;
    const emergencyContactRelationship = document.getElementById('emergencyContactRelationship').value;
    const emergencyContactPhone = document.getElementById('emergencyContactPhone').value;
    const tetanus = document.getElementById('tetanus').value;
    const covid19 = document.getElementById('covid19').value;
    const otherImmunizations = document.getElementById('otherImmunizations').value;
    const smoker = document.getElementById('smoker').value;
    const alcohol = document.getElementById('alcohol').value;
    const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
    const physicianName = document.getElementById('physicianName').value;
    const physicianContact = document.getElementById('physicianContact').value;
    const insuranceProvider = document.getElementById('insuranceProvider').value;
    const insurancePolicy = document.getElementById('insurancePolicy').value;

    const response = await fetch('/api/patients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies,
            diabetes, hypertension, asthma, heartDisease, kidneyDisease, currentMedications,
            medicationChanges, surgeries, illnesses, emergencyContactName, emergencyContactRelationship,
            emergencyContactPhone, tetanus, covid19, otherImmunizations, smoker, alcohol,
            dietaryRestrictions, physicianName, physicianContact, insuranceProvider, insurancePolicy
        })
    });

    const result = await response.json();
    const messageElement = document.getElementById('message');
    if (response.ok) {
        messageElement.textContent = 'Patient data saved successfully!';
        messageElement.classList.add('alert', 'alert-success');
    } else {
        messageElement.textContent = `Error: ${result.error}`;
        messageElement.classList.add('alert', 'alert-danger');
    }
});

document.getElementById('writeButton').addEventListener('click', async () => {
    const fullName = document.getElementById('fullName').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const bloodType = document.getElementById('bloodType').value;
    const drugAllergies = document.getElementById('drugAllergies').value;
    const foodAllergies = document.getElementById('foodAllergies').value;
    const environmentalAllergies = document.getElementById('environmentalAllergies').value;
    const diabetes = document.getElementById('diabetes').value;
    const hypertension = document.getElementById('hypertension').value;
    const asthma = document.getElementById('asthma').value;
    const heartDisease = document.getElementById('heartDisease').value;
    const kidneyDisease = document.getElementById('kidneyDisease').value;
    const currentMedications = document.getElementById('currentMedications').value;
    const medicationChanges = document.getElementById('medicationChanges').value;
    const surgeries = document.getElementById('surgeries').value;
    const illnesses = document.getElementById('illnesses').value;
    const emergencyContactName = document.getElementById('emergencyContactName').value;
    const emergencyContactRelationship = document.getElementById('emergencyContactRelationship').value;
    const emergencyContactPhone = document.getElementById('emergencyContactPhone').value;
    const tetanus = document.getElementById('tetanus').value;
    const covid19 = document.getElementById('covid19').value;
    const otherImmunizations = document.getElementById('otherImmunizations').value;
    const smoker = document.getElementById('smoker').value;
    const alcohol = document.getElementById('alcohol').value;
    const dietaryRestrictions = document.getElementById('dietaryRestrictions').value;
    const physicianName = document.getElementById('physicianName').value;
    const physicianContact = document.getElementById('physicianContact').value;
    const insuranceProvider = document.getElementById('insuranceProvider').value;
    const insurancePolicy = document.getElementById('insurancePolicy').value;

    // Check if all required fields are filled
    if (!fullName || !age || !gender || !bloodType || !emergencyContactName || !emergencyContactRelationship || !emergencyContactPhone || !physicianName || !physicianContact || !insuranceProvider || !insurancePolicy) {
        alert('Please fill in all required fields.');
        return;
    }

    const message = `
        ${fullName || 'N/A'},${age || 'N/A'},${gender || 'N/A'},${bloodType || 'N/A'},
        ${drugAllergies || 'N/A'},${foodAllergies || 'N/A'},${environmentalAllergies || 'N/A'},
        ${diabetes || 'N/A'},${hypertension || 'N/A'},${asthma || 'N/A'},${heartDisease || 'N/A'},${kidneyDisease || 'N/A'},
        ${currentMedications || 'N/A'},${medicationChanges || 'N/A'},
        ${surgeries || 'N/A'},${illnesses || 'N/A'},
        ${emergencyContactName || 'N/A'},${emergencyContactRelationship || 'N/A'},${emergencyContactPhone || 'N/A'},
        ${tetanus || 'N/A'},${covid19 || 'N/A'},${otherImmunizations || 'N/A'},
        ${smoker || 'N/A'},${alcohol || 'N/A'},${dietaryRestrictions || 'N/A'},
        ${physicianName || 'N/A'},${physicianContact || 'N/A'},
        ${insuranceProvider || 'N/A'},${insurancePolicy || 'N/A'}
    `;

    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();
            ndef.onreading = async event => {
                const decoder = new TextDecoder();
                let existingData = '';
                for (const record of event.message.records) {
                    existingData += decoder.decode(record.data);
                }

                if (existingData) {
                    const overwrite = confirm('Do you want to overwrite Data on NFC tag?');
                    if (!overwrite) {
                        return;
                    }
                }

                await ndef.write(message).then(() => {
                    document.getElementById('message').textContent = 'Message written.';
                    document.getElementById('message').classList.add('alert', 'alert-success');
                }).catch(error => {
                    document.getElementById('message').textContent = `Write failed: ${error}.`;
                    document.getElementById('message').classList.add('alert', 'alert-danger');
                });
            };
        } catch (error) {
            document.getElementById('message').textContent = `Error: ${error}`;
            document.getElementById('message').classList.add('alert', 'alert-danger');
        }
    } else {
        document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
        document.getElementById('message').classList.add('alert', 'alert-danger');
    }
});

document.getElementById('readButton').addEventListener('click', async () => {
    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();
            ndef.onreading = event => {
                const decoder = new TextDecoder();
                let nfcData = '';
                for (const record of event.message.records) {
                    nfcData += decoder.decode(record.data);
                }
                populateFormFields(nfcData);
            };
        } catch (error) {
            document.getElementById('message').textContent = `Error: ${error}`;
            document.getElementById('message').classList.add('alert', 'alert-danger');
        }
    } else {
        document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
        document.getElementById('message').classList.add('alert', 'alert-danger');
    }
});

document.getElementById('readNFCButton').addEventListener('click', async () => {
    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();
            ndef.onreading = event => {
                const decoder = new TextDecoder();
                let nfcData = '';
                for (const record of event.message.records) {
                    nfcData += decoder.decode(record.data);
                }
                displayNFCData(nfcData);
            };
        } catch (error) {
            document.getElementById('message').textContent = `Error: ${error}`;
            document.getElementById('message').classList.add('alert', 'alert-danger');
        }
    } else {
        document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
        document.getElementById('message').classList.add('alert', 'alert-danger');
    }
});

function populateFormFields(data) {
    const fieldIds = [
        "fullName", "age", "gender", "bloodType",
        "drugAllergies", "foodAllergies", "environmentalAllergies",
        "diabetes", "hypertension", "asthma", "heartDisease", "kidneyDisease",
        "currentMedications", "medicationChanges",
        "surgeries", "illnesses",
        "emergencyContactName", "emergencyContactRelationship", "emergencyContactPhone",
        "tetanus", "covid19", "otherImmunizations",
        "smoker", "alcohol", "dietaryRestrictions",
        "physicianName", "physicianContact",
        "insuranceProvider", "insurancePolicy"
    ];

    // Clear all form fields before assigning new data
    fieldIds.forEach(id => {
        document.getElementById(id).value = '';
    });

    const values = data.split(',');
    values.forEach((value, index) => {
        if (fieldIds[index]) {
            document.getElementById(fieldIds[index]).value = value.trim() || 'N/A';
        }
    });
}

function displayNFCData(data) {
    const fieldLabels = [
        "Full Name", "Age", "Gender", "Blood Type",
        "Drug Allergies", "Food Allergies", "Environmental Allergies",
        "Diabetes", "Hypertension", "Asthma", "Heart Disease", "Kidney Disease",
        "Current Medications", "Medication Changes",
        "Surgeries", "Illnesses",
        "Emergency Contact Name", "Emergency Contact Relationship", "Emergency Contact Phone",
        "Tetanus", "COVID-19", "Other Immunizations",
        "Smoker", "Alcohol", "Dietary Restrictions",
        "Physician Name", "Physician Contact",
        "Insurance Provider", "Insurance Policy"
    ];

    const values = data.split(',');
    let content = '<html><head><title>NFC Data</title><style>';
    content += 'body { font-family: Arial, sans-serif; margin: 20px; }';
    content += 'h1 { text-align: center; }';
    content += 'table { width: 100%; border-collapse: collapse; margin-top: 20px; }';
    content += 'th, td { padding: 10px; border: 1px solid #ddd; text-align: left; }';
    content += 'th { background-color: #f2f2f2; }';
    content += '</style></head><body>';
    content += '<h1>NFC Tag Data</h1>';
    content += '<table>';
    content += '<tr><th>Field</th><th>Value</th></tr>';

    values.forEach((value, index) => {
        content += `<tr><td>${fieldLabels[index]}</td><td>${value.trim() || 'N/A'}</td></tr>`;
    });

    content += '</table></body></html>';

    const newWindow = window.open();
    newWindow.document.write(content);
    newWindow.document.close();
}