# NFC Care Tag App

## Overview
This project is a simple NFC Care Tag web application that allows for patient admission and emergency mode functionality using NFC technology. The application is built using HTML, CSS, JavaScript, Node.js, Express.js, and SQLite.

## Features
- **Emergency Mode**: Scan an NFC tag to retrieve and display patient details.
- **New Patient Admission**: A form to enter new patient details, with the ability to scan an NFC tag to quickly populate the form fields.
- **Responsive Design**: Utilizes Bootstrap for a responsive layout.

## Project Structure
```
nfc-care-tag
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

## Prerequisites
- Node.js and npm installed
- OpenSSL installed

## Setup Instructions
1. **Clone the repository**:
   ```sh
   git clone <repository-url>
   cd nfc-care-tag
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Install Necessary Node.js Modules**:
   Ensure you have the required Node.js modules installed. Run the following command in your project directory:
   ```sh
   npm install express sqlite3 body-parser cors
   ```

4. **Generate SSL Certificates**:
   Open a terminal and navigate to your project directory. Run the following commands to generate a self-signed certificate:
   ```sh
   openssl genrsa -out key.pem 2048 
   openssl req -new -key key.pem -out csr.pem   # press enter to skip prompts
   openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
   ```

5. **Run the server**:
   ```sh
   node server.js
   ```

6. **Access the application**:
   Open your web browser and navigate to `http://localhost:3000`.

7. **Access the Web App on Your Android Device**:
   Find your local IP address by running the following command in your terminal or command prompt:
   ```sh
   ipconfig
   ```
   Open a web browser on your Android device and navigate to the local IP address of your development machine, followed by the port number. For example:
   ```sh
   https://192.168.1.100:3000
   ```

## Install OpenSSL and Add to Environment Variables

### Windows
1. **Download OpenSSL**:
   - Go to the [OpenSSL for Windows](https://slproweb.com/products/Win32OpenSSL.html) page.
   - Download the appropriate version (e.g., Win64 OpenSSL v1.1.1).

2. **Install OpenSSL**:
   - Run the installer and follow the instructions.
   - During installation, select the option to copy OpenSSL DLLs to the Windows system directory.

3. **Add OpenSSL to Environment Variables**:
   - Open the Start Menu, search for "Environment Variables", and select "Edit the system environment variables".
   - In the System Properties window, click on the "Environment Variables" button.
   - Under "System variables", find the `Path` variable, select it, and click "Edit".
   - Click "New" and add the path to the OpenSSL `bin` directory (e.g., `C:\Program Files\OpenSSL-Win64\bin`).
   - Click "OK" to close all windows.

### macOS
1. **Install OpenSSL using Homebrew**:
   ```sh
   brew install openssl
   ```

2. **Add OpenSSL to Environment Variables**:
   - Open your terminal and edit your shell profile file (e.g., `.bash_profile`, `.zshrc`):
     ```sh
     nano ~/.zshrc
     ```
   - Add the following lines to the file:
     ```sh
     export PATH="/usr/local/opt/openssl/bin:$PATH"
     export LDFLAGS="-L/usr/local/opt/openssl/lib"
     export CPPFLAGS="-I/usr/local/opt/openssl/include"
     ```
   - Save the file and reload the shell profile:
     ```sh
     source ~/.zshrc
     ```

### Linux
1. **Install OpenSSL**:
   ```sh
   sudo apt-get update
   sudo apt-get install openssl
   ```

2. **Add OpenSSL to Environment Variables**:
   - Open your terminal and edit your shell profile file (e.g., `.bashrc`):
     ```sh
     nano ~/.bashrc
     ```
   - Add the following line to the file:
     ```sh
     export PATH="/usr/local/ssl/bin:$PATH"
     ```
   - Save the file and reload the shell profile:
     ```sh
     source ~/.bashrc
     ```

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
