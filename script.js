
function contar(){
    var res = window.document.getElementById('resultado')
    var dInicio=window.document.getElementById('inicio')
    var dFim= window.document.getElementById('fim')
    var dPasso=window.document.getElementById('passo')
    var inic = Number(dInicio.value)
    var dfi = Number(dFim.value)
    var dpas= Number(dPasso.value)

    if( inic ==0 || inic ==''){
        res.innerHTML='é obrigatório colocar um valor ;  e também que seja maior que zero'
    } else if( dfi ==0 || dfi==''){
        res.innerHTML='é obrigatório colocar um valor ;  e também que seja maior que zero'
    } else if( dpas==0 || dpas =='') {
        res.innerHTML='é obrigatório colocar um valor ;  e também que seja maior que zero'
    }

    do{

        res.innerHTML+= `${inic} \u{1F449}` 
        inic= inic+dpas

       

    } while(inic<= dfi)

    res.innerHTML+=`\u{1F3C1}`


  
     
    
    

}

