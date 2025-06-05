export interface dimensions {
  width: number;
  height: number;
  depth: number;
}

export interface review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

export type reviews = review[];

export interface meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
