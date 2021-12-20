function criarTabela(res){
    // criando elementos
    const container = document.querySelector('.container')
    const tabela = document.createElement('table')
    
    const primeiraLinha = document.createElement('thead')
    const Sigla = document.createElement('th')
    const Nome = document.createElement('th')
    const Localidade = document.createElement('th')

    // Conteudo de cada table header
    Sigla.innerHTML = 'Sigla'
    Nome.innerHTML = 'Nome'
    Localidade.innerHTML = 'Localidade'

    // inserindo os 3 table headers na primeria linha
    primeiraLinha.appendChild(Sigla)
    primeiraLinha.appendChild(Nome)
    primeiraLinha.appendChild(Localidade)

    // chamando funções para classificar por
    Sigla.onclick = () => classificarPorSigla()
    Nome.onclick = () => classificarPorNome()
    Localidade.onclick = () => classificarPorLocalidade()

    // inserindo primeira linah na tabela
    tabela.appendChild(primeiraLinha)

    // inserindo uma linha para cada estado
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

    // inserindo cada linha criada na tabela
    linhas.forEach(linha => tabela.appendChild(linha))
    // inserindo a tabela no container
    container.appendChild(tabela)
}

const listarEstados = (sigla=false, nome=false, localidade=false) => {
    fetch('/../capitais.json')
    .then(res => res.json())
    .then(res => {
        if(sigla==true){
            criarTabela(res)
            console.log('Classified by sigla')
        }
        else if(nome==true){
            criarTabela(res)
            console.log('Classified by nome')
        }
        else if(localidade==true){
            criarTabela(res)
            console.log('Classified by localidade')
        }
        else{
            criarTabela(res)
            console.log('Default')
        }

})
    .catch(erro => console.log('erro:', erro))
}

listarEstados(sigla=false, nome=false, localidade=false)


function classificarPorSigla(){
    listarEstados(sigla=true, nome=false, localidade=false)
    
}
function classificarPorNome(){
    listarEstados(sigla=false, nome=true, localidade=false)
    
}
function classificarPorLocalidade(){
    listarEstados(sigla=false, nome=false, localidade=true)

}