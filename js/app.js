function criarTabela(res){
    const container = document.querySelector('.container')
    const tabela = document.createElement('table')
    
    const primeiraLinha = document.createElement('thead')
    const Sigla = document.createElement('td')
    const Nome = document.createElement('td')
    const Localidade = document.createElement('td')

    Sigla.innerHTML = 'Sigla'
    Nome.innerHTML = 'Nome'
    Localidade.innerHTML = 'Localidade'

    primeiraLinha.appendChild(Sigla)
    primeiraLinha.appendChild(Nome)
    primeiraLinha.appendChild(Localidade)

    tabela.appendChild(primeiraLinha)

    const linhas = res.map(res => {

        const tdSigla =  document.createElement('td')
        tdSigla.innerHTML = res.sigla

        const tdNome =  document.createElement('td')
        tdNome.innerHTML = res.nome

        const tdLocalidade =  document.createElement('td')
        tdLocalidade.innerHTML = res.regiao.nome

        const tr = document.createElement('tr')

        tr.appendChild(tdSigla)
        tr.appendChild(tdNome)
        tr.appendChild(tdLocalidade)

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