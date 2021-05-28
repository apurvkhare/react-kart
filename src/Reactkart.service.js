import commerce from './lib/commerce';

export const fetchData = async (dataType) => {
  try {
    const result = await commerce[dataType].list();

    const data = result.data.map((dataItem) => {
      let additionalData = {};
      if (dataType === 'products') {
        additionalData = {
          price: dataItem.price.formatted_with_symbol,
          imageUrl: dataItem.media.source,
        };
      }
      return {
        id: dataItem.id,
        name: dataItem.name,
        ...additionalData,
      };
    });

    return data;
  } catch (error) {
    console.error('Error Fetching Categories: ', error);
    return null;
  }
};

export const searchProducts = async (inputSearch, setFilteredProducts) => {
  if(inputSearch.toString().trim() === ''){
    setFilteredProducts([])
    return
  }
  try {
    const searchResults = await commerce.products.list({
      query: inputSearch,
    });

    const filteredProducts = searchResults.data?.map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price.formatted_with_symbol,
      imageUrl: product.media.source
    }))

    console.log('Search results: ', filteredProducts);
    setFilteredProducts(filteredProducts || ["no results found"]) 
  } catch (error) {
    console.error('Error Fetching Products: ', error);
  }
};

export const getProductDetails = async (productId) => {
  try {
    const result = await commerce.products.retrieve(productId);

    const productDetails = {
      id: result.id,
      name: result.name,
      description: result.description,
      price: result.price.formatted_with_symbol,
      imageUrl: result.media.source,
      qty: result.inventory.available,
    };

    return productDetails;
  } catch (error) {
    console.error('Error fetching product details: ', error);
    return null;
  }
};