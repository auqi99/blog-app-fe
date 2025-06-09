const NotFound = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 text-center"
      style={{
        backgroundImage: "url('https://i.gifer.com/7VE.gif')", // animasi kartun lucu
      }}
    >
      <div className="bg-opacity-80 max-w-lg rounded-2xl bg-white p-10 shadow-xl">
        <h1 className="mb-4 text-7xl font-bold text-indigo-700">404</h1>
        <h2 className="mb-2 text-2xl font-semibold text-gray-800 md:text-3xl">
          Halaman Tidak Ditemukan
        </h2>
        <p className="mb-6 text-base text-gray-700">
          Maaf, halaman yang kamu cari mungkin telah dihapus atau tidak
          tersedia.
        </p>
        <a
          href="/"
          className="inline-block rounded-full bg-indigo-600 px-6 py-3 text-white transition-all duration-300 hover:bg-indigo-700"
        >
          Kembali ke Beranda
        </a>
      </div>
    </div>
  );
};

export default NotFound;
