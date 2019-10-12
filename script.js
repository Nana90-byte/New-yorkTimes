
$("#search").on("click", searchBtn = () => {
var searchTerm = $("#searchTerms").val();
var recordNum = $("#numRecord").val();
var startYear = $("#startYear").val();
var endYear = $("#endYear").val();

var collected = {
    term:searchTerm,
    recordNumbers: recordNum,
    startingYear:startYear,
    finishYear:endYear,
}

})

$("#clear").on("click", clearBtn = () => {
    var searchTerm = $("#searchTerms").val("");
    const recordNum = $("#numRecord").val("");
    const startYear = $("#startYear").val("");
    const endYear = $("#endYear").val("");
})

