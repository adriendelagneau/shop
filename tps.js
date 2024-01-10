<div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
<img src={productDetails.image[0]} />
</div>


<div class="ml-4 flex flex-1 flex-col">

<div>
    <div class="flex justify-between text-base font-medium text-gray-900">
        <h3>
            <a href="#">{productDetails.name}</a>
        </h3>
        <p class="ml-4">{productDetails.quantity * productDetails.price} €</p>
    </div>
    <p class="mt-1 text-sm text-gray-500">{productDetails.brand}</p>
</div>

<div class="flex flex-1 items-end justify-between text-sm">
    <div class="flex">
        <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
    </div>
</div>

<select value={qty} onChange={handleQuantityChange}>
        {[...Array(10).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
                {num + 1}
            </option>
        ))}
    </select>

</div>