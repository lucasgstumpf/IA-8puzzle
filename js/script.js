
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

}

function mover(tecla){
    for(let x of pecas){
        if(x.innerText == tecla){
            console.log(x.innerText)
            //Peca abaixo
            if(pecas[tecla+3]){
                if(pecas[tecla+3].innerText == 8){
                    fazer_movimento(tecla,tecla+3)
                }
            }

            //Peca acima
            if(pecas[tecla-3]){
                if(pecas[tecla-3].innerText == 8){
                    fazer_movimento(tecla,tecla-3)
                }
            }

            //Peca esquerda
            if(pecas[tecla-1]){
                if(pecas[tecla-1].innerText == 8){
                    fazer_movimento(tecla,tecla-1)
                }
            }

            //Peca direita
            if(pecas[tecla+1]){
                if(pecas[tecla+1].innerText == 8){
                    fazer_movimento(tecla,tecla+1)
                }
            }
        
        }
    }
}

