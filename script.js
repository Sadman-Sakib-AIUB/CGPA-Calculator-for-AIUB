function calculateCGPA() {
    var completedCredit = parseFloat(document.getElementById('completedCredit').value) || 0;
    var currentCGPA = parseFloat(document.getElementById('currentCGPA').value) || 0;
    var semesterCredit = parseFloat(document.getElementById('semesterCredit').value) || 0;
    var numCourses = parseInt(document.getElementById('numCourses').value) || 0;

    var totalCreditPoints = completedCredit * currentCGPA;
    var totalSemesterCreditPoints = 0;

    for (var i = 1; i <= numCourses; i++) {
        var credit = parseFloat(document.getElementById('credit' + i).value) || 0;
        var grade = parseFloat(document.getElementById('grade' + i).value) || 0;

        totalSemesterCreditPoints += credit * grade;
    }

    var totalCredits = completedCredit + semesterCredit;
    var finalCGPA = (totalCreditPoints + totalSemesterCreditPoints) / totalCredits;

    var resultElement = document.getElementById('result');

    if (!isNaN(finalCGPA) && isFinite(finalCGPA)) {
        resultElement.innerHTML = 'Your CGPA: ' + finalCGPA.toFixed(2);
    } else {
        resultElement.innerHTML = 'Please enter valid numerical values for credits and grades.';
    }
}

function generateCourseInputs() {
    var numCourses = parseInt(document.getElementById('numCourses').value);
    var coursesInput = document.getElementById('coursesInput');
    coursesInput.innerHTML = '';

    var grades = [
        { text: 'A+', value: 4.00 },
        { text: 'A', value: 3.75 },
        { text: 'B+', value: 3.50 },
        { text: 'B', value: 3.25 },
        { text: 'C+', value: 3.00 },
        { text: 'C', value: 2.75 },
        { text: 'D+', value: 2.50 },
        { text: 'D', value: 2.25 }
    ];

    var credits = [1, 2, 3];

    for (var i = 1; i <= numCourses; i++) {
        var courseRow = document.createElement('div');
        courseRow.classList.add('course-row');

        var creditGroup = document.createElement('div');
        creditGroup.classList.add('form-group');
        var creditLabel = document.createElement('label');
        creditLabel.innerHTML = 'Credit of Course ' + i + ':';
        var creditSelect = document.createElement('select');
        creditSelect.id = 'credit' + i;
        for (var j = 0; j < credits.length; j++) {
            var option = document.createElement('option');
            option.value = credits[j];
            option.text = credits[j];
            creditSelect.appendChild(option);
        }
        creditGroup.appendChild(creditLabel);
        creditGroup.appendChild(creditSelect);

        var gradeGroup = document.createElement('div');
        gradeGroup.classList.add('form-group');
        var gradeLabel = document.createElement('label');
        gradeLabel.innerHTML = 'Grade point for Course ' + i + ':';
        var gradeSelect = document.createElement('select');
        gradeSelect.id = 'grade' + i;
        for (var j = 0; j < grades.length; j++) {
            var option = document.createElement('option');
            option.value = grades[j].value;
            option.text = grades[j].text + ' (' + grades[j].value.toFixed(2) + ')';
            gradeSelect.appendChild(option);
        }
        gradeGroup.appendChild(gradeLabel);
        gradeGroup.appendChild(gradeSelect);

        courseRow.appendChild(creditGroup);
        courseRow.appendChild(gradeGroup);

        coursesInput.appendChild(courseRow);
    }
}

function showGradingSystem() {
    var gradingSystemTable = document.getElementById('gradingSystemTable');
    gradingSystemTable.style.display = gradingSystemTable.style.display === "none" ? "table" : "none";
}

document.getElementById('gradingSystem').addEventListener('click', showGradingSystem);
document.getElementById('numCourses').addEventListener('input', generateCourseInputs);
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateCGPA();
});
