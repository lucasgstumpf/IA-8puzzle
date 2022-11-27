

const buttonH1 = document.querySelector('.btn-h1');
const buttonH2 = document.querySelector('.btn-h2');
const buttonEmbaralha = document.getElementById('btn-embaralha');
console.log(buttonEmbaralha)
const buttonAleatorio = document.querySelector('.btn-aleatorio');


const delay = ms => new Promise(res => setTimeout(res, ms));
var tabuleiro = document.querySelector('.tabuleiro');
var tentativa_antiga
var total_movimentos = 0
var pecas = [];
var posicao = []
for (let i = 0; i < tabuleiro.children.length; i++){
    pecas.push(tabuleiro.children[i])
    posicao.push(pecas[i].innerText)
}

async function mover_tela(tecla){
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

    return

}

async function confere(){
    var pos = []
    for(let x of pecas){
        pos.push(x.innerText)
    }
    console.log(pos)
}

async function fazer_movimento(tecla,final){
    //Troca nos array
    let salva = pecas[tecla]
    let posicao = pecas.indexOf(salva)
    let vazio = pecas[final]
    let posicao_vazio =  pecas.indexOf(vazio)

    pecas[posicao_vazio] = salva
    pecas[posicao] = vazio



    //troca no visual a tecla
    await mover_tela(posicao_vazio)
    await mover_tela(posicao)

    return

}

async function mover(tecla){
    for(let x of pecas){
        if(x.innerText == tecla){
            posicao_atual = pecas.indexOf(x)
            //Peca abaixo
            if(pecas[posicao_atual+3]){
                if(pecas[posicao_atual+3].innerText == 8){
                    await fazer_movimento(posicao_atual,posicao_atual+3)
                    break;
                }
            }

            //Peca acima
            if(pecas[posicao_atual-3]){
                if(pecas[posicao_atual-3].innerText == 8){
                    await fazer_movimento(posicao_atual,posicao_atual-3)
                    break;
                }
            }

            //Peca esquerda
            if(pecas[posicao_atual-1] && posicao_atual !=6 && posicao_atual !=3){
                if(pecas[posicao_atual-1].innerText == 8){
                    await fazer_movimento(posicao_atual,posicao_atual-1)
                    break;
                }
            }

            //Peca direita
            if(pecas[posicao_atual+1] && posicao_atual != 2 && posicao_atual !=5){
                if(pecas[posicao_atual+1].innerText == 8){
                    await fazer_movimento(posicao_atual,posicao_atual+1)
                    break;
                }
            }
        
        }
    }
}

async function soma_heuristica_estrela(arr_entrada){
    var posicao_correta = [0,1,2,3,4,5,6,7,8]
    var casas_erradas = []
    var casas_erradas_string = []
    var posicao
    //transforma(arr_entrada)
    for(x of arr_entrada){
        
        posicao = Math.abs(arr_entrada.indexOf(x) - x.innerText)

        if(posicao == 3){
            posicao = 1
        }
        if(posicao == 4){
            posicao = 2
        }
        if(posicao == 5){
            posicao = 3
        }
        if(posicao==6){
            posicao = 2
        }
        if(posicao==7){
            posicao = 3
        }
        if(posicao==7){
            posicao = 4
        }
        casas_erradas.push(posicao)
        casas_erradas_string.push(posicao.toString())
    }

    var fora_lugar = 0

    for(x of arr_entrada){
        if(arr_entrada.indexOf(x) != x.innerText){
            fora_lugar = 1 +fora_lugar
        }


    }

    

    
    var soma = 0
    for(var i = 0; i < casas_erradas.length; i++) {
        soma += casas_erradas[i];
    }

    soma = soma + fora_lugar
   // console.log(casas_erradas_string)
    //console.log("Soma: "+ soma)

    return soma

}



async function soma_heuristica(arr_entrada){
    var posicao_correta = [0,1,2,3,4,5,6,7,8]
    var casas_erradas = []
    var casas_erradas_string = []
    var posicao
    //transforma(arr_entrada)
    for(x of arr_entrada){
        
        posicao = Math.abs(arr_entrada.indexOf(x) - x.innerText)

        if(posicao == 3){
            posicao = 1
        }
        if(posicao == 4){
            posicao = 2
        }
        if(posicao == 5){
            posicao = 3
        }
        if(posicao==6){
            posicao = 2
        }
        if(posicao==7){
            posicao = 3
        }
        if(posicao==7){
            posicao = 4
        }
        casas_erradas.push(posicao)
        casas_erradas_string.push(posicao.toString())
    }

    



    var soma = 0
    for(var i = 0; i < casas_erradas.length; i++) {
        soma += casas_erradas[i];
    }
   // console.log(casas_erradas_string)
    //console.log("Soma: "+ soma)

    return soma


    
}

async function transforma(arr_entrada){
    let arr_saida = []
    for(let x of arr_entrada){
        arr_saida.push(x.innerText)
    }
    console.log(arr_saida)
}

async function res_heuristica_estrela(){
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

            var backup_tentativa = teste_peca[from]
            teste_peca[from] = teste_peca[vazio]
            teste_peca[vazio] = backup_tentativa
           // console.log("Tentativa: " + tentativa)   
            soma = await soma_heuristica_estrela(teste_peca)
            if(soma < salva_soma){
                salva_soma = soma
                salva_tentativa = tentativa
            }

        }
        console.log(total_movimentos)
        if(salva_soma == 0){
            await setTimeout(async () => { await mover(salva_tentativa) }, 0250);
        }

        else if((salva_soma != 0 && tentativa_antiga != salva_tentativa) || tentativa_antiga == undefined){
           await setTimeout(async () => { await mover(salva_tentativa) }, 0250);
            total_movimentos = total_movimentos + 1
           await setTimeout(async () => { await res_heuristica_estrela() }, 200);
            tentativa_antiga = salva_tentativa
        }
        else if(tentativa_antiga = salva_tentativa){
            possiveis_movimentos.splice(possiveis_movimentos.indexOf(salva_tentativa), 1);
            const numero = Math.floor(Math.random() * possiveis_movimentos.length);

            salva_tentativa = possiveis_movimentos[numero]

             await setTimeout(async () => { await mover(salva_tentativa) }, 0250);
            total_movimentos = total_movimentos + 1
             await setTimeout(async () => { await res_heuristica_estrela() }, 200);
            tentativa_antiga = salva_tentativa

        }
return
}

async function res_heuristica(){
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

                var backup_tentativa = teste_peca[from]
                teste_peca[from] = teste_peca[vazio]
                teste_peca[vazio] = backup_tentativa
               // console.log("Tentativa: " + tentativa)   
                soma = await soma_heuristica(teste_peca)
                if(soma < salva_soma){
                    salva_soma = soma
                    salva_tentativa = tentativa
                }
    
            }
            console.log(total_movimentos)
            if(salva_soma == 0){
                await setTimeout(async () => { await mover(salva_tentativa) }, 0250);
            }

            else if((salva_soma != 0 && tentativa_antiga != salva_tentativa) || tentativa_antiga == undefined){
               await setTimeout(async () => { await mover(salva_tentativa) }, 0250);
                total_movimentos = total_movimentos + 1
               await setTimeout(async () => { await res_heuristica() }, 200);
                tentativa_antiga = salva_tentativa
            }
            else if(tentativa_antiga = salva_tentativa){
                possiveis_movimentos.splice(possiveis_movimentos.indexOf(salva_tentativa), 1);
                const numero = Math.floor(Math.random() * possiveis_movimentos.length);

                salva_tentativa = possiveis_movimentos[numero]

                 await setTimeout(async () => { await mover(salva_tentativa) }, 0250);
                total_movimentos = total_movimentos + 1
                 await setTimeout(async () => { await res_heuristica() }, 200);
                tentativa_antiga = salva_tentativa

            }
    return
}


async function res_heuristica_aleatoria(){

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

        var teste_peca = []
        for(let y of pecas){
            teste_peca.push(y)
        }

        var salva_soma = 10000
        var salva_tentativa
        console.log(possiveis_movimentos)
        

        var vazio
        for(let x of pecas){
            if(x.innerText == 8){
                vazio = pecas.indexOf(x)
                break
            }
        }

        var numero = Math.floor(Math.random() * possiveis_movimentos.length);
        numero = possiveis_movimentos[numero]
        for(let x of teste_peca){
            if(x.innerText == numero){
                var from = teste_peca.indexOf(x)
            }
        }
        
        var backup_tentativa = teste_peca[from]
            teste_peca[from] = teste_peca[vazio]
            teste_peca[vazio] = backup_tentativa

        transforma(teste_peca)
        soma = await soma_heuristica(teste_peca)

        if(soma == 0){
            await setTimeout(async () => { await mover(numero) }, 0250);
            return
        }

        
        await setTimeout(async () => { await mover(numero) }, 0250);
        total_movimentos = total_movimentos + 1
        console.log("Movimentos: " + total_movimentos)
        await setTimeout(async () => { await res_heuristica_aleatoria() }, 200);

        
return

}

buttonH1.addEventListener('click', async () => {
    //Acha o 8 e ve quais que podem
    total_movimentos = 0
 
    await res_heuristica()
    

});

buttonH2.addEventListener('click', async () => {
    //Acha o 8 e ve quais que podem
    total_movimentos = 0
 
    await res_heuristica_estrela()
    

});

async function btnEmbaralha() {
    x = document.getElementById("valor").value;
    await embaralhar(parseInt(x))

  }


buttonAleatorio.addEventListener('click', async () => {
    //Acha o 8 e ve quais que podem
    total_movimentos = 0
 
    res_heuristica_aleatoria()
       

});



async function embaralhar(max){
    for(i= 0; i < max; i++){
        console.log("i: "+i)
        const j = Math.round(Math.random() * (8 - 0) + 0);
            x = await mover(j) 
        
    }
}