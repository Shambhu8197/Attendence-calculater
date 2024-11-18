function calculateAttendance() {
  const studentName = document.getElementById("studentName").value;
  const workingDays = parseInt(
    document.getElementById("workingDays").value,
    10
  );
  const daysPresent = parseInt(
    document.getElementById("daysPresent").value,
    10
  );
  const selectedPercentage = document.getElementById("percentage").value;

  // Input validation
  if (
    !studentName ||
    isNaN(workingDays) ||
    isNaN(daysPresent) ||
    selectedPercentage === ""
  ) {
    alert("Please fill out all fields correctly.");
    return;
  }

  // Calculate Attendance Percentage
  const attendancePercentage = (daysPresent / workingDays) * 100;

  // Get Required Attendance Percentage
  const requiredPercentage = parseInt(selectedPercentage, 10);

  // Display the Result
  const resultDiv = document.querySelector(".result");
  resultDiv.innerHTML = `
      <h2>Attendance Result for ${studentName}</h2>
      <p>Total Class Days: ${workingDays}</p>
      <p>Days Present: ${daysPresent}</p>
      <p>Attendance Percentage: ${attendancePercentage.toFixed(2)}%</p>
      <p>Required Attendance Percentage: ${requiredPercentage}%</p>
      <p>${
        attendancePercentage >= requiredPercentage
          ? "Satisfactory Attendance"
          : "Non-satisfactory Attendance"
      }</p>;
}
