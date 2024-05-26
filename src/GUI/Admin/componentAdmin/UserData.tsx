import React from "react";

export const columns = [
  {
    name: "Name",
    selector: (row: { name: string }) => row.name,
    sortable: true,
  },
  {
    name: "Email",
    selector: (row: { email: string }) => row.email,
    sortable: true,
  },
  {
    name: "Age",
    selector: (row: { age: string }) => row.age,
    sortable: true,
  },
  {
    name: "Action",
    cell: (row: {
      id: number;
      name: string;
      email: string;
      age: number;
      edit: Function;
      delete: Function;
    }) => (
      <div>
        <button className="btn btn-primary mr-2" onClick={() => row.edit(row)}>
          Edit
        </button>
        <button className="btn btn-danger" onClick={() => row.delete(row.id)}>
          Delete
        </button>
      </div>
    ),
  },
];

export const data = [
  {
    id: 1,
    name: "Cao Ha",
    email: "cao.ha.set18@eiu.edu.vn",
    age: 23,
  },
  {
    id: 2,
    name: "Cao Ha 1",
    email: "test@gmail.com",
    age: 20,
  },
  {
    id: 3,
    name: "Garrett Winters",
    email: "test@gmail.com",
    age: 43,
  },
  {
    id: 4,
    name: " Garret Winters",
    email: "test@gmail.com",
    age: 34,
  },
  {
    id: 5,
    name: "Garrett Winters",
    email: "test@gmail.com",
    age: 10,
  },
  {
    id: 6,
    name: "Cao Ha",
    email: "cao.ha.set18@eiu.edu.vn",
    age: 23,
  },
  {
    id: 7,
    name: "Cao Ha 1",
    email: "test@gmail.com",
    age: 20,
  },
  {
    id: 8,
    name: "Garrett Winters",
    email: "test@gmail.com",
    age: 43,
  },
  {
    id: 9,
    name: " Garret Winters",
    email: "test@gmail.com",
    age: 34,
  },
  {
    id: 10,
    name: "Garrett Winters",
    email: "test@gmail.com",
    age: 10,
  },
  {
    id: 11,
    name: "Cao Ha",
    email: "cao.ha.set18@eiu.edu.vn",
    age: 23,
  },
  {
    id: 12,
    name: "Cao Ha 1",
    email: "test@gmail.com",
    age: 20,
  },
  {
    id: 13,
    name: "Garrett Winters",
    email: "test@gmail.com",
    age: 43,
  },
  {
    id: 14,
    name: " Garret Winters",
    email: "test@gmail.com",
    age: 34,
  },
  {
    id: 15,
    name: "Garrett Winters",
    email: "test@gmail.com",
    age: 10,
  },
];
