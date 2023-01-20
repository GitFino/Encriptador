    function encriptar() {

        ///console.log(document.getElementById("inputTexto"));
        ///console.log(document.getElementById("texto2"));
        var texto = document.getElementById("inputTexto").value;
        var txtCifrado = texto.replace(/e/igm, "enter");
        txtCifrado = txtCifrado.replace(/o/igm, "ober");
        txtCifrado = txtCifrado.replace(/i/igm, "imes");
        txtCifrado = txtCifrado.replace(/a/igm, "ai");
        txtCifrado = txtCifrado.replace(/u/igm, "ufat");

        document.getElementById("imgMunheco").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
    }


    function desencriptar() {
        /// console.log(document.getElementById("inputTexto"));
        /// console.log(document.getElementById("texto2"));

        var texto = document.getElementById("inputTexto").value;
        var txtCifrado = texto.replace(/enter/igm, "e");
        txtCifrado = txtCifrado.replace(/ober/igm, "o");
        txtCifrado = txtCifrado.replace(/imes/igm, "i");
        txtCifrado = txtCifrado.replace(/ai/igm, "a");
        txtCifrado = txtCifrado.replace(/ufat/igm, "u");

        document.getElementById("imgMunheco").style.display = "none";
        document.getElementById("texto").style.display = "none";
        document.getElementById("texto2").value = txtCifrado;
        document.getElementById("copiar").style.display = "block";
        document.getElementById("copiar").style.display = "inherit";

        document.getElementById("texto2").value = textoDesencriptado;
        document.getElementById("inputTexto").value = "";
        document.getElementById("imgMunheco").style.display = "block";
        document.getElementById("texto").style.display = "block";
        document.getElementById("copiar").style.display = "none";

    }


    async function copiar() {
        try {

            const texto = document.getElementById("texto2").value;
            await navigator.clipboard.writeText(texto);
            document.getElementById("texto2").value = "";
            alert("Texto copiado al portapapeles");
        } catch (err) {
            alert.error("Error al copiar el texto: ", err);
        }
    }

    function limpiar() {
        document.getElementById("inputTexto").value = "";

        document.getElementById("imgMunheco").style.display = "block";
        document.getElementById("texto").style.display = "block";
        document.getElementById("copiar").style.display = "none";
        document.getElementById("copiar").style.display = "inherit";

    }