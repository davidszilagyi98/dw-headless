export default async function getParagraphsById(pageId) {
   
    const response = await fetch(`https://dw10dsz.public9.dynamicweb.dk/dwapi/content/paragraphs?AreaId=1&PageId=${pageId}`)
    

    if(!response.ok) {
        throw new Error('failed to fetch content')
    }

    return response.json()
}