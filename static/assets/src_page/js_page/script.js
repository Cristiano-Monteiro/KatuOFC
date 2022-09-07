let opcoes_calendario = document.querySelector('.opcoes_calendario');
let caixa_upload = document.querySelector('.caixa_upload');

function abrir_calendario(){
    opcoes_calendario.classList.toggle('display_none');
    caixa_upload.classList.add('display_none');
};

function abrir_caixa_upload(){
    caixa_upload.classList.toggle('display_none');
    opcoes_calendario.classList.add('display_none');
};

function voltar_para_inicio(){
    caixa_upload.classList.add('display_none');
    opcoes_calendario.classList.add('display_none');
};