// const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;

const fetchProducts = async (products) => {
  try {
    const endpoint = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`
    const response = await fetch(endpoint)
    const data = await response.json()
    return data
  } catch (error) {
    return new Error('You must provide an url')
  }
}

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts
  }
}
