import React from "react";

export const columns = [
  {
    name: "Name",
    selector: (row: { name: string }) => row.name,
    sortable: true,
  },
  {
    name: "image",
    selector: (row: { image: string }) => row.image,
    cell: (row: { image: string }) => (
      <img src={row.image} alt="img" style={{ width: 150, height: 150 }} />
    ),
  },
  {
    name: "Price",
    selector: (row: { price: number }) => row.price,
    sortable: true,
    cell: (row: { price: number }) => <p>${row.price}</p>,
  },
  {
    name: "category",
    selector: (row: { category: string }) => row.category,
    sortable: true,
  },
  {
    name: "quantity",
    selector: (row: { quantity: number }) => row.quantity,
    sortable: true,
  },
  {
    name: "description",
    selector: (row: { description: string }) => row.description,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: { id: number }) => (
      <div>
        <button className="btn btn-primary">Edit</button>
        <button className="btn btn-danger">Delete</button>
      </div>
    ),
  },
];
export const data = [
  {
    id: 1,
    name: "Proudct1",
    image: "/assest/img/featured/feature-1.jpg",
    price: 100,
    category: "Vegetable",
    quantity: 10,
    description: "this is a product",
  },
  {
    id: 2,
    name: "Proudct2",
    image: "/assest/img/featured/feature-2.jpg",
    price: 200,
    category: "Fruit",
    quantity: 20,
    description: "this is a product",
  },
  {
    id: 3,
    name: "Proudct3",
    image: "/assest/img/featured/feature-3.jpg",
    price: 200,
    category: "Vegetable",
    quantity: 30,
    description: "this is a product",
  },
  {
    id: 4,
    name: "Proudct4",
    image: "/assest/img/featured/feature-4.jpg",
    price: 400,
    category: "Fruit",
    quantity: 40,
    description: "this is a product",
  },
  {
    id: 5,
    name: "Proudct5",
    image: "/assest/img/featured/feature-5.jpg",
    price: 500,
    category: "Vegetable",
    quantity: 50,
    description: "this is a product",
  },
  {
    id: 6,
    name: "Proudct6",
    image: "/assest/img/featured/feature-6.jpg",
    price: 50,
    category: "Fruit",
    quantity: 60,
    description: "this is a product",
  },
  {
    id: 7,
    name: "Proudct7",
    image: "/assest/img/featured/feature-7.jpg",
    price: 700,
    category: "Vegetable",
    quantity: 70,
    description: "this is a product",
  },
  {
    id: 8,
    name: "Proudct8",
    image: "/assest/img/featured/feature-8.jpg",
    price: 10,
    category: "Fruit",
    quantity: 80,
    description: "this is a product",
  },
  {
    id: 9,
    name: "Proudct8",
    image: "/assest/img/featured/feature-8.jpg",
    price: 10,
    category: "Fruit",
    quantity: 80,
    description: "this is a product",
  },
  {
    id: 10,
    name: "Proudct8",
    image: "/assest/img/featured/feature-8.jpg",
    price: 10,
    category: "Fruit",
    quantity: 80,
    description: "this is a product",
  },
  {
    id: 11,
    name: "Proudct8",
    image: "/assest/img/featured/feature-8.jpg",
    price: 10,
    category: "Fruit",
    quantity: 80,
    description: "this is a product",
  },
];
