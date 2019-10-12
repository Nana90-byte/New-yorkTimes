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
console.log(collected);
})

$("#clear").on("click", clearBtn = () => {

})

