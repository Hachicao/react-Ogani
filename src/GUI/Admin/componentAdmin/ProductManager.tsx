import React from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { useForm, SubmitHandler } from "react-hook-form";
import { columns as baseColumns, data as initialData } from "./ProductData";
import { FaPlusCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
}

type FormValues = {
  name: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  description: string;
};

export const ProductManager = () => {
  const [record, setRecord] = React.useState<Product[]>(initialData);
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = React.useState<Product | null>(null);
  const [isEdit, setIsEdit] = React.useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newData = initialData.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecord(newData);
  };

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (isEdit && modalData) {
      setRecord(
        record.map((item) =>
          item.id === modalData.id ? { ...modalData, ...data } : item
        )
      );
      toast.success("Product edited successfully!");
    } else {
      setRecord([...record, { ...data, id: record.length + 1 }]);
      toast.success("Product added successfully!");
    }
    setShowModal(false);
    reset();
  };

  const handleEdit = (row: Product) => {
    setModalData(row);
    setIsEdit(true);
    setShowModal(true);
    reset(row);
  };

  const handleDelete = (id: number) => {
    setRecord(record.filter((item) => item.id !== id));
  };

  const handleAdd = () => {
    setModalData(null);
    setIsEdit(false);
    setShowModal(true);
    reset({
      name: "",
      image: "",
      price: 0,
      category: "",
      quantity: 0,
      description: "",
    });
  };

  const TableColumns = baseColumns.map((col) => {
    if (col.name === "Action") {
      return {
        ...col,
        cell: (row: Product) => (
          <div>
            <button
              className="btn btn-primary mr-2 ease-in-out transform hover:scale-105"
              onClick={() => handleEdit(row)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger ease-in-out transform hover:scale-105"
              onClick={() => handleDelete(row.id)}
            >
              Delete
            </button>
          </div>
        ),
      };
    }
    return col;
  }) as TableColumn<Product>[];

  const customStyles = {
    headCells: {
      style: {
        fontWeight: "bold",
        fontSize: "18px",
      },
    },
  };

  return (
    <>
      <div id="page-wrapper">
        <div className="container mt-5">
          <div className="flex justify-between items-center mb-4 mt-4 font-semibold  ">
            <input
              type="text"
              className="text-start border p-2 rounded-md mt-4 font-semibold ease-in-out  transform hover:scale-105"
              onChange={handleFilter}
              placeholder="Search products"
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md ml-4 hover:bg-blue-600 transition duration-300 flex items-center mt-4 font-semibold ease-in-out  transform hover:scale-105"
              onClick={handleAdd}
              type="button"
            >
              <FaPlusCircle className="mr-2" />
              Add Product
            </button>
          </div>
          <DataTable
            title="Product List"
            columns={TableColumns}
            data={record}
            pagination
            selectableRows
            fixedHeader
            highlightOnHover
            customStyles={customStyles}
          />
          {showModal && (
            <>
              <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
                <div className="relative w-full my-6 mx-auto max-w-4xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-200 rounded-t">
                      <h3 className="text-2xl font-semibold">
                        {isEdit ? "Edit Product" : "Add New Product"}
                      </h3>
                      <button
                        className="ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter name"
                            {...register("name", { required: true })}
                          />
                          {errors.name && (
                            <span className="text-red-500 text-sm">
                              Name is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Image URL
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter image URL"
                            {...register("image", { required: true })}
                          />
                          {errors.image && (
                            <span className="text-red-500 text-sm">
                              Image URL is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                          </label>
                          <input
                            type="number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter price"
                            {...register("price", {
                              required: true,
                              valueAsNumber: true,
                            })}
                          />
                          {errors.price && (
                            <span className="text-red-500 text-sm">
                              Price is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                          </label>
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter category"
                            {...register("category", { required: true })}
                          />
                          {errors.category && (
                            <span className="text-red-500 text-sm">
                              Category is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Quantity
                          </label>
                          <input
                            type="number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter quantity"
                            {...register("quantity", {
                              required: true,
                              valueAsNumber: true,
                            })}
                          />
                          {errors.quantity && (
                            <span className="text-red-500 text-sm">
                              Quantity is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Description
                          </label>
                          <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter description"
                            {...register("description", { required: true })}
                          />
                          {errors.description && (
                            <span className="text-red-500 text-sm">
                              Description is required
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
                          <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setShowModal(false)}
                          >
                            Close
                          </button>
                          <button
                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Save
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};
