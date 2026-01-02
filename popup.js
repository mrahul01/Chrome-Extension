document.addEventListener("DOMContentLoaded", () => {
    const button = document.querySelector(".button");
    const circle = document.querySelector(".circle");

    let buttonOn = false;
    button.addEventListener("click", () => {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {  // Notice `function(tabs)`
            if (tabs.length === 0) {
                console.error("No active tab found");
                return;
            }

            const tabId = tabs[0].id;
            
            if (!buttonOn) {
                buttonOn = true;
                circle.style.animation = "moveCircleRight 1s forwards";
                button.style.animation = "transformToYellow 1s forwards";
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ['appOn.js']
                });
            } else {
                buttonOn = false;
                circle.style.animation = "moveCircleLeft 1s forwards";
                button.style.animation = "transformToBlue 1s forwards";
                chrome.scripting.executeScript({
                    target: { tabId: tabId },
                    files: ['appOff.js']
                });
            }
        });
    });
});





// if(document.querySelector(".popUp")){
//     const button = document.querySelector(".button");
//     const circle =document.querySelector(".circle");

//     var buttonOn = false;
//    button.addEventListener("click",() =>
//     {
//         if(!buttonOn)
//             {
//                 buttonOn=true;
//                 circle.style.animation = "moveCircleRight 1s forwards";
//                 button.style.animation = "transformToYellow 1s forwards"; 
//                 console.log("Current Tab ID:", tabid);
//                 chrome.scripting.executeScript({
//                     target: { tabId: tabid },
//                     files: ['appOn.js']
//                 })
               
//             }
//             else
//             {
//                 buttonOn=false;
//                 circle.style.animation="moveCircleLeft 1s forwards";
//                 button.style.animation="transformToBlue 1s forwards";
//                 console.log("Current Tab ID:", tabid);
//                 chrome.scripting.executeScript({
//                     target: { tabId: tabid },
//                     files: ['appOff.js']
//                 })
//             }
//     })
// }
