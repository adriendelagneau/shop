export  const constructUrl = (page, category, brand, sort, search) => {
    let newUrl = '';

    // Append category, brand, and sort to the URL if they exist
    if (page) {
        newUrl += `&page=${(page)}`;
    }

    if (category) {
        newUrl += `&category=${category}`;
    }

    if (brand) {
        newUrl += `&brand=${brand}`;
    }

    if (sort) {
        newUrl += `&sort=${sort}`;
    }

    if (search) {
        newUrl += `&search=${(search)}`;
    }

    // Remove the leading '&' if it exists
    newUrl = newUrl.replace(/^&/, '');

    return newUrl ? `?${newUrl}` : '';
};
