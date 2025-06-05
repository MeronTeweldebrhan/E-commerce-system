import { dimensions, meta, reviews } from "../types/product-type";

export class Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: reviews;
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: meta;
  thumbnail: string;
  images: string[];

  constructor(
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    brand: string,
    sku: string,
    weight: number,
    dimensions: dimensions,
    warrantyInformation: string,
    shippingInformation: string,
    availabilityStatus: string,
    reviews: reviews,
    returnPolicy: string,
    minimumOrderQuantity: number,
    meta: meta,
    thumbnail: string,
    images: string[],
  ) {
    this.id = id; // Use actual ID from API, not random
    this.title = title;
    this.description = description;
    this.category = category;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.tags = tags;
    this.brand = brand;
    this.sku = sku;
    this.weight = weight;
    this.dimensions = dimensions;
    this.warrantyInformation = warrantyInformation;
    this.shippingInformation = shippingInformation;
    this.availabilityStatus = availabilityStatus;
    this.reviews = reviews;
    this.returnPolicy = returnPolicy;
    this.minimumOrderQuantity = minimumOrderQuantity;
    this.meta = meta;
    this.thumbnail = thumbnail;
    this.images = images;
  }

  // Method to display product details
  public displayDetails(): void {
    console.log(`
=== Product Details ===
ID: ${this.id}
Name: ${this.title}
Description: ${this.description}
Category: ${this.category}
Price: $${this.price.toFixed(2)}
Discount: ${this.discountPercentage}%
Rating: ${this.rating}/5
Stock: ${this.stock}
Brand: ${this.brand || 'N/A'}
SKU: ${this.sku}
Weight: ${this.weight} units
Availability: ${this.availabilityStatus}
Warranty: ${this.warrantyInformation}
Shipping: ${this.shippingInformation}
Return Policy: ${this.returnPolicy}
Min Order Quantity: ${this.minimumOrderQuantity}
Tags: ${this.tags.join(', ')}

`);
  }

  // Method to calculate price after discount
  public getPriceWithDiscount(): number {
    const discountAmount = calculateDiscount(this.price, this.discountPercentage);
    return parseFloat((this.price - discountAmount).toFixed(2));
  }
}