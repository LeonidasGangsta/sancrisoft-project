import { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { emptyCart } from "../actions";
import Axios from 'axios';

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

  const myCart = useSelector(state => state.myCart)
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    clientName: "",
    clientID: "",
    clientAddress: "",
    clientPhone: "",
    clientEmail: "",
  });

  const handleChange = ( {name, value} ) => {
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (event) => {
    let packageToSend = {...formData, total: myCart.total}
    event.preventDefault();
    Axios.post(`${process.env.REACT_APP_SERVER_URL}/api/order`, packageToSend)
      .then(() => {
        let name = formData.clientName;
        dispatch(emptyCart())
        setFormData({
          clientName: "",
          clientID: "",
          clientAddress: "",
          clientPhone: "",
          clientEmail: "",
        })
        window.location.href = `${process.env.REACT_APP_CLIENT_URL}/thanks/${name}`
      })
  };

  return (
    <form className="formStyle" onSubmit={(event) => handleSubmit(event)}>
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
        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3">{dataToAsk[0].label}</h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <input
                name='clientName'
                type={dataToAsk[0].type}
                className="formInput"
                placeholder={dataToAsk[0].label}
                onChange={({target}) => handleChange(target)}
                value={formData.clientName}
                required
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3">{dataToAsk[1].label}</h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <input
                name='clientID'
                type={dataToAsk[1].type}
                className="formInput"
                placeholder={dataToAsk[1].label}
                onChange={({target}) => handleChange(target)}
                value={formData.clientID}
                required
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3">{dataToAsk[2].label}</h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <input
                name='clientAddress'
                type={dataToAsk[2].type}
                className="formInput"
                placeholder={dataToAsk[2].label}
                onChange={({target}) => handleChange(target)}
                value={formData.clientAddress}
                required
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3">{dataToAsk[3].label}</h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <input
                name='clientPhone'
                type={dataToAsk[3].type}
                className="formInput"
                placeholder={dataToAsk[3].label}
                onChange={({target}) => handleChange(target)}
                value={formData.clientPhone}
              />
            </div>
          </div>
        </div>
        <hr />
        <div className="items-center w-full p-4 space-y-4 text-gray-500 md:inline-flex md:space-y-0">
          <h2 className="max-w-sm mx-auto md:w-1/3">{dataToAsk[4].label}</h2>
          <div className="max-w-sm mx-auto md:w-2/3">
            <div className=" relative ">
              <input
                name='clientEmail'
                type={dataToAsk[4].type}
                className="formInput"
                placeholder={dataToAsk[4].label}
                onChange={({target}) => handleChange(target)}
                value={formData.clientEmail}
                required
              />
            </div>
          </div>
        </div>
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
