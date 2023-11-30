function populateCountries() {
    var countrySelect = document.getElementById('country');

    // Populate the country dropdown
    countries.forEach(function (country) {
        var option = document.createElement('option');
        option.value = country;
        option.text = country;
        countrySelect.add(option);
    });
}

function signup() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var pincode = document.getElementById('pincode').value;
    var country = document.getElementById('country').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    // Basic password confirmation
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    // Display the information (you can customize this based on your needs)
    alert(
        'Full Name: ' + fullName +
        '\nEmail: ' + email +
        '\nDate of Birth: ' + dob +
        '\nAddress: ' + address +
        '\nPincode: ' + pincode +
        '\nCountry: ' + country
    );

    // Optionally, you can redirect to another page or perform other actions here
}

// Call the function to populate the country dropdown
populateCountries();

