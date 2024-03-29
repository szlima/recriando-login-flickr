const emailInput= document.querySelector("#email");
const descEmailLabel= document.querySelector("#descricao-email");

const senhaInput= document.querySelector("#senha");
const descSenhaLabel= document.querySelector("#descricao-senha");
const olharSenhaButton= document.querySelector("#olhar-senha");

const proximaButton= document.querySelector("#botao-proxima");
const msgLoginLabel= document.querySelector("#msg-login");

const alertaDiv=document.querySelector("#alerta");
const areaPrincipalDiv= document.querySelector("#principal");
const tentarNovamButton= document.querySelector("#botao-tentar");
const continueYahooButton= document.querySelector("#botao-continue-yahoo");

const loginButton= document.querySelector("#botao-login");
const lembrarEmailCheck= document.querySelector("#lembrar-email");

let digitouEmail= false;
let digitouSenha= false;
const EMAIL_TESTE= "email@email.com";
const SENHA_TESTE= "senha";

window.onload= () => {
    emailInput.focus();
    emailInput.value= "";
    senhaInput.value= "";    
};

// --------------------------------------------------------

emailInput.addEventListener('keypress', () => {
    digitouEmail= true;
});

emailInput.addEventListener('focusin', () => {
    descEmailLabel.classList.add("descricao-login-menor");
});

emailInput.addEventListener('focusout', () => {

    const valorEmail= emailInput.value;
    
    if(valorEmail === ""){
        descEmailLabel.classList.remove("descricao-login-menor");

        if(digitouEmail)
            definirObrigatorio(emailInput, descEmailLabel);  
    
    }else{        
        if(emailInput.classList.contains("campo-obrigatorio"))            
            removerObrigatorio(emailInput, descEmailLabel);        
    }
});

// --------------------------------------------------------

proximaButton.addEventListener('click', (e) => {
    e.preventDefault();

    const valorEmail= emailInput.value;

    if(valorEmail === ""){
        definirObrigatorio(emailInput, descEmailLabel);
        return;

    }else{
        const regex= /^[a-z]\w*@[a-z]+\.[a-z]+$/;

        if(!regex.test(valorEmail)){
            alertaDiv.classList.remove("oculto");
            areaPrincipalDiv.classList.add("segundo-plano");

            return;
        }       
    }
    
    const senhaDiv= document.querySelector("#campo-senha");
    const concluiLoginDiv= document.querySelector("#conclui-login");
    proximaButton.classList.add("oculto");    
    senhaDiv.classList.remove("oculto");
    concluiLoginDiv.classList.remove("oculto");
    senhaInput.focus();
});

// --------------------------------------------------------

tentarNovamButton.addEventListener('click', () => {
    alertaDiv.classList.add("oculto");
    areaPrincipalDiv.classList.remove("segundo-plano");
});

continueYahooButton.addEventListener('click', () => {   
    window.location.replace("https://login.yahoo.com/");
});

// --------------------------------------------------------

senhaInput.addEventListener('keypress', () => {
    digitouSenha= true;
});

senhaInput.addEventListener('focusin', () => {
    descSenhaLabel.classList.add("descricao-login-menor");
});

senhaInput.addEventListener('focusout', () => {

    const valorSenha= senhaInput.value;
    
    if(valorSenha === ""){
        descSenhaLabel.classList.remove("descricao-login-menor");

        if(digitouSenha)
            definirObrigatorio(senhaInput, descSenhaLabel);
    }else{
        if(senhaInput.classList.contains("campo-obrigatorio"))
            removerObrigatorio(senhaInput, descSenhaLabel);
    }
});

olharSenhaButton.addEventListener('click', () => {

    olharSenhaButton.classList.toggle('fa-eye');
    olharSenhaButton.classList.toggle('fa-eye-slash');

    if(senhaInput.getAttribute('type') === 'password')
        senhaInput.setAttribute('type', 'text');
    else
        senhaInput.setAttribute('type', 'password');

    senhaInput.focus();
});

// --------------------------------------------------------

loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    if(senhaInput.value != "" && senhaInput.value != ""){
        
        if((emailInput.value === EMAIL_TESTE) && (senhaInput.value === SENHA_TESTE)){
            alert(`Fazendo login...\nLembrar e-mail? ${lembrarEmailCheck.checked}`);
            document.location.reload();
        }else{
            const loginInvalidoParag= document.querySelector("#login-invalido");
            loginInvalidoParag.classList.remove("oculto");            
        }
    }         
});

// --------------------------------------------------------

function definirObrigatorio(input, label){
    input.classList.add("campo-obrigatorio");
    label.classList.add("obrigatorio");
    label.classList.add("em-branco");
    msgLoginLabel.classList.add("obrigatorio");
    msgLoginLabel.textContent= "Obrigatório";    
}
            
function removerObrigatorio(input, label){
    input.classList.remove("campo-obrigatorio");
    label.classList.remove("obrigatorio");
    label.classList.remove("em-branco");
    msgLoginLabel.classList.remove("obrigatorio");
    msgLoginLabel.textContent= "";
}

