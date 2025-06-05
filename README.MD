# E-Commerce System

A simple TypeScript application that fetches product data from an API and calculates pricing with discounts and taxes.

## What it does

- Fetches products from DummyJSON API
- Shows product details (name, description, price, etc.)
- Calculates discounts and taxes
- Displays final pricing information

## How to run

1. Install dependencies:
   ```bash
   npm install
   ```

2. Compile TypeScript:
   ```bash
   npx tsc
   ```

3. Run the program:
   ```bash
   node dist/main.js
   ```

## Project structure

```
src/
├── main.ts              # Main application entry point
├── models/
│   └── Product.ts       # Product class definition
├── services/
│   └── apiService.ts    # API calls to fetch products
├── utils/
│   ├── discountCalculator.ts  # Discount calculations
│   ├── taxCalculator.ts       # Tax calculations
│   └── errorHandler.ts        # Error handling
└── types/
    └── product-type.ts  # TypeScript type definitions
```

## Features

- **Product Display**: Shows detailed product information
- **Discount Calculation**: Calculates discount amounts and percentages
- **Tax Calculation**: Different tax rates for different categories
  - Groceries: 3% tax
  - Other items: 4.75% tax
- **Error Handling**: Proper error handling for API calls
- **TypeScript**: Full type safety

## Upcoming features

- **Web Interface (UI)**:  Integrate a simple UI using React or plain HTML/CSS/TypeScript
             - Product listing with images
            -  Search and filter products
            - Real-time discount and tax calculation display
             -  Interactive final price breakdown
             - Add to Cart System
             -  Responsive Design
             - Accessibility Improvements

## Sample output

```
=== Product Details ===
Name: Apple
Category: groceries
Price: $1.99
Rating: 4.19/5

=== Pricing Information ===
Original Price: $1.99
Discount: $0.25 (12.62% off)
Price After Discount: $1.74
Tax: $0.05 (3.00% tax rate)
Final Price: $1.79
```

## Dependencies

- TypeScript
- Node.js
- @types/node

## 📚 Useful Resources

These resources were essential in building and debugging this TypeScript-based E-Commerce system:

* MDN Web Docs
Comprehensive reference for JavaScript, HTTP, APIs, and modern web development standards.
* TypeScript Documentation
Official guide and reference for TypeScript features, types, and best practices.
* Visual Studio Code
Code editor used for development, with built-in TypeScript support and extensions for linting and formatting.
* VS Code Autocompletion
Helped speed up development with IntelliSense, type hints, and quick-fix suggestions.

That's it! Simple and straightforward.
