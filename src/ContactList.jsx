import React from "react";
import account from "./assets/account.svg";
import trash from "./assets/trash.svg";
export default function ContactList({ contact, setContact }) {
  const deleteHandler = (id) => {
    const newList = contact.filter((item) => item.id !== id);
    setContact(newList);
  };

  return (
    <>
      {/** the Table of Content Goes here */}
      <section className="flex flex-col gap-2 w-2/3 overflow-y-auto p-4 shadow-lg min-h-[100px] rounded-lg ">
        <h3 className="self-center text-lg font-bold text-neutral-600 border-b mb-4">
          Contact List
        </h3>

        {contact.length > 0 &&
          contact.map((contact) => (
            <div
              key={contact.id}
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

              <button onClick={() => deleteHandler(contact.id)}>
                <img src={trash} className="w-6 h-6"></img>
              </button>
            </div>
          ))}
      </section>
    </>
  );
}
