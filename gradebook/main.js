function getAverage(scores) {
    return scores.reduce((prev, curr) => prev + curr) / scores.length;
}

function getGrade(score) {
    if (score === 100) {
        return "A++";
    } else if (score >= 90 && score <= 99) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <= 79) {
        return "C";
    } else if (score >= 60 && score <= 69) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(totalScores, studentScore) {
    const avgScore = getAverage(totalScores);
    const grade = getGrade(studentScore);
    let msg = `Class average: ${avgScore}. Your grade: ${grade}. `;
    if (grade !== "F") {
        msg += "You passed the course.";
    } else {
        msg += "You failed the course.";
    }
    return msg;
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
