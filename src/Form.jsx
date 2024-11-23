import React from "react";

export default function Form({ formData, setFormData, setContact }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    const newId = +formData.id + 1;
    setFormData((prev) => ({ ...prev, [name]: value, id: newId }));
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
  return (
    <>
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
      </section>
    </>
  );
}
