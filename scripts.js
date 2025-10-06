document.getElementById('coverForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get values from input fields
    const studentName = document.getElementById('studentName').value;
    const studentId = document.getElementById('studentId').value;
    const department = document.getElementById('department').value;
    
    // Update the preview section
    document.getElementById('namePreview').textContent = studentName;
    document.getElementById('idPreview').textContent = studentId;
    document.getElementById('departmentPreview').textContent = department;
});
