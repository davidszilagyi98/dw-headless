export async function fetchApi(url: string) {
    
    return await fetch(getServerUrl(url))

}

export function getServerUrl(url: string){

    return `https://dw10dsz.public9.dynamicweb.dk${url}`

}