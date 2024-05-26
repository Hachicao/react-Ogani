import React from "react";

export interface ProductSectionItemProps {
  imageUrl: string;
  percent: number;
  type: string;
  name: string;
  priceAfterDiscount: number;
  priceBeforeDiscount: number;
}
