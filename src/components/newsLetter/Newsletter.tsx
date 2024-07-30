function Newsletter() {
  return (
    <div className="mt-12 flex items-center justify-between bg-orangeGradient px-8 py-6">
      <p className="text-lg font-semibold text-white">
        Subscribe to receive the latest news, special offers, and delicious
        updates from our restaurant. Let's stay in touch!
      </p>
      <form className="flex w-2/6 items-center rounded-3xl bg-white">
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-full border-none bg-transparent px-4 py-1 text-gray-900 outline-none"
        />
        <button className="m-2 mr-4 rounded-3xl border-2 border-lightBlack bg-lightBlack px-6 py-2 text-lg text-snow transition-colors duration-300 hover:bg-snow hover:text-lightBlack">
          Subscribe
        </button>
      </form>
    </div>
  );
}

export default Newsletter;
