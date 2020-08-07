document.addEventListener("DOMContentLoaded",
function(event){
document.querySelector("button")
.addEventListener("click" , function () {
  

  $ajaxUtils
  .sendGetRequest("https://nidhikhar66.github.io/coursera-test/ajax/name.json",
     function (res) {
     var message= 
        res.firstName+ " "+ res.lastName
        if (res.likesChinese) {
          message+= "likesChinese";
        }
        else{
          message += "doesn't like Chinese"
        }
        message += " and uses";
        message += res.noOfDisplays;
        message +="displays for coding";
     
     document.querySelector("#content")
     .innerHTML = "<h2> "+
   message+ "</h2>";
   });
});

}
  
);
