function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here
    let result = ''; // Placeholder for validation result

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters

    //Pattern created to let numeric values start off with 'pet'//
    let regex = /^pet_[a-zA-Z0-9]+$/;

    //Method to check if values are accurate//
    if (regex.test(input)) {
      result = "Valid Syntax";
      document.getElementById('status-dot').className = "valid-dot";
    }
    else {
    result = "Invalid Syntax";
    document.getElementById('status-dot').className = "invalid-dot";
    }

        document.getElementById('result').innerText = result;
}
  



    

