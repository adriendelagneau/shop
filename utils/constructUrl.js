export const constructUrl = (page, category, brand, sort, search) => {
    const params = [];

    if (page) {
        params.push(`page=${encodeURIComponent(page)}`);
    }

    if (category) {
        params.push(`category=${encodeURIComponent(category)}`);
    }

    if (brand) {
        params.push(`brand=${encodeURIComponent(brand)}`);
    }

    if (sort) {
        params.push(`sort=${encodeURIComponent(sort)}`);
    }

    if (search) {
        params.push(`search=${encodeURIComponent(search)}`);
    }

    return params.length > 0 ? `?${params.join('&')}` : '';
};

