$("currentDay").text(moment().format("dddd, MMMMM Do YYYY"));

function timeUpdate() {
    // current check
    var currentHour = moment().hour();


$(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);


if (blockHour < currentHour) {
    $(this).addClass("past");
    $(this).addClass("present");
    $(this).addClass("future");
}

else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
}

else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).removeClass("future");
}

})

};

timeUpdate();

$(".saveBtn").on("click", function () {
    var descr = $(this).siblings("description").val();
    var hour = $(this).siblings(".hour").text();

    localStorage.setItem(hour, descr);
})

$(".time-block").each(function () {
    var savedhourNode = $(this).children(".hour");
    var savedHour = savedhourNode[0].innerHTML;
    console.log('savedHour:', savedHour);
    var savedVal = localStorage.getItem(savedHour);

    console.log(savedVal);

    if (savedVal !== null) {
        console.log('IT RAN');
        $(this).children(".description").text(savedVal);
    }
})

