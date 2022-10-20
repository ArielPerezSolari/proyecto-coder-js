const getStock = async() => {
    try {
        const response = await fetch('./src/data/stock.json');
        const data = await response.json();

        return data;
    } catch (error) {
        console.log('Error at getting data', error)
    }
}


export { getStock }