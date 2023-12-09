console.log("index.js");
const formContact = document.getElementById("formContact");
if (formContact) {
  formContact.addEventListener("submit", enviarMensaje);
}

function enviarMensaje(e) {
  e.preventDefault();
  const btnEnviar = document.getElementById("btnEnviar");
  btnEnviar.disabled = true;
  btnEnviar.innerHTML = "<span class='spinner-border spinner-border-sm' aria-hidden='true'></span> Enviando";

  const serviceID = "default_service";
  const templateID = "template_9u5f56f";

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      btnEnviar.innerHTML = "Enviar";
      btnEnviar.disabled = false;
      Swal.fire({
        text: "Mensaje Enviado!",
        icon: "success",
      });
    },
    (err) => {
      btnEnviar.innerHTML = "Enviar";
      btnEnviar.disabled = false;
      Swal.fire({
        text: "Error en el envio del mensaje, puedes optar por contactar via WhatsApp!",
        icon: "error",
      });
      alert(JSON.stringify(err));
    }
  );
}
