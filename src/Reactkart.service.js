import commerce from './lib/commerce';
// import { debounce } from './utils/Utility'

export const fetchData = async (dataType) => {
  try{
    const result = await commerce[dataType].list()

    console.log("Data: ", result.data)

    const data = result.data.map(dataItem => {
      let additionalData = {}
      if(dataType === "products"){
        additionalData = {
          price: dataItem.price.formatted_with_symbol,
          imageUrl: dataItem.media.source,
          description: dataItem.description,
          qty: dataItem.inventory.available
        }
      }
      return {
        id: dataItem.id,
        name: dataItem.name,
        ...additionalData
      }
    })

    return data
  }catch(error){
    console.error('Error Fetching Categories: ', error);
    return null
  }
}

export const searchProducts = async (inputSearch) => {
    try{
        const searchResults = await commerce.products.list({
            query: inputSearch
        })

        console.log("Input Search: ", inputSearch)
        console.log("Search results: ", searchResults)
        
    }catch (error) {
    console.error('Error Fetching Products: ', error);
    // return null
  }
}

// export const debouncedSearchProducts = debounce(searchProducts, 250);