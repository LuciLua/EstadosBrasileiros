function criarTabela(res){
    const container = document.querySelector('.container')
    const tabela = document.createElement('table')
    
    const primeiraLinha = document.createElement('thead')
    const pais = document.createElement('td')
    const capital = document.createElement('td')
    const continente = document.createElement('td')

    pais.innerHTML = 'Pais'
    capital.innerHTML = 'Capital'
    continente.innerHTML = 'Continente'

    primeiraLinha.appendChild(pais)
    primeiraLinha.appendChild(capital)
    primeiraLinha.appendChild(continente)

    tabela.appendChild(primeiraLinha)

    const linhas = res.map(res => {

        const tdPais =  document.createElement('td')
        tdPais.innerHTML = res.pais

        const tdCapital =  document.createElement('td')
        tdCapital.innerHTML = res.capital

        const tdContinente =  document.createElement('td')
        tdContinente.innerHTML = res.continente

        const tr = document.createElement('tr')

        tr.appendChild(tdPais)
        tr.appendChild(tdCapital)
        tr.appendChild(tdContinente)

        return tr
    })
    linhas.forEach(linha => tabela.appendChild(linha))
    container.appendChild(tabela)
}

fetch('/../capitais.json')
    .then(res => res.json())
    .then(res => {
        criarTabela(res)

})
    .catch(erro => console.log('erro:', erro))