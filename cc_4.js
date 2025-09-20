let products = [
    {SKU: "PR1", name: "Phone", category: "Electronics", price: 800, inventory: "50"},
    {SKU: "PR2", name: "Shirt", category: "Apparel", price: 20, inventory: "100"},
    {SKU: "PR3", name: "Potatos", category: "Groceries", price: 15, inventory: "30"},
    {SKU: "PR4", name: "Lamp", category: "Household", price: 15, inventory: "200"},
    {SKU: "PR5", name: "Jeans", category: "Apparel", price: 60, inventory: "150"},
]

let discount = 0;
for (const product of products) {
    switch (product.category) {
        case "Electronics":
            discount = 0.2;
            break;
        case "Apparel":
            discount = 0.15;
            break;
        case "Groceries":
        case "Household":
            discount = 0.1;
            break;
        default:
            discount = 0;
            break;
    }
    // Apply discount to the product 
let promoPrice = product.price * (1-discount);
product.promoPrice = promoPrice;
}

console.log(products)