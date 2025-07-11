const otpInputs = document.querySelectorAll('.otp-inputs input');
const form = document.getElementById('otpForm');

const validOTP = "1230";

otpInputs.forEach((input, index) => {
  input.addEventListener('input', () => {
    if (input.value.length === 1 && index < otpInputs.length - 1) {
      otpInputs[index + 1].focus();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Backspace' && input.value === '' && index > 0) {
      otpInputs[index - 1].focus();
    }
  });
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const enteredOTP = Array.from(otpInputs).map(input => input.value).join('');

  if (enteredOTP === validOTP) {
    otpInputs.forEach(input => {
      input.style.borderColor = 'green';
    });
    alert("OTP Verified Successfully!");
  } else {
    otpInputs.forEach(input => {
      input.style.borderColor = 'red';
    });
    alert("Invalid OTP");
  }
});
