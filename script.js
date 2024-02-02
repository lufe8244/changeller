function encriptar() {
  var inputText = document.getElementById("inputText").value;
  var outputText = btoa(inputText); // Codificación Base64
  document.getElementById("outputText").value = outputText;
}

function desencriptar() {
  var inputText = document.getElementById("inputText").value;
  try {
    var outputText = atob(inputText); // Decodificación Base64
    document.getElementById("outputText").value = outputText;
  } catch (error) {
    alert("El texto no está en un formato válido para desencriptar.");
  }
}
