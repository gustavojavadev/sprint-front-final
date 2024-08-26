function logar() {

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    console.log(login);
    console.log(senha);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
        "email": login,
        "senha": senha
    });

    console.log(raw);

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
    };

    if (login === 'admin' && senha === 'admin') {
        location.href = '../tela-admin/index.html';
    } else {
        fetch("http://localhost:8094/login", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                if (result) {
                    location.href = '../tela-funcionario/index.html';
                } else {
                    alert('Login ou senha inválidos!');
                }
            })
            .catch((error) => console.error(error));
    }

}