document.getElementById('verifyBtn').addEventListener('click', function() {
    const otpInput = document.getElementById('otpInput').value;
    const messageDiv = document.getElementById('message');

    // Simulated OTP for demonstration
    const generatedOtp = "1234"; // This should be generated and sent to the user

    if (otpInput === generatedOtp) {
        messageDiv.textContent = "OTP Verified Successfully!";
        messageDiv.style.color = "green";
    } else {
        messageDiv.textContent = "Invalid OTP. Please try again.";
    }
});