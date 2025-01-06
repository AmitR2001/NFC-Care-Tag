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

    const message = `
        1.PI|FN:${fullName}|A:${age}|G:${gender}|BT:${bloodType}
        2.AL|D:${drugAllergies}|F:${foodAllergies}|E:${environmentalAllergies}
        3.CC|D:${diabetes}|H:${hypertension}|A:${asthma}|HD:${heartDisease}|KD:${kidneyDisease}
        4.MED|C:${currentMedications}|CH:${medicationChanges}
        5.PMH|S:${surgeries}|I:${illnesses}
        6.EC|N:${emergencyContactName}|R:${emergencyContactRelationship}|P:${emergencyContactPhone}
        7.IMM|T:${tetanus}|C:${covid19}|O:${otherImmunizations}
        8.LF|S:${smoker}|A:${alcohol}|DR:${dietaryRestrictions}
        9.PHY|N:${physicianName}|C:${physicianContact}
        10.INS|P:${insuranceProvider}|PN:${insurancePolicy}
    `.trim();

    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.write(message).then(() => {
                document.getElementById('message').textContent = 'Message written.';
            }).catch(error => {
                document.getElementById('message').textContent = `Write failed :-( try again: ${error}.`;
            });
        } catch (error) {
            document.getElementById('message').textContent = `Error: ${error}`;
        }
    } else {
        document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
    }
});

document.getElementById('readButton').addEventListener('click', async () => {
    if ('NDEFReader' in window) {
        try {
            const ndef = new NDEFReader();
            await ndef.scan();
            ndef.onreading = event => {
                const decoder = new TextDecoder();
                for (const record of event.message.records) {
                    const data = decoder.decode(record.data);
                    const patientData = parsePatientData(data);
                    populateFormFields(patientData);
                }
            };
        } catch (error) {
            document.getElementById('message').textContent = `Error: ${error}`;
        }
    } else {
        document.getElementById('message').textContent = 'Web NFC is not supported on this device.';
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

function parsePatientData(data) {
    const patientData = {};
    const lines = data.split('\n');
    lines.forEach(line => {
        const parts = line.split('|');
        parts.forEach(part => {
            const [key, value] = part.split(':');
            if (key && value) {
                patientData[key.trim()] = value.trim();
            }
        });
    });
    return patientData;
}

function populateFormFields(data) {
    document.getElementById('fullName').value = data['FN'];
    document.getElementById('age').value = data['A'];
    document.getElementById('gender').value = data['G'];
    document.getElementById('bloodType').value = data['BT'];
    document.getElementById('drugAllergies').value = data['D'];
    document.getElementById('foodAllergies').value = data['F'];
    document.getElementById('environmentalAllergies').value = data['E'];
    document.getElementById('diabetes').value = data['D'];
    document.getElementById('hypertension').value = data['H'];
    document.getElementById('asthma').value = data['A'];
    document.getElementById('heartDisease').value = data['HD'];
    document.getElementById('kidneyDisease').value = data['KD'];
    document.getElementById('currentMedications').value = data['C'];
    document.getElementById('medicationChanges').value = data['CH'];
    document.getElementById('surgeries').value = data['S'];
    document.getElementById('illnesses').value = data['I'];
    document.getElementById('emergencyContactName').value = data['N'];
    document.getElementById('emergencyContactRelationship').value = data['R'];
    document.getElementById('emergencyContactPhone').value = data['P'];
    document.getElementById('tetanus').value = data['T'];
    document.getElementById('covid19').value = data['C'];
    document.getElementById('otherImmunizations').value = data['O'];
    document.getElementById('smoker').value = data['S'];
    document.getElementById('alcohol').value = data['A'];
    document.getElementById('dietaryRestrictions').value = data['DR'];
    document.getElementById('physicianName').value = data['N'];
    document.getElementById('physicianContact').value = data['C'];
    document.getElementById('insuranceProvider').value = data['P'];
    document.getElementById('insurancePolicy').value = data['PN'];
}

