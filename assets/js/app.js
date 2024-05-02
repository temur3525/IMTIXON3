
const formEl = document.querySelector(".form")
const input1El = document.querySelector(".input1")
const input2El = document.querySelector(".input2")
const input3El = document.querySelector(".input3")
const input4El = document.querySelector(".input4")
const input5El = document.querySelector(".input5")
const imgEl = document.querySelector(".img")





formEl.addEventListener("submit", (e) => {
    e.preventDefault()
    const img = document.createElement("img")
    
    img.className = "imgg"
    
    imgEl.appendChild(img)
    imgEl.prepend(img)
    
    img.src = input3El.value;
    input3El.value = ""
    })



const taskEl = document.querySelector(".task")
formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const divEl = document.createElement("div");
    const div1El = document.createElement("div1");
    const div2El = document.createElement("div2");
    const div3El = document.createElement("div3");
    const div4El = document.createElement("div4");
    const pEl = document.createElement("p");
    const p1El = document.createElement("p1");
    const p2El = document.createElement("p2");
    const p3El = document.createElement("p3");
    const p4El = document.createElement("p4");





  

    const TaomEl = document.createElement("button");
    const sanaEl = document.createElement("button");
    const taomtugaganEl = document.createElement("button");
    





    TaomEl.className = "btn1";
    sanaEl.className = "btn2";
    taomtugaganEl.className = "btn3";


    TaomEl.innerHTML = "Taomni o'chirish";
    sanaEl.innerHTML = "03.05.2024";
    taomtugaganEl.innerHTML = "Taom tugagan";


    divEl.appendChild(TaomEl)
    divEl.appendChild(sanaEl)
    divEl.appendChild(taomtugaganEl)




    const TaomnomiEl = document.createElement("p");
    const TaomnarxiEl = document.createElement("p");
    const TaomoshpaziEl = document.createElement("p");
    const TaomrestoraniEl = document.createElement("p");



    TaomnomiEl.className = "ps ";
    TaomnarxiEl.className = "ps1";
    TaomoshpaziEl.className = "ps2";
    TaomrestoraniEl.className = "ps3";



    TaomnomiEl.innerHTML = "Taom nomi:";
    TaomnarxiEl.innerHTML = "Taom narxi: $";
    TaomoshpaziEl.innerHTML = "Taomo shpazi:";
    TaomrestoraniEl.innerHTML = "Taom restorani:";


    divEl.appendChild(TaomnomiEl)
    divEl.appendChild(TaomnarxiEl)
    divEl.appendChild(TaomoshpaziEl)
    divEl.appendChild(TaomrestoraniEl)









    divEl.className = "card";

    div1El.className = "card1";

    div2El.className = "card2";

    div3El.className = "card3";

    div4El.className = "card4";
    pEl.className = "text";
    p1El.className = "text1";
    // p2El.className = "text2";
    p3El.className = "text3";
    p4El.className = "text4";
    p4El.innerHTML = input5El.value;
    pEl.innerHTML = input1El.value;
    p1El.innerHTML = input2El.value;
    // p2El.innerHTML = input3El.value;
    p3El.innerHTML = input4El.value;



    divEl.appendChild(pEl)
    div1El.appendChild(p1El)
    div2El.appendChild(p2El)
    div3El.appendChild(p3El)
    div4El.appendChild(p4El)

    taskEl.prepend(divEl)
    taskEl.prepend(div1El)
    taskEl.prepend(div2El)
    taskEl.prepend(div3El)
    taskEl.prepend(div4El)





    input1El.value = ""
    input2El.value = ""
    input3El.value = ""
    input4El.value = ""
    input5El.value = ""



    TaomEl.addEventListener("click", () => {
        pEl.classList.toggle("active")
      })
      
      TaomEl.addEventListener("click", () => {
        let agrees = confirm("uchirishga rozimisiz")
        if (agrees) {
         divEl .remove();
        }
      })


})



  
  
  







