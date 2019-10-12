document.addEventListener("DOMContentLoaded", function() {
   document.getElementById("btn").addEventListener("click", function(){
      chrome.tabs.query({active: true, currentWindow: true}, function (tabss) {
         const msgText =  document.getElementById("msg").value;
         chrome.tabs.sendMessage(tabss[0].id, {myMessage: msgText},
            function (msg) {
               document.getElementById("result").innerHTML = msg.responseMsg;
               document.getElementById("check").innerHTML = msg.responseNode;
               return true;
            }
         );
         return true;
      });
      return true;
   });
   return true;
});
