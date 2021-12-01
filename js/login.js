function login(){
    if ($("#useremail").val() != "" && $("#password").val()!="") {

        $.ajax({
            url:"http://132.226.250.48:8082/api/user/"+ $("#useremail").val() + "/" + $("#password").val(),
            type:"GET",
            contentType: "application/JSON",
            datatype: "JSON",
            error:function(result){
             console.log(result)
            },
            success:function(respuesta){
                if (respuesta.name === null) {
                    alert("La cuenta o la contraseña no concuerdan");
                    document.location.href="login.html";
                }
                else{
                    alert("Bienvenido " + respuesta.name + " a la aplicación");
                    if (respuesta.type === "ADM") 
                        document.location.href="admin.html";
                    else
                        document.location.href="index.html";
                }
            }
        });
    }
}
