import { useState } from "react";
import account from "./assets/account.svg";
import trash from "./assets/trash.svg";
const initialValue = {
  fistName: "",
  phoneNumber: "",
  email: "",
  address: "",
};
export default function Contact() {
  const [formData, setFormData] = useState(initialValue);
  const [contact, setContact] = useState([]);
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      !formData.fistName ||
      !formData.phoneNumber ||
      !formData.email ||
      !formData.address
    ) {
      alert("Not Valid");
      return;
    }
    setContact((prev) => [...prev, formData]);
    setFormData(initialValue);
  };
  console.log(contact);

  return (
    <section className="flex w-[980px] max-w-[980px] mx-auto gap-4 items-start h-full">
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-1/3 gap-2 shadow-lg p-4 rounded-lg"
      >
        <h3 className="self-center text-lg font-bold text-neutral-600 border-b mb-4">
          Add New Contact
        </h3>
        <label className="flex flex-col gap-2 text-neutral-500">
          Contact Name:
          <input
            type="text"
            name="fistName"
            value={formData.fistName}
            onChange={changeHandler}
            placeholder="Your Name ..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <label className="flex flex-col gap-2 text-neutral-500">
          Phone:
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={changeHandler}
            placeholder="Phone Number..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <label className="flex flex-col gap-2 text-neutral-500">
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Email..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <label className="flex flex-col gap-2 text-neutral-500">
          Address:
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={changeHandler}
            placeholder="Address..."
            className="border border-neutral-200 rounded-lg py-1 px-3 outline-blue-300"
          ></input>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-bold py-2 rounded-lg mt-2"
        >
          Create
        </button>
      </form>

      {/** the Table of Content Goes here */}
      <section className="flex flex-col gap-2 w-2/3 overflow-y-auto p-4 shadow-lg min-h-[100px] rounded-lg ">
        <h3 className="self-center text-lg font-bold text-neutral-600 border-b mb-4">
          Contact List
        </h3>

        {contact.length > 0 &&
          contact.map((contact, index) => (
            <div
              key={index}
              className="flex item-center justify-between gap-2 bg-blue-100 rounded-xl p-2"
            >
              <div className="flex w-full justify-between items-center">
                <span className="flex gap-1 items-center">
                  <img src={account} className="h-10 w-10"></img>
                  <p className="text-blue-800">{contact?.fistName}</p>
                </span>
                <p className="text-blue-800">{contact?.phoneNumber}</p>
                <p className="text-blue-800">{contact?.email}</p>
                <p className="text-blue-800 w-1/4">{contact?.address}</p>
              </div>

              <button>
                <img src={trash} className="w-6 h-6"></img>
              </button>
            </div>
          ))}
      </section>
    </section>
  );
}
