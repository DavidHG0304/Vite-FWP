// src/App.jsx
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-indigo-600">Gatest</h1>
        <ul className="hidden md:flex space-x-8 text-gray-700">
          <li><a href="#" className="hover:text-indigo-600 transition">Home</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">About</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Breeds</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Care</a></li>
          <li><a href="#" className="hover:text-indigo-600 transition">Blog</a></li>
        </ul>
        <button className="md:hidden px-3 py-2 text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50 transition">
          Menu
        </button>
      </nav>

      <section className="flex flex-row items-center justify-between px-8 md:px-20 py-20 gap-x-24">
        <div className="w-1/2 max-w-lg space-y-6">
          <h2 className="text-5xl font-extrabold text-gray-800 leading-tight">
            Descubre qué <span className="text-indigo-600">gatitos</span> te gustan
          </h2>
          <p className="text-gray-600 text-lg">
            Explora el maravilloso mundo de los gatos. Aprende sobre diferentes razas, consejos de cuidado y encuentra a tu amigo peludo perfecto.
          </p>
          <div className="flex flex-row gap-6 mt-6">
  <button
    id="Button1"
    className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 transition"
  >
    Explorar Razas
  </button>
  <button
    id="Button2"
    className="px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition"
  >
    Aprender Más
  </button>
</div>
        </div>
        <div className="w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519052537078-e6302a4968d4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Gatobnito"
            className="rounded-3xl shadow-2xl transform hover:scale-105 transition duration-500 max-w-full"
          />
        </div>
      </section>
    </div>
  );
}
