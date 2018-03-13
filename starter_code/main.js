$(document).ready(documentready);

function documentready() {

    $(".learnmore").click(LearnMoreClick);
}
//learn more
function LearnMoreClick() {
    event.preventDefault();
    $("#learnmoretext").slideDown();
    $(".learnmore").hide();
}
//read more
$(".readmore").click(ReadMoreClick);

function ReadMoreClick() {
    event.preventDefault();
    $("#show-this-on-click").slideDown();
    $(".readmore").hide();
    $(".readless").show();
}
//read less
$(".readless").click(ReadLessClick);

function ReadLessClick() {
    event.preventDefault();
    $(".readless").hide();
    $("#show-this-on-click").slideUp();
    $(".readmore").show();

}