import { useForm, SubmitHandler } from "react-hook-form";
import AppLayout from "../ui/AppLayout";
import ImageUploader from "../ui/ImageUploader";
import Input from "../ui/Input";
import { FormData } from "../types/globalTypes";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>(); // تایپ‌گذاری useForm با FormData

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <AppLayout>
      <div className='w-full h-full overflow-auto md:p-10 p-5'>
        {/* image product uploader */}
        <ImageUploader />
        {/* info product input */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='md:grid flex flex-col w-full min-h-[40%] h-auto mt-4 bg-secondary-100 rounded-xl grid-cols-2 grid-rows-3 gap-4 p-2'>
          <Input
            placeholder='عنوان محصول'
            name='title'
            register={register}
            errors={errors}
            validationSchema={{
              required: "پر کردن این مقدار الزامی است",
              minLength: {
                value: 3,
                message: "حداقل 3 حرف وارد کنید",
              },
            }}
          />
          <Input
            placeholder='قیمت'
            name='price'
            type='number'
            register={register}
            errors={errors}
            validationSchema={{
              required: "پر کردن این مقدار الزامی است",
              maxLength: {
                value: 10,
                message: "حداکثر قیمت وارد شده",
              },
            }}
          />
          <div className='row-start-2 row-end-4 flex flex-col'>
            <textarea
              className='input w-full h-full'
              placeholder='توضیحات'
              {...register("description", {
                required: "پر کردن این مقدار الزامی است",
                minLength: {
                  value: 50,
                  message: "Please enter at least 50 characters",
                },
              })}></textarea>
            {errors && errors["description"] && (
              <span className='text-red-500 block text-sm mt-1'>
                {typeof errors["description"]?.message === "string"
                  ? errors["description"]?.message
                  : ""}
              </span>
            )}
          </div>
          <div>
            <select
              {...register("categoryId", {
                required: "پر کردن این مقدار الزامی است",
              })}
              name='categoryId'
              className='input max-h-14 text-xs md:text-base'
              value={""}
              id='categoryId'>
              <option value=''>دسته بندی مورد نظر خود را انتخاب کنید</option>
            </select>
            {errors && errors["categoryId"] && (
              <span className='text-red-500 block text-sm mt-1'>
                {typeof errors["categoryId"]?.message === "string"
                  ? errors["categoryId"]?.message
                  : ""}
              </span>
            )}
          </div>
          <button className='bg-secondary-600 text-white rounded-2xl max-h-14 min-h-14'>
            ایجاد محصول جدید
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default CreateProduct;