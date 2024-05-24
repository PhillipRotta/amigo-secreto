let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo'); // linha 32 do HTML
    if (amigo.value == '') { // para não deixar adicionar a virgula quando não se põe o nome
        alert('Informe o nome do amigo!');
        return;
    }

    if(amigos.includes(amigo.value)) { // para não incluir o mesmo nome 
        alert('Nome já adicionado!');
        return;
    }


    let lista = document.getElementById('lista-amigos'); // linha 44 do HTML
    amigos.push(amigo.value);
    if (lista.textContent == '') {
    lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + ', ' + amigo.value;
    }
    amigo.value = '';
}

function sortear() {
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {

        if(i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }    
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}