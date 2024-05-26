import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import DataTable, { TableColumn } from "react-data-table-component";
import { columns as baseColumns, data as initialData } from "./UserData";
import "react-data-table-component-extensions/dist/index.css";
import { FaPlusCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface User {
  id: number;
  name: string;
  email: string;
  age: number;
}

type FormValues = {
  name: string;
  email: string;
  age: number;
};

export const UserManager = () => {
  const [record, setRecord] = React.useState<User[]>(initialData);
  const [showModal, setShowModal] = React.useState(false);
  const [modalData, setModalData] = React.useState<User | null>(null);
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
      toast.success("User edited successfully!");
    } else {
      setRecord([...record, { ...data, id: record.length + 1 }]);
      toast.success("User added successfully!");
    }
    setShowModal(false);
    reset();
  };

  const handleEdit = (row: User) => {
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
    reset(
      {
        name: "",
        email: "",
        age: 0,
      },
      { keepValues: false }
    );
  };

  const TableColumns = baseColumns.map((col) => {
    if (col.name === "Action") {
      return {
        ...col,
        cell: (row: User) => (
          <div>
            <button
              className="btn btn-primary mr-2"
              onClick={() => handleEdit(row)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => handleDelete(row.id)}
            >
              Delete
            </button>
          </div>
        ),
      };
    }
    return col;
  }) as TableColumn<User>[];

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
          <div className="flex justify-between items-center mb-4">
            <input
              type="text"
              className="text-start border p-2 rounded-md mt-4 font-semibold ease-in-out transform hover:scale-105"
              onChange={handleFilter}
              placeholder="Search users"
            />
            <button
              className="bg-blue-500 text-white p-2 rounded-md ml-4 hover:bg-blue-600 transition duration-300 flex items-center mt-4 font-semibold ease-in-out transform hover:scale-105"
              onClick={handleAdd}
              type="button"
            >
              <FaPlusCircle className="mr-2" />
              Add User
            </button>
          </div>
          <DataTable
            title="User List"
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
                        {isEdit ? "Edit User" : "Add New User"}
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
                            Email
                          </label>
                          <input
                            type="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter email"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="text-red-500 text-sm">
                              Email is required
                            </span>
                          )}
                        </div>
                        <div className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            Age
                          </label>
                          <input
                            type="number"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Enter age"
                            {...register("age", {
                              required: true,
                              valueAsNumber: true,
                            })}
                          />
                          {errors.age && (
                            <span className="text-red-500 text-sm">
                              Age is required
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
                            className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="submit"
                          >
                            Save Changes
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
