// console.log("hello world");


//Select the required 
let apiKey = "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";
let answer = document.querySelector(".answer");
let answerPara = document.querySelector(".answer-para");
let sendBtn = document.querySelector(".sendBtn");
let input = document.querySelector(".input");
let h1 = document.querySelector(".title");




function getAnswer(userMessage){
    fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: "deepseek/deepseek-r1-0528:free",
          messages: [
            { role: "user", content: userMessage }
          ]

       
        })
    
      })
      .then(res => {
        if (!res.ok) {
          throw new Error(`API error: ${res.status}`);
          answer.innerHTML = "oops an error occured"
        }
        return res.json();
      })
      .then(result => {
        console.log(result.choices[0].message.content);
       answerPara.innerHTML = result.choices[0].message.content;
      })
      .catch(err => {
        console.error("API Error:", err);
      });
      
}


sendBtn.addEventListener("click", function () {
    const question = input.value.trim();
    if (!question) return;
    answerPara.innerHTML = "Thinking...";
    h1.innerHTML = "";
    getAnswer(question);
    input.value = "";
  });
  







