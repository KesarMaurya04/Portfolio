const tablinks=document.getElementsByClassName("tab-links");
const tabcontents=document.getElementsByClassName("tab-contents");
const opentab=(tabname)=>{
for(let tablink of tablinks){
    tablink.classList.remove("active-link");
}
for(let tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
event.currentTarget.classList.add("active-tab")
}
//to make website responsive
const sidemenu=document.getElementById("sidemenu");
const openmenu=()=>{
    sidemenu.style.right="0";
}
const closemenu=()=>{
    sidemenu.style.right="-200px";
}
//to connect google sheet
  const scriptURL = 'https://script.google.com/macros/s/AKfycbyL5umzMOQ9Sn4AFO_8DsfPEue_JNKKGvXWYJ2UR-Q1j9yZA-BCA82QHkW2UYeNQOPt/exec'
  const form = document.forms['submit-to-google-sheet'];
  const msg=document.getElementById("msg");

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
       
        msg.innerHTML="Message sent successfully";
       
        setTimeout(() => {
            msg.innerHTML="";
        },5000);//after 5 s mesg will disappear
        form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  });
