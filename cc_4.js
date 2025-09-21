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
    //discount to the product 
let promoPrice = product.price * (1-discount);
product.promoPrice = promoPrice;

}const customers = [
    {id: 1, customerType: "regular", couponCode: "SAVE", taxRate: 0.03,
    cart: [{sku: "PR4", qty: 3 }, {sku: "PR5", qty: 3 }]},
    {id: 2, customerType: "student", couponCode: "SAVEE", taxRate: 0.03,
    cart: [{sku: "PR3", qty: 2 }, {sku: "PR5", qty: 3 }]},
    {id: 3, customerType: "senior", couponCode: "SAVEEE", taxRate: 0.03,
    cart: [{sku: "PR1", qty: 3 }, {sku: "PR2", qty: 3 }]} 
]

console.log(products)

for (let i = 0; i < customers.length; i++) {
    const customer = customers[i];
    let subtotal = 0;


    for (const item of customer.cart) {

        const product = products.find(p => p.SKU === item.sku);
        if (product && product.inventory >= item.qty) {
            subtotal += product.promoPrice * item.qty;  
            product.inventory -= item.qty;             
        }
    }

    let extraDiscount = 0;
    if (customer.customerType === "student") {
        extraDiscount = 0.05;
    } else if (customer.customerType === "senior") {
        extraDiscount = 0.07;
    } else {
        extraDiscount = 0;
    }

    const finalTotal = subtotal * (1 - extraDiscount);

    console.log(`Customer ${customer.id}: $${finalTotal.toFixed(2)}`);
}

const singleProduct = products[0]; 
for (const key in singleProduct) {
    console.log(`${key}: ${singleProduct[key]}`);
}

const anotherProduct = products[1];
for (const [key, value] of Object.entries(anotherProduct)) {
    console.log(`${key}: ${value}`);
}