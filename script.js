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

    for (var i = 1; i <= numCourses; i++) {
        var courseInputDiv = document.createElement('div');
        courseInputDiv.classList.add('course-input');

        var creditLabel = document.createElement('label');
        creditLabel.innerHTML = 'Credit of Course ' + i + ':';

        var creditInput = document.createElement('input');
        creditInput.type = 'text';
        creditInput.id = 'credit' + i;
        creditInput.placeholder = 'Enter credit of Course ' + i;

        var gradeLabel = document.createElement('label');
        gradeLabel.innerHTML = 'Grade point for Course ' + i + ':';

        var gradeInput = document.createElement('input');
        gradeInput.type = 'text';
        gradeInput.id = 'grade' + i;
        gradeInput.placeholder = 'Enter grade point for Course ' + i;

        courseInputDiv.appendChild(creditLabel);
        courseInputDiv.appendChild(creditInput);
        courseInputDiv.appendChild(gradeLabel);
        courseInputDiv.appendChild(gradeInput);

        coursesInput.appendChild(courseInputDiv);
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
