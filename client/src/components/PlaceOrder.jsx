import FormSection from "./FormSection";

const PlaceOrderForm = () => {
    
  //Data to be asked on the form
  const dataToAsk = [
    {
      label: "Full Name",
      type: "text",
    },
    {
      label: "ID",
      type: "number",
    },
    {
      label: "Address",
      type: "textarea",
    },
    {
      label: "Phone Number",
      type: "number",
    },
    {
      label: "Email",
      type: "email",
    },
  ];

  return (
    <form className="formStyle" onSubmit={(e) => e.preventDefault()}>
      <div className="p-4 bg-gray-100 border-t-2 border-yellow-500 rounded-lg bg-opacity-5">
        <div className="max-w-sm mx-auto md:w-full md:mx-0">
          <div className="inline-flex items-center space-x-4">
            <h1 className="text-gray-600 font-bold text-2xl">
              Are you ready to place the order?
            </h1>
          </div>
        </div>
      </div>
      <div className="space-y-6 bg-white">
        <hr />
        {dataToAsk.map(({ label, type }, id) => (
          <FormSection key={id} label={label} type={type} />
        ))}
        <hr />
        <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
          <button type="submit" className="blueBtn">
            Place the order
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrderForm;
