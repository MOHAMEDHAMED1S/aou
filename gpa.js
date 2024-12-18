            document.addEventListener("DOMContentLoaded", function() {
                const subjects = [];

                function updateSubjectsArray() {
                    subjects.length = 0;
                    document.querySelectorAll(".subject").forEach(input => subjects.push(input));
                }

                function convertGradeToNumeric(grade) {
                    if (!isNaN(grade) && grade >= 0 && grade <= 100) {
                        if (grade >= 90) {
                            grade = "A";
                        } else if (grade >= 82) {
                            grade = "B+";
                        } else if (grade >= 74) {
                            grade = "B";
                        } else if (grade >= 66) {
                            grade = "C+";
                        } else if (grade >= 58) {
                            grade = "C";
                        } else if (grade >= 50) {
                            grade = "D";
                        } else {
                            grade = "F";
                        }
                    }

                    switch (grade.toUpperCase()) {
                        case "A": return 4;
                        case "B+": return 3.5;
                        case "B": return 3;
                        case "C+": return 2.5;
                        case "C": return 2;
                        case "D": return 1.5;
                        case "F": return 0;
                        default: return NaN;
                    }
                }

                window.createSubjectInput = function() {
                    const inputDiv = document.getElementById("inputs");
                    const subjectInput = document.createElement("div");
                    subjectInput.className = "subject";

                    const gradeInput = document.createElement("input");
                    gradeInput.type = "text";
                    gradeInput.placeholder = "Enter grade or degree";

                    const hoursInput = document.createElement("input");
                    hoursInput.type = "text";
                    hoursInput.placeholder = "Enter hours";

                    const removeButton = document.createElement("button");
                    removeButton.textContent = "Remove";
                    removeButton.addEventListener("click", function() {
                        subjectInput.remove();
                        updateSubjectsArray();
                    });

                    subjectInput.appendChild(gradeInput);
                    subjectInput.appendChild(hoursInput);
                    subjectInput.appendChild(removeButton);
                    inputDiv.appendChild(subjectInput);
                    subjects.push(subjectInput);
                };

                window.calculateGPA = function() {
                    const totalGradePoints = subjects.reduce((total, subject) => {
                        return total + convertGradeToNumeric(subject.children[0].value) * parseFloat(subject.children[1].value);
                    }, 0);

                    const totalHours = subjects.reduce((total, subject) => {
                        return total + parseFloat(subject.children[1].value);
                    }, 0);

                    const gpa = totalGradePoints / totalHours;
                    const gpaPercentage = Math.min(100, (gpa * 25)); // Convert GPA to a maximum percentage of 100%
                    document.querySelector("#result .gpa-text").textContent = gpa.toFixed(2);
                    document.querySelector("#result .gpa-progress").style.width = `${gpaPercentage}%`;
                };

                window.calculateCumulativeGPA = function() {
                    const oldGPA = parseFloat(document.getElementById("oldGPA").value) || 0;
                    const oldGPAHours = parseFloat(document.getElementById("oldGPAHours").value) || 0;
                    const newGPA = parseFloat(document.getElementById("newGPA").value) || 0;
                    const newGPAHours = parseFloat(document.getElementById("newGPAHours").value) || 0;

                    const totalGradePoints = subjects.reduce((total, subject) => {
                        return total + convertGradeToNumeric(subject.children[0].value) * parseFloat(subject.children[1].value);
                    }, 0) + oldGPA * oldGPAHours + newGPA * newGPAHours;

                    const totalHours = subjects.reduce((total, subject) => {
                        return total + parseFloat(subject.children[1].value);
                    }, 0) + oldGPAHours + newGPAHours;

                    const cumulativeGPA = totalGradePoints / totalHours;
                    document.querySelector("#cumulative-result .gpa-text").textContent = cumulativeGPA.toFixed(2);
                    const gpaPercentage = Math.min(100, (cumulativeGPA * 25)); // Convert GPA to a maximum percentage of 100%
                    document.querySelector("#cumulative-result .gpa-progress").style.width = `${gpaPercentage}%`;
                };

                window.removeAllSubjects = function() {
                    const inputDiv = document.getElementById("inputs");
                    inputDiv.innerHTML = "";
                    subjects.length = 0;
                };

                window.toggleGPASections = function() {
                    const gpaCalculator = document.getElementById("gpa-calculator");
                    const cumulativeGPAInputs = document.getElementById("cumulative-gpa-inputs");

                    if (gpaCalculator.style.display === "none") {
                        gpaCalculator.style.display = "block";
                        cumulativeGPAInputs.style.display = "none";
                    } else {
                        gpaCalculator.style.display = "none";
                        cumulativeGPAInputs.style.display = "block";
                    }
                };
            });
            function openModal() {
            document.getElementById("myModal").style.display = "block";
        }

        function closeModal() {
            document.getElementById("myModal").style.display = "none";
        }

        window.onclick = function(event) {
            var modal = document.getElementById("myModal");
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }