export function calculateDiscount(price: number, discountPercentage: number): number {
    if (price < 0 || discountPercentage < 0) {
        console.warn("Invalid input: Price and discount percentage should be non-negative.");
        return 0; // Or throw an error, depending on desired strictness
    }
    return price * (discountPercentage / 100);
}