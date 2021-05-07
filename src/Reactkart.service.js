import commerce from './lib/commerce';
// import { debounce } from './utils/Utility'

export const fetchProducts = async () => {
  try {
    const productsResult = await commerce.products.list();
    // console.log(productsResult.data);

    const productsData = productsResult.data.map((product) => (
      {
          id: product.id,
          name: product.name,
          price: product.price.formatted_with_symbol,
          imageUrl: product.media.source
      }
    ))

    return productsData
  } catch (error) {
    console.error('Error Fetching Products: ', error);
    return null
  }
};

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