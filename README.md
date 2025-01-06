# Hospital Management Web App

## Overview
This project is a simple hospital management web application that allows for patient admission and emergency mode functionality using NFC technology. The application is built using HTML, CSS, JavaScript, Node.js, Express.js, and SQLite.

## Features
- **Emergency Mode**: Scan an NFC tag to retrieve and display patient details.
- **New Patient Admission**: A form to enter new patient details, with the ability to scan an NFC tag to quickly populate the form fields.
- **Responsive Design**: Utilizes Bootstrap for a responsive layout.

## Project Structure
```
hospital-management-app
├── public
│   ├── css
│   │   └── style.css
│   ├── js
│   │   └── script.js
│   └── index.html
├── server.js
├── database.sqlite
├── package.json
└── README.md
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd hospital-management-app
   ```

2. **Install dependencies**:
   ```
   npm install
   ```

3. **Run the server**:
   ```
   node server.js
   ```

4. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000`.

## Usage
- To admit a new patient, fill out the form on the homepage and submit it.
- Use the NFC scanning buttons to read from or write to NFC tags for quick patient data retrieval and admission.

## Database Schema
```sql
CREATE TABLE IF NOT EXISTS patients (
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
    insurancePolicy TEXT
);
```

## Technologies Used
- HTML
- CSS (Bootstrap)
- JavaScript (Vanilla)
- Node.js
- Express.js
- SQLite

## License
This project is licensed under the MIT License.