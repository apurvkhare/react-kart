import commerce from './lib/commerce';

export const fetchData = async (dataType) => {
  try {
    const result = await commerce[dataType].list();

    const data = result.data.map((dataItem) => {
      let additionalData = {};
      if (dataType === 'products') {
        additionalData = {
          price: dataItem.price.formatted_with_symbol,
          rawPrice: dataItem.price.raw,
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
    console.error(`Error Fetching ${dataType}: `, error);
    return null;
  }
};

export const searchProducts = async (inputSearch, setFilteredProducts) => {
  if (inputSearch.toString().trim() === '') {
    setFilteredProducts([]);
    return;
  }
  try {
    const searchResults = await commerce.products.list({
      query: inputSearch,
    });

    const filteredProducts = searchResults.data?.map((product) => ({
      id: product.id,
      name: product.name,
      rawPrice: product.price.raw,
      price: product.price.formatted_with_symbol,
      imageUrl: product.media.source,
    }));

    console.log('Search results: ', filteredProducts);
    setFilteredProducts(filteredProducts || ['no results found']);
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
      rawPrice: result.price.raw,
      imageUrl: result.media.source,
      qty: result.inventory.available,
    };

    return productDetails;
  } catch (error) {
    console.error('Error fetching product details: ', error);
    return null;
  }
};

export const payViaRazorpay = () => {
  const options = {
    key: '', // Enter the Key ID generated from the Dashboard
    amount: '500000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: 'INR',
    name: 'Reactkart',
    description: 'Test Transaction',
    image: 'https://example.com/your_logo',
    order_id: 'order_9A33XWu170gUtm', //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: 'https://eneqd3r9zrjok.x.pipedream.net/',
    prefill: {
      name: 'Gaurav Kumar',
      email: 'gaurav.kumar@example.com',
      contact: '9999999999',
    },
    notes: {
      address: 'Razorpay Corporate Office',
    },
    theme: {
      color: '#3399cc',
    },
  };

  return new Razorpay(options);
};
