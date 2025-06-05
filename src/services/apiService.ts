import { Product } from "../models/Product"; // Fixed: Correct case-sensitive import
import { AppError } from "../utils/errorHandler";

export async function fetchProducts(): Promise< Product[]> {
  try {
    const response = await fetch('https://dummyjson.com/products');

    if (!response.ok) {
      throw new AppError(`HTTP error! status: ${response.status}`, response.status);
    }

    const data = await response.json();

    if (!data.products) {
      throw new AppError('Invalid API response', 500);
    }

    // Map plain data to Product instances
    return data.products.map((item: any) => new Product(
      item.id,
      item.title,
      item.description,
      item.category,
      item.price,
      item.discountPercentage,
      item.rating,
      item.stock,
      item.tags,
      item.brand,
      item.sku,
      item.weight,
      item.dimensions,
      item.warrantyInformation,
      item.shippingInformation,
      item.availabilityStatus,
      item.reviews,
      item.returnPolicy,
      item.minimumOrderQuantity,
      item.meta,
      item.thumbnail,
      item.images
    ));

  } catch (error) {
    
    throw error;
  }
}
