function Tabuada(){
    var num = window.document.getElementById('num')
    var end = document.getElementById('end')
    if (num.value.length == 0 || end.value.length == 0){
        window.alert('Nenhum número digitado, [CONFIRA OS DADOS')
    } else {
        var n = Number(num.value)
        var e = Number(end.value)
        var x = 0
        var r = ''
        var res = window.document.getElementById('resposta')
        res.innerHTML = `A Tabuada do ${n} é:  <br>`
        do {
            r = n*x
            res.innerHTML += `${n} x ${x} = ${r} <br>`
            x++
        } while (x <= e)
    }

}
