function validation(){
    let form = document.getElementById("myForm")
    let reg = document.querySelectorAll("#myForm div p")
    for(let i = 0; i < reg.length; i++){
        reg[i].remove()
    }
    let email = document.getElementById("email")
    let pass1 = document.getElementById("pass1")
    let pass2 = document.getElementById("pass2")
    let massage;
    if(email.value == 0){
        massage= document.createElement("p")
        massage.innerHTML=("შეავსეთ ველი")
        massage.style.color=("red")
        email.parentElement.appendChild(massage)
    }
    if(pass1.value == 0){
        massage= document.createElement("p")
        massage.innerHTML=("შეავსეთ ველი")
        massage.style.color=("red")
        pass1.parentElement.appendChild(massage)
    }
    if(pass2.value == 0){
        massage= document.createElement("p")
        massage.innerHTML=("შეავსეთ ველი")
        massage.style.color=("red")
        pass2.parentElement.appendChild(massage)
    }
    if(email.value!= 0 && pass1.value!= 0 && pass1.value!=pass2.value){
        massage= document.createElement("p")
        massage.innerHTML=("პაროლი არასწორია")
        massage.style.color=("red")
        pass2.parentElement.appendChild(massage)

    }
    if(email.value != "" && pass1.value != "" && pass1.value == pass2.value){
        let finalmassage= document.createElement("p")
        finalmassage.innerHTML=("წარმატებით გაიარეთ<br> რეგიტრაცია")
        finalmassage.style.color=("red")
        finalmassage.style.textAlign = "center"
        pass2.parentElement.appendChild(finalmassage)

    }
}