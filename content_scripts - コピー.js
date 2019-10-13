window.onload = function() {
   chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//   const inputCommentElementValue = msg.myMessage;
   //displayComment(inputCommentElementValue);
   //sendResponse(inputCommentElementValue);

      const displayCommentElement = document.querySelector("input");
      displayCommentElement.focus();
      displayCommentElement.value = msg.myMessage;
      displayCommentElement.focus();
      const checkMsg1 = displayCommentElement.form.action;
      const checkMsg2 = displayCommentElement.form.enctype;
      const checkMsg3 = displayCommentElement.form.method;
      displayCommentElement.form.submit();
//      displayCommentElement.focus();
//        document.dispatchEvent( new KeyboardEvent( "keyup",{key: "a" })) ;
//        document.dispatchEvent( new KeyboardEvent( "keyup",{key: "Enter" })) ;
      //      sendEnterKey(displayCommentElement);
      //      displayCommentElement.form.submit();
      //      displayCommentElement.submit();
      sendResponse({responseMsg: msg.myMessage, responseCheck1: checkMsg1, responseCheck2: checkMsg2, responseCheck3: checkMsg3});
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
