import { useForm } from "react-hook-form";
import AppLayout from "../ui/AppLayout";
import ImageUploader from "../ui/ImageUploader";
import Input from "../ui/Input";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <AppLayout>
      <div className='w-full h-full p-10'>
        {/* image product uploader */}
        <ImageUploader />
        {/* info product input */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='grid w-full h-[40%] mt-4 bg-secondary-100 rounded-xl grid-cols-2 grid-rows-3 gap-4 p-2'>
          <Input
            placeholder='عنوان محصول'
            name='name product'
            register={register}
            errors={errors}
            validationSchema={{ required: "tetst" }}
          />
          <Input
            placeholder='قیمت'
            name='price'
            type='number'
            register={register}
            errors={errors}
            validationSchema={{ required: "tetst" }}
          />
          <textarea
            name=''
            className='row-start-2 row-end-4 input'
            placeholder='توضیحات'
            id=''></textarea>
          <select
            name=''
            className='input'
            id=''>
            <option value=''>دسته بندی مورد نظر خود را انتخاب کنید</option>
          </select>
          <button className='bg-secondary-600 text-white rounded-2xl'>
            ایجاد محصول جدید
          </button>
        </form>
      </div>
    </AppLayout>
  );
};

export default CreateProduct;