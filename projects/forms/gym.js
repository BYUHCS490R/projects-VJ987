document.getElementById('GymForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullname = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const age = parseInt(document.getElementById('age').value.trim(), 10);
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? 
        document.querySelector('input[name="gender"]:checked').value : '';
    const type = document.getElementById('type').value;
    const focus = document.querySelector('input[name="focus"]:checked') ? 
        document.querySelector('input[name="focus"]:checked').value : '';
    const time = document.getElementById('time').value;
    const level = document.getElementById('level').value;
    const comments = document.getElementById('comments').value.trim();
    const personalTrainer = document.querySelector('input[type="checkbox"]:checked') ? true : false;

    if (!fullname) { alert("Full Name is required."); return; }
    if (!email) { alert("Email is required."); return; }
    if (!phone) { alert("Phone is required."); return; }
    if (!age || age <= 18) { alert("Age must be over 18."); return; }
    if (!gender) { alert("Please select a gender."); return; }
    if (type === "blank") { alert("Please select a membership type."); return; }
    if (!focus) { alert("Please select a training focus."); return; }
    if (time === "blank") { alert("Please select a preferred workout time."); return; }
    if (level === "blank") { alert("Please select a workout level."); return; }

    const formData = {
        name: fullname,
        email: email,
        phone: phone,
        age: age,
        dob: dob,
        gender: gender,
        membershipType: type,
        focus: focus,
        time: time,
        level: level,
        comments: comments,
        personalTrainer: personalTrainer
    };

    console.log(formData);
    alert("Form Submitted");

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);

                let messageDiv = document.getElementById('message');
                if (!messageDiv) {
                    messageDiv = document.createElement('div');
                    messageDiv.id = 'message';
                    messageDiv.style.marginTop = '20px';
                    document.getElementById('GymForm').parentNode.appendChild(messageDiv);
                }
                messageDiv.innerText = response.message;


                document.getElementById('GymForm').reset();
            } else {
                alert("Error submitting form.");
            }
        }
    };

    xhr.send();
});
