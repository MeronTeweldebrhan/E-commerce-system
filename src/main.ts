/// Note: Product type is imported via fetchProducts() return type, no direct import needed
import { fetchProducts } from './services/apiService'; 
import { calculateDiscount } from './utils/dicountCalculator';
import { calculateTax, getTaxRate } from './utils/taxCalculator';
import { handleApiError } from './utils/errorHandler'; 

 // Fetch products from API service
async function main(): Promise<void> {
   try {
   
    const products = await fetchProducts();

    // // Display product details
    for (const product of products) {
      console.log('\n' + '='.repeat(50));
      product.displayDetails();
      // Calculate discount amount
    const discountAmount = calculateDiscount(product.price, product.discountPercentage);
    // Calculate price after discount
    const priceAfterDiscount = product.getPriceWithDiscount();
    // Calculate tax on the discounted price
    const taxAmount = calculateTax(priceAfterDiscount, product.category);
    const taxRate = getTaxRate(product.category);
    
    // Calculate final price including tax
    const finalPrice = priceAfterDiscount + taxAmount;
    
    console.log(`

=== Pricing Information ===
Original Price: $${product.price.toFixed(2)}
Discount: $${discountAmount.toFixed(2)} (${product.discountPercentage}% off)
Price After Discount: $${priceAfterDiscount.toFixed(2)}
Tax: $${taxAmount.toFixed(2)} (${(taxRate * 100).toFixed(2)}% tax rate)
Final Price: $${finalPrice.toFixed(2)}

`);
    } 
  } catch (error) {
    console.error('Error displaying product calculations:', handleApiError(error));
  }
}

// Execute the main function using API service
main();

