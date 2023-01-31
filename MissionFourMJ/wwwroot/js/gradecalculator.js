$("#calculate").click(function () {
        var assignmentsWeight = 0.50;
        var projectsWeight = 0.10;
        var quizzesWeight = 0.10;
        var midWeight = 0.10;
        var finalWeight = 0.10;
        var intexWeight = 0.10;

        var txtAssignments = parseFloat($("#txtAssignments").val());
        var txtProjects = parseFloat($("#txtProjects").val());
        var txtQuizzes = parseFloat($("#txtQuizzes").val());
        var txtMidterm = parseFloat($("#txtMidterm").val());
        var txtFinal = parseFloat($("#txtFinal").val());
        var txtIntex = parseFloat($("#txtIntex").val());

        var totalPercentage = (txtAssignments * assignmentsWeight) + (txtProjects * projectsWeight) + (txtQuizzes * quizzesWeight) + (txtMidterm * midWeight) + (txtFinal * finalWeight) + (txtIntex + intexWeight);
        // output to html 
        $("#totalPercentage").html(totalPercentage.toFixed(2));

        var letterGrade="";

        if (totalPercentage >= 94) {
            letterGrade = "A";
        } else if (totalPercentage >= 90) {
            letterGrade = "A-";
        } else if (totalPercentage >= 87) {
            letterGrade = "B+";
        } else if (totalPercentage >= 84) {
            letterGrade = "B";
        } else if (totalPercentage >= 80) {
            letterGrade = "B-";
        } else if (totalPercentage >= 77) {
            letterGrade = "C+";
        } else if (totalPercentage >= 74) {
            letterGrade = "C";
        } else if (totalPercentage >= 70) {
            letterGrade = "C-";
        } else if (totalPercentage >= 67) {
            letterGrade = "D+";
        } else if (totalPercentage >= 64) {
            letterGrade = "D";
        } else if (totalPercentage >= 60) {
            letterGrade = "D-";
        } else {
            letterGrade = "E";
        }
        //output to hmtl
        $("#letterGrade").html(letterGrade);
    })