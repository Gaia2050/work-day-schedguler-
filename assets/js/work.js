$("#currentDay").text(moment().format("dddd, MMMM YYYY"));

console.log(currentDay);


function timeUpdate() {
    // current check
    var currentHour = moment().hour();


$(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("hour")[1]);


if (blockHour < currentHour) {
    $(this).addClass("past");
    // $(this).removeClass("present");
    // $(this).addClass("future");
}

else if (blockHour === currentHour) {
    // $(this).removeClass("past");
    $(this).addClass("present");
    // $(this).removeClass("future");
}

else {
    // $(this).removeClass("past");
    // $(this).removeClass("present");
    $(this).addClass("future");
}

})

};

timeUpdate();

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var descr = $(this).siblings(".description").val();
    var hour = $(this).siblings(".hour").text();
    console.log(descr);
    console.log(hour);
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

