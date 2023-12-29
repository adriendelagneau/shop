export  const constructUrl = (category, brand, sort) => {
    let newUrl = '';

    // Append category, brand, and sort to the URL if they exist
    if (category) {
        newUrl += `&category=${category}`;
    }

    if (brand) {
        newUrl += `&brand=${brand}`;
    }

    if (sort) {
        newUrl += `&sort=${sort}`;
    }

    // Remove the leading '&' if it exists
    newUrl = newUrl.replace(/^&/, '');

    return newUrl ? `?${newUrl}` : '';
};
