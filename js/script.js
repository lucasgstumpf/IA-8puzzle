

const buttonH1 = document.querySelector('.btn-h1');
const delay = ms => new Promise(res => setTimeout(res, ms));
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

}

function mover(tecla){
    for(let x of pecas){
        if(x.innerText == tecla){
            posicao_atual = pecas.indexOf(x)
            //Peca abaixo
            if(pecas[posicao_atual+3]){
                if(pecas[posicao_atual+3].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual+3)
                    break;
                }
            }

            //Peca acima
            if(pecas[posicao_atual-3]){
                if(pecas[posicao_atual-3].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual-3)
                    break;
                }
            }

            //Peca esquerda
            if(pecas[posicao_atual-1] && posicao_atual !=6 && posicao_atual !=3){
                if(pecas[posicao_atual-1].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual-1)
                    break;
                }
            }

            //Peca direita
            if(pecas[posicao_atual+1] && posicao_atual != 2 && posicao_atual !=5){
                if(pecas[posicao_atual+1].innerText == 8){
                    fazer_movimento(posicao_atual,posicao_atual+1)
                    break;
                }
            }
        
        }
    }
    return true
}

function soma_heuristica(arr_entrada){
    var posicao_correta = [0,1,2,3,4,5,6,7,8]
    var casas_erradas = []

    for(let x of posicao_correta){
        var aux = 0
        for (let ypeca of arr_entrada){
            if(ypeca.innerText == x){
                aux = aux + 1
                casas_erradas.push(Math.abs(aux - x))

            }
            aux = aux + 1

        }
    }

    var soma = 0
    for(var i = 0; i < casas_erradas.length; i++) {
        soma += casas_erradas[i];
    }

    return soma

}

function transforma(arr_entrada){
    let arr_saida = []
    for(let x of arr_entrada){
        arr_saida.push(x.innerText)
    }
    console.log(arr_saida)
}

function res_heuristica(){
        //Acha o 8 e ve quais que podem
        var possiveis_movimentos = []
        for(let x of pecas){
                posicao_atual = pecas.indexOf(x)
                //Peca abaixo
                if(pecas[posicao_atual+3]){
                    if(pecas[posicao_atual+3].innerText == 8){
                        possiveis_movimentos.push(x.innerText)
                    }
                }
    
                //Peca acima
                if(pecas[posicao_atual-3]){
                    if(pecas[posicao_atual-3].innerText == 8){
                        possiveis_movimentos.push(x.innerText)
                    }
                }
    
                //Peca esquerda
                if(pecas[posicao_atual-1] && posicao_atual !=6 && posicao_atual !=3){
                    if(pecas[posicao_atual-1].innerText == 8){
                        possiveis_movimentos.push(x.innerText)
                    }
                }
    
                //Peca direita
                if(pecas[posicao_atual+1] && posicao_atual != 2 && posicao_atual !=5){
                    if(pecas[posicao_atual+1].innerText == 8){
                        possiveis_movimentos.push(x.innerText)
                    }
                }
            
        }
    
            var vazio
            for(let x of pecas){
                if(x.innerText == 8){
                    vazio = pecas.indexOf(x)
                    break
                }
            }
            
            console.log("Vazio: " + vazio)
    
            console.log("Possiveis Movimentos: "+ possiveis_movimentos)
    
            var heu = []
            var salva_soma = 10000
            var salva_tentativa
            for(let tentativa of possiveis_movimentos){
                //Esse for vai gerar 3 array e vai calcular a soma de cada um, a menor soma ele faz o movimento e chama essa funcao de novo até a soma dar 0
                var teste_peca = []
                for(let y of pecas){
                    teste_peca.push(y)
                }
                for(let x of teste_peca){
                    if(x.innerText == tentativa){
                        var from = teste_peca.indexOf(x)
                    }
                }
                teste_peca.splice(vazio, 0, teste_peca.splice(from, 1)[0]);
    
                soma = soma_heuristica(teste_peca)
                console.log("Tentativa: "+tentativa+" Soma: " + soma)
                if(soma < salva_soma){
                    salva_soma = soma
                    salva_tentativa = tentativa
                }
    
            }
            console.log(salva_tentativa)

            if((mover(salva_tentativa) == true) && salva_soma != 0){
                console.log("moveu os 2")
            }
    
}

buttonH1.addEventListener('click', () => {
    //Acha o 8 e ve quais que podem
    var possiveis_movimentos = []
    for(let x of pecas){
            posicao_atual = pecas.indexOf(x)
            //Peca abaixo
            if(pecas[posicao_atual+3]){
                if(pecas[posicao_atual+3].innerText == 8){
                    possiveis_movimentos.push(x.innerText)
                }
            }

            //Peca acima
            if(pecas[posicao_atual-3]){
                if(pecas[posicao_atual-3].innerText == 8){
                    possiveis_movimentos.push(x.innerText)
                }
            }

            //Peca esquerda
            if(pecas[posicao_atual-1] && posicao_atual !=6 && posicao_atual !=3){
                if(pecas[posicao_atual-1].innerText == 8){
                    possiveis_movimentos.push(x.innerText)
                }
            }

            //Peca direita
            if(pecas[posicao_atual+1] && posicao_atual != 2 && posicao_atual !=5){
                if(pecas[posicao_atual+1].innerText == 8){
                    possiveis_movimentos.push(x.innerText)
                }
            }
        
    }

        var vazio
        for(let x of pecas){
            if(x.innerText == 8){
                vazio = pecas.indexOf(x)
                break
            }
        }
        
        console.log("Vazio: " + vazio)

        console.log("Possiveis Movimentos: "+ possiveis_movimentos)

        var heu = []
        var salva_soma = 10000
        var salva_tentativa
        for(let tentativa of possiveis_movimentos){
            //Esse for vai gerar 3 array e vai calcular a soma de cada um, a menor soma ele faz o movimento e chama essa funcao de novo até a soma dar 0
            var teste_peca = []
            for(let y of pecas){
                teste_peca.push(y)
            }
            for(let x of teste_peca){
                if(x.innerText == tentativa){
                    var from = teste_peca.indexOf(x)
                }
            }
            teste_peca.splice(vazio, 0, teste_peca.splice(from, 1)[0]);

            soma = soma_heuristica(teste_peca)
            console.log("Tentativa: "+tentativa+" Soma: " + soma)
            if(soma < salva_soma){
                salva_soma = soma
                salva_tentativa = tentativa
            }

        }
        mover(salva_tentativa)

        // if((mover(salva_tentativa) == true) && salva_soma != 0){
        //     res_heuristica()
        // }

});


function embaralhar(){
    const max = 500;
    for(i= 0; i < max; i++){
        const j = Math.round(Math.random() * (8 - 0) + 0);
        teste = mover(j)
        if(teste == true){
            console.log(j)
        }
    }
}
embaralhar()