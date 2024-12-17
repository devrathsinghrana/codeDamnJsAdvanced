const eventContainer = document.getElementById("event-container");
const eventBtn = document.getElementById("event-btn");

// This will work
// eventBtn.addEventListener("click", hideMe, {
//   capture: true,
// });
// eventContainer.addEventListener("click", showMe, {
//   capture: true,
// });

// function hideMe() {
//   eventBtn.style.display = "none";
// }

// function showMe() {
//   eventBtn.style.display = "block";
// }

// Here button is hidden but since click once is true for them when we hide the button we can't show it again as click is done for both button and div where first div callback is fired then button callback is fired which hides the button. To overcome this we can use stop propagation and keep bubbling mode on
// eventBtn.addEventListener("click", hideMe, {
//   capture: true,
//   once: true,
// });
// eventContainer.addEventListener("click", showMe, {
//   capture: true,
//   once: true,
// });

// function hideMe() {
//   eventBtn.style.display = "none";
// }

// function showMe() {
//   eventBtn.style.display = "block";
// }

eventBtn.addEventListener("click", hideMe, {
  capture: false,
  once: true,
});
eventContainer.addEventListener("click", showMe, {
  capture: false,
  once: true,
});

function hideMe(event) {
  event.stopPropagation();
  eventBtn.style.display = "none";
}

function showMe() {
  eventBtn.style.display = "block";
}
