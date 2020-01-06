var bd = JSON.parse(localStorage.getItem('results'));

var estado_Hover_Perfil = true;
function funcaoAbrirChat(){
    var openChat = perfil["funcaoOpenChat"];
    openChat();
}
function funcaoCarregarMsgs(){
    var loadChat = perfil["funcaoLoadMsgs"];
    loadChat();
}
function funcaoFeedReal(){
    var feedReal = perfil["funcaoFeedRealobj"];
    feedReal();
}
function funcaoCriaInputs(){
    var criaInpt = perfil["funcaoCriarInputs"];
    criaInpt();
}
function funcaoSair(){
    var sair = perfil["funcaoDeslogar"];
    sair();
}
function funcaoAdicionarUser(indice, i){
    var funcaoAdd = perfil["funcaoAddUser"];
    funcaoAdd(indice, i);
}
function funcaoPerfilEsquerda(){

}
function funcaoPerfilDireita(){

}
function funcaoInitPerfis(){
    var init = perfil["initPerfis"];
    init();
}
var contGb = 0;
function funcaoGerarFeed(){
    var perfil = bd.perfisUsuarios[bd.indicePerfilLogado];
    var arrayAux = perfil.split("*");
    var perfisAdicionados = arrayAux[5];
    var content = "";
    var resFeed = document.getElementById('res-feed-sugestoes');
    var contInterno = 0;
    resFeed.style.display = 'grid';
    document.getElementById('exibicao-itens').style.display = 'none';
    funcaoAbrirMenu();
    if(contGb >= 1 && perfisAdicionados == "/"){
        var divsIndices = document.getElementsByClassName('indice');
        divsIndices.length = 0;
        divsIndices = [];
    }
    
    if(perfisAdicionados == "/"){
        contGb++;
        for(var i in bd.perfisUsuarios){
            var perfilEspec = bd.perfisUsuarios[i];
            var arrayAuxEspec = perfilEspec.split("*");
            var nome = arrayAuxEspec[0];
            var foto = arrayAuxEspec[3];
            if(bd.indicePerfilLogado == i){
                content += ``;
            }
            else{
                contInterno++;
                content += `<div class="indice">
                                <img src='${foto}'>
                                <div>
                                    <h1> ${nome} <i class="fas fa-wrench"></i> </h1>
                                </div>
                                <button onclick="funcaoAdicionarUser('${contInterno}', '${i}')" class="botao" style="background-color: orange">Seguir</button>
                            </div>`;
            }
        }
        if(i > 5){
            var linhas = Math.trunc(i / 5);
        }
        else{
            var linhas = 1;
        }
        resFeed.style.gridTemplateRows = linhas;
        resFeed.innerHTML = content;
        
    }
    else{
        funcaoFeedReal();
    }
}
function funcaoAlteraDados(){
    var botao = document.getElementById('botao-alterar');
    var i = document.getElementById('i-alterar');
    botao.style.backgroundColor = 'orange';
    botao.style.border = '3px solid greenyellow';
    botao.style.color = 'white';
    i.style.color = 'white';
    setTimeout( () => {
        botao.style.backgroundColor = 'rgba(255, 166, 0, 0.452)';
        botao.style.border = '3px solid orange';
        botao.style.color = 'black';
        i.style.color = 'orange';
    }, 700);
    var alteraDados = perfil["funcaoAlterarDados"];
    alteraDados();
}

function funcaoCarregarFotoHover(){
    var carregarHover = perfil["funcaoCarregarHover"];
    carregarHover();
}
var perfisOrganizados = [];
var perfisOrganizadosIndices = [];
var indiceGb = 0;

function Perfil(status){
    var primeiroPerfil = perfil["funcaoPerfis"];
    if(perfisOrganizados.length == 0){
        window.alert('nenhum perfil');
    }
    else{
        if(status == 'DIMINUI' && indiceGb != 0){
            indiceGb--;
            primeiroPerfil();
        }
        else{
            if(status == 'AUMENTA' && indiceGb != perfisOrganizados.length-1){
                indiceGb++;
                primeiroPerfil();
            }
            else{
                if(status == 'MANTEM'){
                    primeiroPerfil();
                }
                else{
                    if(perfisOrganizados.length == 0){
                        window.alert("nenhum user");
                    }
                }
            }
        }
    }
        
        
}
var contadorGeral = 0;
function funcaoAddUser(indicePerfis){
    var adicionarUsuario = perfil["funcaoAddUser1"];
    adicionarUsuario(indicePerfis);
}
function funcaoExibirMsgs(){
    var cont;
    var menorIndice = 0;
    var contRisco = 0;
    for(var i = 0; i < mensagens.length; i++){
        
        var now = new Date();
        var hoje = now.getDate();
        var mesSistema = now.getMonth();
        cont = 0;
        for(var j = i; j < mensagens.length; j++){
            if(cont == 0){
                var arrayStatus = mensagens[j].split("§");
                var recebidaOrEnviada = arrayStatus[1];
                var arrayMensagens = arrayStatus[0].split("¢");
                var arrayTimestemp = arrayMensagens[0].split("¬");
                var menorHoras = arrayTimestemp[0];
                var menorMinutos = arrayTimestemp[1];
                var menorSegundos = arrayTimestemp[2];
                var menorDia = arrayTimestemp[3];
                var menorMes = arrayTimestemp[4];
                if(menorMes == mesSistema){
                    cont++;
                }
                else{
                    contRisco++;
                }
                menorIndice = j;
            }
            else{
                var arrayStatus1 = mensagens[j].split("§");
                var recebidaOrEnviada1 = arrayStatus1[1];
                var arrayMensagens1 = arrayStatus1[0].split("¢");
                var arrayTimestemp1 = arrayMensagens1[0].split("¬");
                var horas = arrayTimestemp1[0];
                var minutos = arrayTimestemp1[1];
                var segundos = arrayTimestemp1[2];
                var dia = arrayTimestemp1[3];
                var mes = arrayTimestemp1[4];
                if(mesSistema == mes){
                    if(dia < menorDia){
                        menorDia = dia;
                        menorHoras = horas;
                        menorMinutos = minutos;
                        menorSegundos = segundos;
                        menorIndice = j;
                    }
                    else{
                        if(dia == menorDia){
                            if(horas < menorHoras){
                                menorHoras = horas;
                                menorMinutos = minutos;
                                menorSegundos = segundos;
                                menorIndice = j;
                            }
                            else{
                                if(horas == menorHoras){
                                    if(minutos < menorMinutos){
                                        menorMinutos = minutos;
                                        menorSegundos = segundos;
                                        menorIndice = j;
                                    }
                                    else{
                                        if(minutos == menorMinutos){
                                            if(segundos < menorSegundos){
                                                menorSegundos = segundos;
                                                menorIndice = j;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }//fim do for j
        if(contRisco == mensagens.length - 1){
            window.alert("Nenhuma mensagem deste mês");
            i = mensagens.length;
        }
        else{
            var stringMenor = mensagens[menorIndice];
            mensagens[menorIndice] = mensagens[i];
            mensagens[i] = stringMenor;
        }
    }//fim for do i
    for(var o in mensagens){
        console.log("organizado = " + mensagens[o]);
    }
}
function funcaoSendMsg(indiceUserEspec){
    var perfilReceptor = bd.perfisUsuarios[indiceUserEspec];
    var arrayRec = perfilReceptor.split("*");
    var email = arrayRec[1];
    var localEnvio = bd.chatUsersEnviadas[bd.indicePerfilLogado];
    var receptor = bd.chatUsersRecebidas[indiceUserEspec];
    //mensagem
    var inputTexto = document.querySelector('#campo-texto-entrada').value;
    var now = new Date();
    
    var dataHora = [now.getHours(), now.getMinutes(), now.getSeconds(), now.getDate(), now.getMonth()];
    for(var i in inputTexto){
        if(inputTexto[i] == "¬" || inputTexto[i] == "¢" || inputTexto[i] == "&"){
            inputTexto[i] = "?";
        }
    }
    var horaDataCompleta = dataHora.join("¬");
    var arrayDataHora = horaDataCompleta.split('¬');
    var hora = arrayDataHora[0];
    var minutos = arrayDataHora[1];
    var segundos = arrayDataHora[2];
    var dia = arrayDataHora[3];
    var mes = arrayDataHora[4];
    //olhar a ordem aqui da data
    var stringMensagem = horaDataCompleta + "¢" + inputTexto + "¢" + bd.indicePerfilLogado + "¢" + "naoVisualizada";
    var stringMensagem1 = horaDataCompleta + "¢" + inputTexto + "¢" + indiceUserEspec + "¢" + "visualizada";
    localEnvio += '&';
    localEnvio += stringMensagem1;
    receptor += '&';
    receptor += stringMensagem;
    bd.chatUsersEnviadas[bd.indicePerfilLogado] = localEnvio;
    bd.chatUsersRecebidas[indiceUserEspec] = receptor;
    localStorage.setItem('results', JSON.stringify(bd));
    funcaoOpenBatePapo(email);

}
//array de mensagens a serem exibidas
var mensagens = [];

function funcaoOpenBatePapo(identificador){
    var content = "";
    var contentInformacoes = "";
    var divBatePapo = document.getElementById('div-bate-papo');
    var batePapo = document.getElementById('bate-papo');
    var informacoes = document.getElementById('informacoes-user');
    var campoTexto = document.querySelector('#campo-texto');
    for(var j = 0; j < bd.perfisUsuarios.length; j++){
        var arrayUser = bd.perfisUsuarios[j].split("/");
        var userLogado = arrayUser[0];
        var arrayInfoUserLogado = userLogado.split("*");
        var emailReal = arrayInfoUserLogado[1];
        if(emailReal == identificador){
            var indiceUserEspec = j;
            j = bd.perfisUsuarios.length;
        }
    }
    var userIdentificado = bd.perfisUsuarios[indiceUserEspec];
    var arrayIdentificado = userIdentificado.split("*");
    var nome = arrayIdentificado[0];
    var foto = arrayIdentificado[3];
    var arrayNome = nome.split(" ");
    if(bd.onlineOrOffline[indiceUserEspec] == "online"){
        contentInformacoes += ` <div>
                                    <img src='${foto}' alt='foto-perfil'>
                                </div>
                                <div>
                                    <p>${arrayNome[0]}</p>
                                </div>
                                <div>
                                    <i style="  color: greenyellow;" class="fas fa-hiking"></i>
                                </div>`;
    }
    else{
        contentInformacoes += ` <div>
                                    <img src='${foto}' alt='foto-perfil'>
                                </div>
                                <div>
                                    <p>${arrayNome[0]}</p>
                                </div>
                                <div>
                                    <i style="  color: orange;" class="fas fa-hiking"></i>
                                </div>`;
    }
    var contentCampoTexto = `
                                <input type="text" id="campo-texto-entrada" placeholder="Escreva aqui">
                                <button onclick="funcaoSendMsg('${indiceUserEspec}')" type="button">Enviar</button>`;
    informacoes.innerHTML = contentInformacoes;
    campoTexto.innerHTML = contentCampoTexto;
    
    content += `
                    <ul>`;
    
    if(!statusBatePapoOpen){
        funcaoAbrirChat();
        divBatePapo.style.display = 'grid';
        divBatePapo.style.position = 'fixed';
        divBatePapo.style.marginLeft = String( ( Math.trunc( window.innerWidth - 600) ) )  + 'px';
        divBatePapo.style.top = String( (window.innerHeight) + 300 ) + 'px';
        setTimeout( () => {
            divBatePapo.style.top = String( (window.innerHeight) - 600) + 'px';
            statusBatePapoOpen = true;
        }, 1000);
    }
    var localEnvio = bd.chatUsersEnviadas[bd.indicePerfilLogado];
    var receptor = bd.chatUsersRecebidas[bd.indicePerfilLogado];
    var arrayEnviadas = localEnvio.split("&");
    var arrayRecebidas = receptor.split("&");
    if(arrayEnviadas.length == 1 && arrayRecebidas.length == 1){
        content += `<li><div id="chat-vazio"><p>Vázio</p></div></li>`;
    }
    else{
        for(var i = 1; i < arrayEnviadas.length; i++){
            var arrayAux = arrayEnviadas[i].split("¢");
            var indiceConversa = arrayAux[2];
            if(indiceConversa == indiceUserEspec){
                mensagens.push(arrayEnviadas[i] + "§" + "ENVIADA");
            }
        }
        for(var k = 0; k < arrayRecebidas.length; k++){
            var arrayAux1 = arrayRecebidas[k].split("¢");
            var indiceReceptor = arrayAux1[2];
            if(indiceReceptor == indiceUserEspec){
                if(arrayAux1[3] == "naoVisualizada"){
                    var newString = arrayAux1[0] + "¢" + arrayAux1[1] + "¢" + arrayAux1[2] + "¢" + "visualizada";
                    arrayRecebidas[k] = newString;
                }
                mensagens.push(arrayRecebidas[k] + "§" + "RECEBIDA");
            }
        }
        var novosRecebidos = arrayRecebidas.join("&");
        console.log(novosRecebidos);
        bd.chatUsersRecebidas[bd.indicePerfilLogado] = novosRecebidos;
        localStorage.setItem('results', JSON.stringify(bd));
        for(var l in mensagens){
            console.log(mensagens[l]);
        }
        funcaoExibirMsgs();
    }
    content += `</ul>`;
    batePapo.innerHTML = content;
    
}
function funcaoReiderizarChat(){
    for(var i in posicoesDasCores){
        var icone = document.getElementById(`${posicoesDasCores[i]}`);
        icone.style.color = cores[i];
    }
    posicoesDasCores = [];
    cores = [];
}
var statusChatOpen = false;
var statusBatePapoOpen = false;
var contadorDePerfis = 0;
var posicoesDasCores = [];
var cores = [];
var perfil = {
    "funcaoLoadMsgs" : () => {
        var msgEnviadas = bd.chatUsersEnviadas[bd.indicePerfilLogado];
        var msgRecebidas = bd.chatUsersRecebidas[bd.indicePerfilLogado];
        var perfis = bd.perfisUsuarios[bd.indicePerfilLogado];
        var arrayPerfil = perfis.split('/');
        var userLogado = arrayPerfil[0];
        var arrayAdicionados = arrayPerfil[1].split('-');
        var chatNav = document.getElementById('chat-inteiro');
        var content = "";
        if(msgRecebidas == ' '){
            content += "<ul>";
            for(var i in arrayAdicionados){
                var perfilEspec = arrayAdicionados[i];
                var arrayUserAdicionado = perfilEspec.split('*');
                var nome = arrayUserAdicionado[0];
                var foto = arrayUserAdicionado[3];
                var email = arrayUserAdicionado[1];
                var arrayNome = nome.split(" ");
                if(arrayAdicionados.length - 1 == i){
                    //espaço a mais que estava carregando
                }
                else{
                    if(arrayNome.length > 1){
                        content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${arrayNome[0]}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div></li>`;
                    }
                    else{
                        content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${nome}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div></li>`;
                    }
                    for(var j = 0; j < bd.perfisUsuarios.length; j++){
                        var arrayUser = bd.perfisUsuarios[j].split("/");
                        var userLogado = arrayUser[0];
                        var arrayInfoUserLogado = userLogado.split("*");
                        var emailReal = arrayInfoUserLogado[1];
                        if(emailReal == email){
                            var indiceUserEspec = j;
                            j = bd.perfisUsuarios.length;
                        }
                    }
                    var perfil = bd.onlineOrOffline[indiceUserEspec];
                    if(perfil == "online"){
                        cores.push('greenyellow');
                        posicoesDasCores.push(`${contadorDePerfis}`);
                    }
                    else{
                        cores.push('orange');
                        posicoesDasCores.push(`${contadorDePerfis}`);
                    }
                    contadorDePerfis++;
                }//fim do else
                
            }//fim do for do i
            content += "</ul>"; 
            chatNav.innerHTML = content;
            funcaoReiderizarChat();
        }
        else{
            content += "<ul>";
            for(var i in arrayAdicionados){
                var perfilEspec = arrayAdicionados[i];
                var arrayUserAdicionado = perfilEspec.split('*');
                var nome = arrayUserAdicionado[0];
                var foto = arrayUserAdicionado[3];
                var email = arrayUserAdicionado[1];
                var arrayNome = nome.split(" ");
                var arrayMsgsRecebidas = msgRecebidas.split("&");
                var contadorDeMensagensRecebidas = 0;
                for(var k in bd.perfisUsuarios){
                    var arrayEmBuscaEmail = bd.perfisUsuarios[k].split("*");
                    var emailUserPerfisUsuarios = arrayEmBuscaEmail[1];
                    if(emailUserPerfisUsuarios == email){
                        var indiceRealDesteUser = k;
                    }
                }
                for(var j = 1; j < arrayMsgsRecebidas.length; j++){
                    var arrayMsgEspec = arrayMsgsRecebidas[j].split("¢");
                    var indiceMgs = arrayMsgEspec[2];
                    if(indiceMgs == indiceRealDesteUser && arrayMsgEspec[3] == "naoVisualizada"){
                        contadorDeMensagensRecebidas++;
                    }
                }
                if(arrayAdicionados.length - 1 == i){
                    //espaço a mais que estava carregando
                }
                else{
                    if(arrayNome.length > 1){
                        if(contadorDeMensagensRecebidas > 0){
                            if(contadorDeMensagensRecebidas > 9){
                                content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${arrayNome[0]}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div>  <div class="quant-msgs"><p>${'9+'}</p></div></li>`;
                            }
                            else{
                                content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${arrayNome[0]}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div>  <div class="quant-msgs"><p>${contadorDeMensagensRecebidas}</p></div></li>`;
                            }
                        }
                        else{
                            content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${arrayNome[0]}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div></li>`;
                        }
                        
                    }
                    else{
                        if(contadorDeMensagensRecebidas > 0){
                            if(contadorDeMensagensRecebidas > 9){
                                content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${nome}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div>  <div class="quant-msgs"><p>${'9+'}</p></div></li>`;
                            }
                            else{
                                content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${nome}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div>  <div class="quant-msgs"><p>${contadorDeMensagensRecebidas}</p></div></li>`;
                            }
                        }
                        else{
                            content += `<li onclick="funcaoOpenBatePapo('${email}')"><div><img src="${foto}"></div><div><p>${nome}</p></div><div><i class="fas fa-wrench" id="${contadorDePerfis}"></i></div></li>`;
                        }
                    }
                    var perfil = bd.onlineOrOffline[indiceRealDesteUser];
                    if(perfil == "online"){
                        cores.push('greenyellow');
                        posicoesDasCores.push(`${contadorDePerfis}`);
                    }
                    else{
                        cores.push('orange');
                        posicoesDasCores.push(`${contadorDePerfis}`);
                    }
                    contadorDePerfis++;
                }//fim do else
                
            }
            content += "</ul>"; 
            chatNav.innerHTML = content;
            funcaoReiderizarChat();
        }
    },
    "funcaoOpenChat": () => {
        var chat = document.getElementById('chat-inteiro');
        var batePapo = document.getElementById('div-bate-papo');
        if(!statusChatOpen){
            chat.style.display = 'block';
            chat.style.marginLeft = String( window.innerWidth + 310) + 'px';
            statusChatOpen = true;
            setTimeout( () => {
                chat.style.marginLeft = String( window.innerWidth - 290) + 'px';
            }, 700);
            if(statusBatePapoOpen){
                batePapo.style.top = String( (window.innerHeight) + 300 ) + 'px';
                setTimeout( () => {
                    batePapo.style.display = 'none';
                }, 1000);
                statusBatePapoOpen = false;
                mensagens = [];
            }
            funcaoCarregarMsgs();
        }
        else{
            chat.style.marginLeft = '200%';
            statusChatOpen = false;
            setTimeout( () => {
                chat.style.display = 'none';
            }, 700);
        }
    },
    "funcaoAddUser1" : (indicePerfis) => {
        var arrayAux2 = bd.perfisUsuarios[indicePerfis].split("/");
        var addUser = arrayAux2[0];
        var userLogado = bd.perfisUsuarios[bd.indicePerfilLogado];
        userLogado += addUser;
        var arrayAux1 = userLogado.split("/");
        var selecionados = "";
        for(var i = 1 in arrayAux1){
            selecionados += arrayAux1[i];
            if(i == 0){
                selecionados += "/";
            }
            else{
                selecionados += "-";
            }
        }
        var newString = selecionados;
        bd.perfisUsuarios[bd.indicePerfilLogado] = newString;
        perfisOrganizados.splice(indiceGb, 1);
        perfisOrganizadosIndices.splice(indiceGb, 1);
        indiceGb--;
        if(perfisOrganizados.length == 0){
            document.getElementById('sugestoes-seguir').style.display = 'none';
        }
        else{
            if(indiceGb == perfisOrganizados.length-1){
                Perfil('DIMINUI');
            }
            else{
                Perfil('AUMENTA');
            }
        }
        localStorage.setItem('results', JSON.stringify(bd));
    },
    "funcaoPerfis": () => {
        var perfil = perfisOrganizados[indiceGb];
        var perfilIndice = perfisOrganizadosIndices[indiceGb];
        console.log(indiceGb);
        var arrayAux = perfil.split("*");
        var nome = arrayAux[0];
        var foto = arrayAux[3];
        var container = document.getElementById('sugestoes-seguir');
        
        var content = ` <div class="setas">
                            <i onclick="Perfil('DIMINUI')" class="fas fa-wrench esquerda"></i>
                        </div>
                        <div class="indice1">
                            <img src='${foto}'>
                            <div>
                                <h1> ${nome} <i class="fas fa-wrench"></i> </h1>
                            </div>
                            <button onclick="funcaoAddUser('${perfilIndice}')" class="botao" style="background-color: orange">Seguir</button>
                        </div>
                        <div class="setas">
                            <i onclick="Perfil('AUMENTA')" class="fas fa-wrench direita"></i>
                        </div>`;
        container.innerHTML = content;
        
    },
    "initPerfis": () => {
        var perfil = bd.perfisUsuarios[bd.indicePerfilLogado];
        var arrayAux = perfil.split("/");
        var usuarioLogado = arrayAux[0];
        var arrayUsuarioLogado = usuarioLogado.split("*");
        var adicionados = arrayAux[1];
        var iguais = true;
        var arrayAdicionados = adicionados.split("-");
        for(var i = 0; i < bd.perfisUsuarios.length; i++){
            iguais = false;
            var perfilUser = bd.perfisUsuarios[i];
            var arrayPerfilUsuario = perfilUser.split("*");
            var emailUser = arrayPerfilUsuario[1];
            for(var j = 0; j < arrayAdicionados.length; j++){
                var arrayAdicionadosEspecifico = arrayAdicionados[j].split("*");
                var nome = arrayAdicionadosEspecifico[0];
                var email = arrayAdicionadosEspecifico[1];
                var senha = arrayAdicionadosEspecifico[2];
                var foto = arrayAdicionadosEspecifico[3];
                var legenda = arrayAdicionadosEspecifico[4];
                if(emailUser == email || emailUser == arrayUsuarioLogado[1]){
                    iguais = true;
                }
                console.log("adicionados" + email);
            }
            if(!iguais){
                console.log("email diferente" + emailUser);
                perfisOrganizados.push(perfilUser);
                perfisOrganizadosIndices.push(i);
            }
            else{
                //emails iguais
            }
        }
        Perfil('MANTEM');
    },
    "funcaoFeedRealobj": () => {
        var exibicao = document.getElementById('exibicao-itens');
        exibicao.style.display = 'block';
        document.getElementById('res-feed-sugestoes').style.display = 'none';
        var i = 0;
        var content = "";
        content += `<section id="sugestoes-seguir">
                        
                    </section>`;
        exibicao.innerHTML = content;
        funcaoInitPerfis();
    },
    "funcaoAddUser" : (indice, indicePerfis) => {
        
        var perfil = document.getElementsByClassName('indice')[indice-1];
        perfil.style.opacity = '0';
        console.log(indice);
        setTimeout( () => {
            perfil.style.display = 'none';
        }, 1000);
        var arrayAux2 = bd.perfisUsuarios[indicePerfis].split("/");
        var addUser = arrayAux2[0];
        var userLogado = bd.perfisUsuarios[bd.indicePerfilLogado];
        userLogado += addUser;
        var arrayAux1 = userLogado.split("/");
        var selecionados = "";
        for(var i = 1 in arrayAux1){
            selecionados += arrayAux1[i];
            if(i == 0){
                selecionados += "/";
            }
            else{
                selecionados += "-";
            }
        }
        var newString = selecionados;
        bd.perfisUsuarios[bd.indicePerfilLogado] = newString;
        localStorage.setItem('results', JSON.stringify(bd));
    },
    "funcaoCarregarHover": () => {
        var perfil = bd.perfisUsuarios[bd.indicePerfilLogado];
        var arrayAux = perfil.split('*');
        var foto = arrayAux[3];
        var img_Hover = document.getElementById('foto-perfil1');
        img_Hover.style.transitionDuration = '1s';  
        if(estado_Hover_Perfil){
            img_Hover.src = 'logodestaques1.png';
            estado_Hover_Perfil = false;
        }
        else{
            img_Hover.src = foto;
            estado_Hover_Perfil = true;
        }
    },
    "funcaoAlterarDados": () => {
        var perfil = bd.perfisUsuarios[bd.indicePerfilLogado];
        var arrayAux = perfil.split('*');
        var foto = arrayAux[3];
        var arrayAux1 = perfil.split("/");
        var selecionados = arrayAux1[1];
        var newName = document.getElementById('name-perfil').value;
        var newEmail = document.getElementById('email-perfil').value;
        var newSenha = document.getElementById('senha-perfil').value;
        var newSenha1 = document.getElementById('senha-perfil1').value;
        var newLegenda = document.getElementById('legenda-perfil').value;
        if(newSenha != newSenha1){
            window.alert('senhas diferentes');
        }
        else{
            var newString = newName + "*" + newEmail + "*" + newSenha + "*" + foto + "*" + newLegenda + "*" + "/" + selecionados;
            bd.perfisUsuarios[bd.indicePerfilLogado] = newString;
            localStorage.setItem('results', JSON.stringify(bd));
            window.location.href = 'formulario.html';
        }
    },
    "funcaoCriarInputs": () => {
        var perfil = bd.perfisUsuarios[bd.indicePerfilLogado];
        var arrayAux = perfil.split('*');
        var nome = arrayAux[0];
        var email = arrayAux[1];
        var senha = arrayAux[2];
        var legenda = arrayAux[4];
        var div_exibicao = document.getElementById('exibicao-itens');
        var content = ` 
                        <section id="formulario-alteracao">
                            <h1>Altere os Dados a seguir</h1>
                            <form action="#">
                                </br>
                                <label for="name-perfil">Digite o novo nome : </label>
                                <input id="name-perfil" type="text" value='${nome}'>
                                </br>
                                </br>
                                <label for="email-perfil">Digite o novo E-mail : </label>
                                <input id="email-perfil" type="text" value='${email}'>
                                </br>
                                </br>
                                <label for="senha-perfil">Digite a nova senha : </label>
                                <input id="senha-perfil" type="text" value='${senha}'>
                                </br>
                                </br>
                                <label for="senha-perfil1">Repita a nova senha : </label>
                                <input id="senha-perfil1" type="text" value='${senha}'>
                                </br>
                                </br>
                                <label for="legenda-perfil">Digite a nova legenda : </label>
                                <input id="legenda-perfil" type="text" value='${legenda}'>
                                </br>
                                </br>
                                <button id="botao-alterar" onclick="funcaoAlteraDados();">Alterar <i id="i-alterar" class="fas fa-wrench"></i></button>
                            </form>
                        </section>`;
        
        div_exibicao.style.marginLeft = '200%';
        setTimeout( () => {
            div_exibicao.style.marginLeft = '0%';
            div_exibicao.innerHTML = content;
        }, 2000);
    },
    "fucaoPerfilUser": () => {
        var exibicao_principal = document.getElementById('exibicao-itens');
        exibicao_principal.style.display = 'block';
        document.getElementById('res-feed-sugestoes').style.display = 'none';
        var perfil = bd.perfisUsuarios[bd.indicePerfilLogado];
        funcaoAbrirMenu();
        var arrayAux = perfil.split('*');
        var nome = arrayAux[0];
        var email = arrayAux[1];
        var senha = arrayAux[2];
        var foto = arrayAux[3];
        var legenda = arrayAux[4];
        var content = ` <section id="perfil-completo">
                            <div id="perfil">
                                <img id="foto-perfil1" onmouseover="funcaoCarregarFotoHover();" onmouseout="funcaoCarregarFotoHover();" src='${foto}'>
                                <div>
                                    <h1> ${nome} <i class="fas fa-wrench"></i> </h1>
                                </div>
                                <button onclick="funcaoCriaInputs()" class="botao" style="background-color: orange">Alterar</button>
                            </div>
                            <div id="dados-perfil">
                                <div>
                                    <button class="botao" style="background-color: red;">Legenda <i class="fas fa-wrench"></i> </button>
                                    <p> - ${legenda}</p>
                                </div>
                                <div>
                                    <button class="botao" style="background-color: green;">E-mail <i class="fas fa-wrench"></i> </button>
                                    <p style="background-color : rgba(0, 255, 34, 0.39); "> - ${email}</p>
                                </div>
                                <div>
                                    <button class="botao" style="background-color: blue;">Senha <i class="fas fa-wrench"></i> </button>
                                    <p style="background-color : rgba(17, 0, 255, 0.39);"> - ${senha}</p>
                                </div>
                            </div>
                        </section>`;
        exibicao_principal.innerHTML = content;
    },
    "funcaoDeslogar": () => {
        bd.onlineOrOffline[bd.indicePerfilLogado] = "offline";
        mensagens = [];
        posicoesDasCores = [];
        cores = [];
        localStorage.setItem('results', JSON.stringify(bd));
        setTimeout( () => {
            window.location.href = 'login.html';
        }, 200);
        
    },
}


