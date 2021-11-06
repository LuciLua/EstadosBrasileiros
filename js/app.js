var capitais = []
var paises = []
var continentes = []


fetch('/../capitais.json')
    .then(res => res.json())
    .then(res => {
            capitais.push(res.map(c => c.capital))
            paises.push(res.map(p => p.pais))
            continentes.push(res.map(co => co.continente))
            return res
        })
        .then(console.log)
                

    const tbody = document.querySelector('tbody')
    var trPaises = document.querySelectorAll('[tipo="pais"]')
    var trCapital = document.querySelectorAll('[tipo="capital"]')
    var trContinente = document.querySelectorAll('[tipo="continente"]')

setTimeout( () => {  

    capitais = capitais[0] 
    paises = paises[0] 
    continentes = continentes[0] 
    
    paises.forEach( e => {     
        const trPais = document.createElement('tr')
        trPais.setAttribute('tipo', 'pais')

        const tdPais = document.createElement('td')
        
        tbody.appendChild(trPais)
        trPais.appendChild(tdPais)
        tdPais.innerText = e
    })

    trPaises = document.querySelectorAll('[tipo="pais"]')
    
    trPaises.forEach( tp => {
        const tdCapital = document.createElement('td')
        tdCapital.setAttribute('tipo', 'capital')

        tp.appendChild(tdCapital)
    })

    trCapital = document.querySelectorAll('[tipo="capital"]')

    trCapital.forEach( (tc, index) =>{
            tc.innerText = capitais[index]          
    })


    // ---

    trPaises.forEach( tp => {
        const tdContinente = document.createElement('td')
        tdContinente.setAttribute('tipo', 'continente')

        tp.appendChild(tdContinente)
    })

    trContinente = document.querySelectorAll('[tipo="continente"]')

    trContinente.forEach( (tco, index) =>{
            tco.innerText = continentes[index]          
    })
}, 200)

