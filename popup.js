document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("btn").addEventListener("click", function(){
      chrome.tabs.query({active: true, currentWindow: true}, function (tabss) {
         const msgText =  document.getElementById("msg").value;
         chrome.tabs.sendMessage(tabss[0].id, {myMessage: msgText},
            function (msg) {
               document.getElementById("result").innerHTML = msg.responseMsg;
               document.getElementById("check1").innerHTML = msg.responseCheck1;
               document.getElementById("check2").innerHTML = msg.responseCheck2;
               document.getElementById("check3").innerHTML = msg.responseCheck3;
               return true;
            }
         );
         return true;
      });
      return true;
   });
//   return true;
});
