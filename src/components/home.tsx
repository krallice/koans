import React from "react";
import KoanList from "./KoanList";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="max-w-3xl w-full">
        {/* <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-medium text-black mb-4">
            Koans
          </h1>
          <p className="text-lg md:text-xl text-gray-700 font-serif">
            Ancient wisdom for contemplation
          </p>
        </header> */}

        <main>
          <KoanList />
        </main>

        <footer className="mt-16 text-center text-gray-500 font-serif text-sm">
          <p>Meditate on these words. Find your own meaning.</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
