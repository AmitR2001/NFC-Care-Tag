// this is for future modification
document.getElementById('getPatientForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const patientID = document.getElementById('patientID').value;

    try {
        const response = await fetch(`/api/patients/patientID/${patientID}`);
        console.log('Response status:', response.status);
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Patient not found');
            } else {
                throw new Error('An error occurred while fetching patient details');
            }
        }
        const patient = await response.json();
        displayPatientDetails(patient);
    } catch (error) {
        console.error('Error fetching patient data:', error);
        document.getElementById('patientDetails').innerHTML = `<div class="alert alert-danger">${error.message}</div>`;
    }
});

function displayPatientDetails(patient) {
    const detailsDiv = document.getElementById('patientDetails');
    detailsDiv.innerHTML = `
        <h2>Patient Details</h2>
        <p><strong>Full Name:</strong> ${patient.fullName}</p>
        <p><strong>Age:</strong> ${patient.age}</p>
        <p><strong>Gender:</strong> ${patient.gender}</p>
        <p><strong>Blood Type:</strong> ${patient.bloodType}</p>
        <p><strong>Drug Allergies:</strong> ${patient.drugAllergies}</p>
        <p><strong>Food Allergies:</strong> ${patient.foodAllergies}</p>
        <p><strong>Environmental Allergies:</strong> ${patient.environmentalAllergies}</p>
        <p><strong>Diabetes:</strong> ${patient.diabetes}</p>
        <p><strong>Hypertension:</strong> ${patient.hypertension}</p>
        <p><strong>Asthma:</strong> ${patient.asthma}</p>
        <p><strong>Heart Disease:</strong> ${patient.heartDisease}</p>
        <p><strong>Kidney Disease:</strong> ${patient.kidneyDisease}</p>
        <p><strong>Current Medications:</strong> ${patient.currentMedications}</p>
        <p><strong>Medication Changes:</strong> ${patient.medicationChanges}</p>
        <p><strong>Surgeries:</strong> ${patient.surgeries}</p>
        <p><strong>Illnesses:</strong> ${patient.illnesses}</p>
        <p><strong>Emergency Contact Name:</strong> ${patient.emergencyContactName}</p>
        <p><strong>Emergency Contact Relationship:</strong> ${patient.emergencyContactRelationship}</p>
        <p><strong>Emergency Contact Phone:</strong> ${patient.emergencyContactPhone}</p>
        <p><strong>Tetanus:</strong> ${patient.tetanus}</p>
        <p><strong>COVID-19:</strong> ${patient.covid19}</p>
        <p><strong>Other Immunizations:</strong> ${patient.otherImmunizations}</p>
        <p><strong>Smoker:</strong> ${patient.smoker}</p>
        <p><strong>Alcohol:</strong> ${patient.alcohol}</p>
        <p><strong>Dietary Restrictions:</strong> ${patient.dietaryRestrictions}</p>
        <p><strong>Physician Name:</strong> ${patient.physicianName}</p>
        <p><strong>Physician Contact:</strong> ${patient.physicianContact}</p>
        <p><strong>Insurance Provider:</strong> ${patient.insuranceProvider}</p>
        <p><strong>Insurance Policy:</strong> ${patient.insurancePolicy}</p>
    `;
}