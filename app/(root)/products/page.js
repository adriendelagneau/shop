import { getProducts } from '@/app/_productsActions'
import Collection from '@/components/Collection';
import InfinitScroll from '@/components/InfinitScroll';
import SearchCompoent from '@/components/SearchCompoent';
import SelectorComponent from '@/components/SelectorComponent';

import React from 'react'

const ProductPage = async ({ searchParams }) => {

  const page = 1
  const limit = 12
  const query = searchParams?.query || ""
  const category = searchParams?.category || ""
  const brand = searchParams?.brand || ""
  const sort = searchParams?.sort || ""

  const data = await getProducts(
    page,
    limit,
    query,
    category,
    brand,
    sort
  );

  return (
    <div >

      <SelectorComponent categoryText={category} brandText={brand} sortText={sort} />
      <SearchCompoent queryText={query} />

      <Collection
        data={data?.products}

      />

      <InfinitScroll totalPages={data?.totalPages} />

    </div>
  )
}

export default ProductPage