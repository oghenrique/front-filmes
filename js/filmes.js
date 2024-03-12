export async function getFilmes() {
    const url = 'http://10.107.134.43:8080/v2/acme/filmes'
    
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filmes
}

export async function getFilme (id){
    const url = `http://10.107.134.43:8080/v2/acme/filme/${id}`
    
    const response = await fetch(url)
    const data = await response.json()
    
    return data.filme[0]
}

export async function postFilme (filme) {
    const url = 'http://10.107.134.43:8080/v2/acmefilme/filme'
    const options = {
        method: 'POST',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(filme),
    }

    const response = await fetch (url, options)

    return response.ok

}