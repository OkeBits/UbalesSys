function goBack() {
    window.location.href = "index.html";
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const sidePanel = document.querySelector(".side-panel");
    const closeBtn = document.querySelector(".close-btn");

    function toggleMenu() {
        if (sidePanel.style.right === "0px") {
            sidePanel.style.right = "-70%";
        } else {
            sidePanel.style.right = "0px";
        }
    }

    menuIcon.addEventListener("click", toggleMenu);
    closeBtn.addEventListener("click", toggleMenu);

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidePanel.contains(event.target) && !menuIcon.contains(event.target)) {
            sidePanel.style.right = "-70%";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const enrollmentForm = document.getElementById("enrollment-form");

    if (enrollmentForm) {
        enrollmentForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            // Get form values
            const studentName = document.getElementById("name").value;
            const studentGrade = parseInt(document.getElementById("grade").value);

            if (studentName.trim() === "" || isNaN(studentGrade)) {
                alert("Please enter all required fields correctly.");
                return;
            }

            // Determine section based on grade
            let section;
            if (studentGrade >= 90) {
                section = "A";
            } else if (studentGrade >= 85) {
                section = "B";
            } else if (studentGrade >= 80) {
                section = "C";
            } else if (studentGrade >= 75) {
                section = "D";
            } else {
                section = "Guidance Office";
            }

            // Retrieve existing students from localStorage or initialize empty array
            let students = JSON.parse(localStorage.getItem("students")) || [];

            // Create student object
            const newStudent = {
                id: students.length + 1,
                name: studentName,
                grade: studentGrade,
                section: section
            };

            // Add new student to the list
            students.push(newStudent);

            // Save updated list to localStorage
            localStorage.setItem("students", JSON.stringify(students));

            // Redirect to the student list page
            window.location.href = "student.html";
        });
    }

    // Load students on the student.html page
    const studentTable = document.querySelector("#student-table tbody");

    if (studentTable) {
        let students = JSON.parse(localStorage.getItem("students")) || [];

        // Clear the table before populating
        studentTable.innerHTML = "";

        students.forEach((student) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.grade}</td>
                <td>${student.section}</td>
                <td><button class="delete-btn" onclick="deleteStudent(${student.id})">🗑 Delete</button></td>
            `;

            studentTable.appendChild(row);
        });
    }
});

// Function to delete a student
function deleteStudent(studentId) {
    let students = JSON.parse(localStorage.getItem("students")) || [];
    students = students.filter(student => student.id !== studentId);
    localStorage.setItem("students", JSON.stringify(students));
    location.reload(); // Refresh the page to update the table
}
