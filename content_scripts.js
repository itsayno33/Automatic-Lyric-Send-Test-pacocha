window.onload = function() {
   chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//   const inputCommentElementValue = msg.myMessage;
   //displayComment(inputCommentElementValue);
   //sendResponse(inputCommentElementValue);

      const displayCommentElement = document.querySelector("input");
      displayCommentElement.focus();
      displayCommentElement.value = msg.myMessage;
      displayCommentElement.focus();
      document.dispatchEvent( new KeyboardEvent( "keydown",{key: "a" })) ;

      document.dispatchEvent( new KeyboardEvent( "keydown",{key: "Enter" })) ;
      //      sendEnterKey(displayCommentElement);
      //      displayCommentElement.form.submit();
      //      displayCommentElement.submit();
      sendResponse({responseMsg: msg.myMessage});
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

   function sendEnterKey(eventDispacher) {
      enterKeyEvent = new KeyboardEvent('keyup',{key: "Enter", code: "Enter"});
      var canceled = !body.dispatchEvent(enterKeyEvent);
      if(canceled) {
            // A handler called preventDefault
            alert("canceled");
      } else {
            // None of the handlers called preventDefault
      alert("not canceled");
      }
   }
};
