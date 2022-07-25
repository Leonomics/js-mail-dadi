const subscribers = [ "luca@gmail.com", "marco@gmail.com", "paolo@gmail.com"];

let ePresente = false;
const saveButton = document.getElementById("checkEmail_button");


console.log(subscribers);



saveButton.addEventListener('click', function checkEmail(){


for (let i = 0; i < subscribers.length; i++)    {
    const emailCorrente = subscribers[i];

    let userEmail = document.getElementById('user_email').value;

    if(userEmail == emailCorrente) {
        //console.log(userEmail + " è presente")
        ePresente = true;
    }
    else  {
        //console.log(userEmail + " non è presente")
    }

}

if(ePresente)   {
    console.log("registered user");
    ePresente=false;
} else{
    console.log("email not registered");
}

});

