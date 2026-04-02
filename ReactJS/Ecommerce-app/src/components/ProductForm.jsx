import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "./InputField";
import { useNavigate, useParams } from "react-router";
import { memo, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const ProductSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  price: z.coerce.number().positive("Price must be a positive number"),
  categoryId: z.coerce.number().positive("Category is required"),
});

function ProductForm({ handleAddItem, handleEditItem, categories = [] }) {
  const navigate = useNavigate();
    const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(ProductSchema) });

  const handleSubmitForm = (data) => {
    console.log("Form Data:", data);
    if (id) {
      console.log("edited Item", data);
      handleEditItem({ ...data, id });
    } else {
      handleAddItem(data);
    }
    navigate("/admin");
  };

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (id) {
      try {
        const fetchItemById = async (id) => {
          const { data } = await axios.get(`http://localhost:3000/items/${id}`);
          return data;
        };
        fetchItemById(id).then((item) => {
          reset({
            name: item.name,
            price: item.price,
            categoryId: item.categoryId,
          });
        });
      } catch (error) {
        toast.error("Error fetching item data");
        console.error("Error fetching item:", error);
      }
    }
  }, [id, reset]);

  return (
    <>
      <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <form className="m-4" onSubmit={handleSubmit(handleSubmitForm)}>
          <InputField
            title="Name"
            name="name"
            placeholder="Enter product name"
            register={register}
            errors={errors}
          />
          <InputField
            title="Price"
            name="price"
            placeholder="Enter product price"
            register={register}
            errors={errors}
          />
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Category
            </label>
            <select
              {...register("categoryId")}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.categoryId && (
              <p className="text-red-500 text-xs mt-1">
                {errors.categoryId.message}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default memo(ProductForm);
