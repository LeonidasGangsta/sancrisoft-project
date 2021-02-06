const FormSection = (data) => {

  const { label, type } = data;

  return (
    <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
      <h2 className="max-w-sm mx-auto md:w-1/3">{label}</h2>
      <div className="max-w-sm mx-auto md:w-2/3">
        <div className=" relative ">
          <input type={type} className="formInput" placeholder={label} />
        </div>
      </div>
    </div>
  );
};

export default FormSection;
