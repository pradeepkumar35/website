document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('main').classList.add('fade-in');
});

document.getElementById('paymentButton').addEventListener('click', function () {
  alert('Redirecting to payment gateway...');
  // Add additional logic for handling payments
});
