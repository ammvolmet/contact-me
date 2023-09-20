function sendEmail() {
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let subject=document.getElementById("subject").value;
    let message=document.getElementById("message").value;

    let body="Name: " +name+"<br/> Email: "+email+"<br/> Subject: "+subject+"<br/> Message: "+message;
    Email.send({
        SecureToken: "80064f05-5473-431f-b6f0-02b095f6a154",
        To: 'vivekmadhyasia112@gmail.com',
        From: document.getElementById("email").value,
        Subject: subject,
        Body: body
    }).then(
        message => alert("messsage sent successfully")
    );
    }
      

     //SecureToken : "80064f05-5473-431f-b6f0-02b095f6a154"
          
       
