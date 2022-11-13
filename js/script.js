
var tabuleiro = document.querySelector('.tabuleiro');

var pecas = [];
var posicao = []
for (let i = 0; i < tabuleiro.children.length; i++){
    pecas.push(tabuleiro.children[i])
    posicao.push(pecas[i].innerText)
}

function mover_tela(tecla){
    if(pecas.indexOf(pecas[tecla]) == 0){
        pecas[tecla].style["marginLeft"] = "00px"
        pecas[tecla].style["marginTop"] = "0px"     
    }

    if(pecas.indexOf(pecas[tecla]) == 1){
        pecas[tecla].style["marginLeft"] = "200px"
        pecas[tecla].style["marginTop"] = "0px"     
    }

    if(pecas.indexOf(pecas[tecla]) == 2){
        pecas[tecla].style["marginLeft"] = "400px"
        pecas[tecla].style["marginTop"] = "0px"     
    }

    if(pecas.indexOf(pecas[tecla]) == 3){
        pecas[tecla].style["marginLeft"] = "00px"
        pecas[tecla].style["marginTop"] = "200px"     
    }

    if(pecas.indexOf(pecas[tecla]) == 4){
        pecas[tecla].style["marginLeft"] = "200px"
        pecas[tecla].style["marginTop"] = "200px"     
    }

    if(pecas.indexOf(pecas[tecla]) == 5){
        pecas[tecla].style["marginLeft"] = "400px"
        pecas[tecla].style["marginTop"] = "200px"     
    }

    
    if(pecas.indexOf(pecas[tecla]) == 6){
        pecas[tecla].style["marginLeft"] = "0px"
        pecas[tecla].style["marginTop"] = "400px"     
    }

    if(pecas.indexOf(pecas[tecla]) == 7){
        pecas[tecla].style["marginLeft"] = "200px"
        pecas[tecla].style["marginTop"] = "400px"     
    }

    if(pecas.indexOf(pecas[tecla]) == 8){
        pecas[tecla].style["marginTop"] = "400px"
        pecas[tecla].style["marginLeft"] = "400px"
    }

}

function confere(){
    var pos = []
    for(let x of pecas){
        pos.push(x.innerText)
    }
    console.log(pos)
}

function fazer_movimento(tecla,final){
    //Troca nos array
    let salva = pecas[tecla]
    let posicao = pecas.indexOf(salva)
    let vazio = pecas[final]
    let posicao_vazio =  pecas.indexOf(vazio)

    pecas[posicao_vazio] = salva
    pecas[posicao] = vazio



    //troca no visual a tecla
    mover_tela(posicao_vazio)
    mover_tela(posicao)
    confere()

}

function mover(tecla){
    for(let x of pecas){
        if(x.innerText == tecla){
            posicao_atual = pecas.indexOf(x)
            //Peca abaixo
            if(pecas[posicao_atual+3]){
                if(pecas[posicao_atual+3].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual+3)
                    console.log("Pode mover")
                    break;
                }
            }

            //Peca acima
            if(pecas[posicao_atual-3]){
                if(pecas[posicao_atual-3].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual-3)
                    console.log("Pode mover")
                    break;
                }
            }

            //Peca esquerda
            if(pecas[posicao_atual-1]){
                if(pecas[posicao_atual-1].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual-1)
                    console.log("Pode mover")
                    break;
                }
            }

            //Peca direita
            if(pecas[posicao_atual+1]){
                if(pecas[posicao_atual+1].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual+1)
                    console.log("Pode mover")
                    break;
                }
            }
        
        }
    }
}

