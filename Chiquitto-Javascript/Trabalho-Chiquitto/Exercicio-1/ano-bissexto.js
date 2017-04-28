window.onload = () => {

    document.getElementById('botao').addEventListener('click',  saberAnoBissexto);

}

function saberAnoBissexto() {
    let campo = document.getElementById('ano');
    console.log(campo.value);

    if (((campo.value % 4 == 0) && (campo.value % 100 != 0)) || (campo.value % 400 == 0)) {
        window.alert('True');
    } else {
        window.alert('False');
    }

}

