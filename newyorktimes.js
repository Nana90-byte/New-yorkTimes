


var APIkey = "NqVSU6b1IYEiBPODKvTLgtevZp5gIkDk";

$("#search").on("click" , function(){

    var search = $("#search")
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + APIkey + "&limit=10";

    $.ajax({
       url: queryURL,
       method: "GET"
     }).then(function(response) {
         console.log(response);
       var article = response.response.docs;
       
       for (var i =0; i < article.length; i++ ) {
        console.log(article[i]);
        var articleDiv = $("<div>");
        var p = $("<p>").text(article[i].snippet);
        console.log(p);
        articleDiv.append(p)
        $("#article").append(articleDiv);
       }
       
})

})