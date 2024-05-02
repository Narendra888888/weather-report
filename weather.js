const form=document.getElementById("form");
const input=document.getElementById("input");
const info=document.getElementById("cities");
const apiKey="444d927eb54762ab897efd111611340e";

form.addEventListener("submit",e=>{
    e.preventDefault();
    const inputValue=input.value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`;
    fetch(url)
       .then(response => response.json())
       .then(data =>{
          
         const { main, name } = data;
         const para = document.createElement("div");
         para.innerHTML =`<p>City:${name}</p><div>Temperature :${Math.round(main.temp)}
         <sup>0</sup>C</div>`;
         info.appendChild(para);
       }
    
       )
       .catch(()=>{
           alert("please enter a valid city");
    })
    
})