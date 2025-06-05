
const STANDARD_TAX_RATE = 0.0475;
const GROCERY_TAX_RATE = 0.03; // 3%

export function calculateTax(price: number, category: string): number {
    if (price < 0) {
        console.warn("Invalid input: Price should be non-negative.");
        return 0; // Or throw an error
    }

    let taxRate: number;
    if (category.toLowerCase() === "groceries") {
        taxRate = GROCERY_TAX_RATE;
    } else {
        taxRate = STANDARD_TAX_RATE;
    }
    return (price * taxRate);
}

export function getTaxRate(category: string): number {
    if (category.toLowerCase() === "groceries") {
        return GROCERY_TAX_RATE;
    } else {
        return STANDARD_TAX_RATE;
    }
}

export function calculatePriceWithTax(price: number, category: string): number {
   const taxAmount = calculateTax(price, category);
  return price + taxAmount;
}