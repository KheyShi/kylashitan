const fullName=document.getElementById("fullName")
const number=document.getElementById("number")
const email=document.getElementById("email")
const message=document.getElementById("message")
const forms=document.getElementById("forms")
const errorElement=document.getElementById("error")


form.addEventListener("submit", (e)=>{
    let popMessage=[]
    if(fullName.value.length<2 ){
        popMessage.push("Name is required")
    }
    if(number.value.length<11){
        popMessage.push("Number should be 11 digits")
    }
    if(!email.value .contains("@")){
        popMessage.push("Please use a proper email")
    }
    if(message.value.length<10){
        popMessage.push("Please explain further")
    }
    if(popMessages.length>0){
    e.preventDefeault()
    }
})
