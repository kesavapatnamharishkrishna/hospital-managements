document.getElementById('patientForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.getElementById('gender').value;
    const disease = document.getElementById('disease').value;

    // Add patient data to the table
    const patientTableBody = document.getElementById('patientTableBody');
    const newRow = patientTableBody.insertRow();

    newRow.insertCell(0).innerText = name;
    newRow.insertCell(1).innerText = age;
    newRow.insertCell(2).innerText = gender;
    newRow.insertCell(3).innerText = disease;

    // Clear the form after submission
    document.getElementById('patientForm').reset();
});
