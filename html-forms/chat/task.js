let chatWidget = document.querySelector(".chat-widget");
let chatWidgetSide = document.querySelector(".chat-widget__side");
let chatWidgetInput = document.getElementById("chat-widget__input");
let messages = document.getElementById("chat-widget__messages");

let answers = ["мы ещё не проснулись", "Позвоните через 10 лет", "Нам не до вас"];
let timeAndDate = new Date();
let hours = timeAndDate.getHours();
let minutes = timeAndDate.getMinutes();


chatWidgetSide.onclick = function() {
    chatWidget.classList.add("chat-widget_active");
}



document.addEventListener("keydown", (event) => {
    if(event.code === "Enter" && chatWidgetInput.value !== "") {
        let randomAnswer = Math.floor(Math.random() * answers.length);
       messages.innerHTML += `
       <div class="message message_client">
         <div class="message__time"> ${hours}:${minutes} </div>
         <div class="message__text"> ${chatWidgetInput.value} </div>
          </div> 
       <div class="message">
            <div class="message__time"> ${hours}:${minutes}</div>
            <div class="message__text">${answers[randomAnswer]}
            </div>
            </div> `
          ;
         
    }
    
}
)
