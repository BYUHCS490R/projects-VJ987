        document.getElementById('myForm').addEventListener('submit',function(event) {
            event.preventDefault();

            const fullname = document.getElementById('full-name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const age = document.getElementById('age').value;
            const dob = document.getElementById('dob').value;
            const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
            const type = document.getElementById('type').value;
            const focus = document.querySelector('input[name="focus"]:checked') ? document.querySelector('input[name="focus"]:checked').value : '';
            const time = document.getElementById('time').value;
            const level = document.getElementById('level').value;

            if (!fullname || !email || !phone) {
                alert("Please fill in your full name, email, and phone number.");
                return;
            }

            if (!age || age <18) {
                alert("You need to be 18");
                return;
            }

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
                comments: comments
            };

            alert("Form Submitted");
            console.log(formData);
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "submit.json", true);
            xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    alert("Form submitted successfully!");
                    const response = JSON.parse(xhr.responseText);
                    console.log(response);
                    //document.getElementById('myForm').reset();
                    document.getElementById('myForm').innerHTML = '';
                    document.getElementById('message').innerText = response.message;
                } else if (xhr.readyState === 4) {
                    alert("Error submitting form.");
                }
            };
            xhr.send(JSON.stringify(formData));

        });