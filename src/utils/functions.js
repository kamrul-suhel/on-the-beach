export default {
    numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },

    filterProducts(data, sortType) {
        switch(sortType){
            case 'alphabetic':
                data.sort(function(a, b) {
                    const textA = a.title.toUpperCase();
                    const textB = b.title.toUpperCase();
                    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
                })
                break

            case 'rating':
                data.sort(function(a, b) {
                    const ratingA = parseFloat(a.rating);
                    const ratingB = parseFloat(b.rating);
                    return (ratingA < ratingB) ? -1 : (ratingA > ratingB) ? 1 : 0;
                })
                break

            case 'price':
                data.sort(function(a, b) {
                    const priceA = parseFloat(a.price);
                    const priceB = parseFloat(b.price);
                    return (priceA < priceB) ? -1 : (priceA > priceB) ? 1 : 0;
                })

                break

            default:
                data.sort(function(a, b) {
                    const priceA = parseFloat(a.price);
                    const priceB = parseFloat(b.price);
                    return (priceA < priceB) ? -1 : (priceA > priceB) ? 1 : 0;
                })
        }

        return data
    }
}
