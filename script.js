let tablinks=document.querySelectorAll(".tab-links");
let tabcontents=document.querySelectorAll(".tab-contents");

function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


let sidemenu=document.querySelector("#sidemenu")

function openmenu(){
    sidemenu.style.right="0"
}

function closemenu(){
    sidemenu.style.right="-200px"
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbw-Xl0fDiwhHkhsBvCwxPk5OrGhYHWdGmlh8Us0vAgm-_1YHXDdwbXUB_eK1wZidzOk/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.querySelector("#msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })