import { fetchApi } from "./server"

export default async function getAllParagraph(pageId: number) 
{

    const response = await fetchApi(`/dwapi/content/paragraphs?PageId=${pageId}`)
    
    if(!response.ok) {  
        throw new Error('failed to fetch content')
    }

    return response.json()
}

  