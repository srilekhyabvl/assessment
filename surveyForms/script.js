var popup;
function reset() {
    document.getElementById("myform").reset();
}
function submit() {
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const gender = document.querySelectorAll('input[type="radio"]:checked');
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("phone").value;
    const submittedData = document.getElementById("submittedData");
    submittedData.innerHTML = `
                <li>First Name: ${firstName}</li>
                <li>Last Name: ${lastName}</li>
                <li>Date of Birth: ${dob}</li>
                <li>Country: ${country}</li>
                <li>Gender: ${[...gender].map(checkbox => checkbox.value).join(', ')}</li>
                <li>Profession: ${profession}</li>
                <li>Email: ${email}</li>
                <li>Mobile Number: ${mobile}</li>
            `;

    const popup = document.getElementById("popup");
    popup.style.display = "block";
}
function closePopup() {
    document.getElementById("popup").style.display = "none";
    reset();
}
function validate() {
    var form = document.getElementById('myform');
    for (var i = 0; i < form.elements.length; i++) {
        if (form.elements[i].value == '' && form.elements[i].hasAttribute('required')) {
            alert("You are required to fill all the fields");
            return false;
        }
        else {
            submit();
        }
    }
}