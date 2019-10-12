window.onload = function() {
   chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//   const inputCommentElementValue = msg.myMessage;
   //displayComment(inputCommentElementValue);
   //sendResponse(inputCommentElementValue);

   const displayCommentElement = document.querySelector("input");
   displayCommentElement.focus();
   displayCommentElement.value = msg.myMessage;
   displayCommentElement.form.submit();
 
   let displayCommentInputEventMethod = displayCommentElement.oninput;
//   displayCommentElement.submit();
   sendResponse({responseMsg: msg.myMessage, responseNode: "Inputイベントリスナー: " +  Object.prototype.toString.call(displayCommentInputEventMethod)});
   return true;
   });

   function displayComment(msg) {
      const displayCommentElementArray = document.getElementsByClassName('_2SfDYkJI1IlMdU-wnesiRj');
//    const displayCommentElement = displayCommentElementArray.find(
//         (elemnt) => {return (elemnt.tagName == "INPUT")}
//    );
//    displayCommentElement.value = msg;
//    displayCommentElement.form.submit();
      displayCommentElementArray[0].value = msg;
      displayCommentElementArray[0].form.submit();
   };
};
