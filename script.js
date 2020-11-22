$(document).ready(function() {

    var approvalMessage = "Congratulations, you have been approved!"
    var denialMessage = "We are sorry, you have been denied."

//validation rules

var rules =
    {
        salary: {
            required: true,
            min: 0,
            max: 200000,
            number: true
        },
        creditScore: {
            required: true,
            min: 300,
            max: 850,
            number: true
        },
        monthsAtJob: {
            required: true,
            min: 0,
            max: 100,
            number: true
        }
    }
var messages =
        {
            salary: {
                required: "This field is required",
                min: "The minimum value is 0",
                max: "The maximum value is 200000",
                number: "Please enter valid number"
            },
            creditScore: {
                required: "This field is required",
                min: "The minimum value is 300",
                max: "The maximum value is 850",
                number: "Please enter valid number"
            },
            monthsAtJob: {
                required: "This field is required",
                min: "The minimum value is 0",
                max: "The maximum value is 850",
                number: "Please enter valid number"
            }
        }
$("form").validate( {
        submitHandler: loanApproval,
        rules: rules,
        messages : messages
});


//functions
function loanApproval() {

//values that have been entered
    var salary = $("#salary").val();
    salary = parseFloat(salary);

    var creditScore = $("#creditScore").val();
    creditScore = parseFloat(creditScore);

    var monthsAtJob = $("#monthsAtJob").val();
    monthsAtJob = parseFloat(monthsAtJob);

    if (salary >= 40000) {
        if (creditScore >= 600) {
            $("#message").text(approvalMessage);
        } else if (monthsAtJob > 12) {
            $("#message").text(approvalMessage);
        } else {
            $("#message").text(denialMessage);
        }
    }
else {
    if (creditScore >= 600) {
        if (monthsAtJob > 12 && monthsAtJob) {
            $("#message").text(approvalMessage);
        } else {
            $("#message").text(denialMessage);
        }
    }
    else {
        $("#message").text(denialMessage);
        }
    }
}





});
