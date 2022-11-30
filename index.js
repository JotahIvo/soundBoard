const listaSons = document.querySelectorAll('.som');
const listaBotoes = document.querySelectorAll('.tecla');

function tocaSom(som){
    if(som === null){
        console.log('Elemento não encontrado!');
    } else {
        som.play();
    };
};

for(let i = 0; i < listaBotoes.length; i++){
    listaBotoes[i].addEventListener('click', () => {
        tocaSom(listaSons[i]);
    });

    listaBotoes[i].addEventListener('keydown', (event) => {
        if(event.code === 'Space' || event.code === 'Enter'){
            console.log(event.code);
            listaBotoes[i].classList.add('ativa');
        };
        
        setTimeout(() => {
            listaBotoes[i].classList.remove('ativa');
        }, 100);
    });
};

//Outra solução: pega o nome da classe e toca o som de acordo com o id do audio
/*
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
};

const listaBotoes = document.querySelectorAll('.tecla');

for(let i = 0; i < listaBotoes.length; i++){
    listaBotoes[i].onclick = () =>{
        const classe = listaBotoes[i].classList[1]; 
        tocaSom('#som_' + classe); // `som_${classe}` template string
    };
};*/