export default function Header() {
  return (
    <section className="flex py-2 justify-center w-full h-20 shadow-md">
      <div className="flex justify-between max-w-[980px] w-[980px] items-center h-full">
        <p className="text-xl font-bold text-blue-600">Contact App</p>
        <button className="px-3 py-2 rounded-lg bg-blue-600 text-white text-semibold">Login / Register</button>
      </div>
    </section>
  );
}
