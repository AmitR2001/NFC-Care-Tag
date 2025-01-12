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

    // const patientID = await generatePatientID(fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies, diabetes, hypertension, asthma, heartDisease, kidneyDisease, insuranceProvider, insurancePolicy);

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
    // if (response.ok) {
    //     messageElement.textContent = `Patient data saved successfully! Patient ID: ${patientID}`;
    //     messageElement.classList.add('alert', 'alert-success');
    // } 
    if (response.ok) {
        const patientID = await generatePatientID(fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies, diabetes, hypertension, asthma, heartDisease, kidneyDisease, insuranceProvider, insurancePolicy);
        setTimeout(async () => {
            await fetch(`/api/patients/${result.id}/patientID`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ patientID })
            });
            messageElement.textContent = `Patient data saved successfully! Patient ID: ${patientID}`;
            messageElement.classList.add('alert', 'alert-success');
        }, 1000);
    }
    else {
        messageElement.textContent = `Error: ${result.error}`;
        messageElement.classList.add('alert', 'alert-danger');
    }
});

async function generatePatientID(fullName, age, gender, bloodType, drugAllergies, foodAllergies, environmentalAllergies, diabetes, hypertension, asthma, heartDisease, kidneyDisease, insuranceProvider, insurancePolicy) {
    const details = `${fullName}${age}${gender}${bloodType}${drugAllergies}${foodAllergies}${environmentalAllergies}${diabetes}${hypertension}${asthma}${heartDisease}${kidneyDisease}${insuranceProvider}${insurancePolicy}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(details);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return `PAT${hashHex.substring(0, 12)}`;
}

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