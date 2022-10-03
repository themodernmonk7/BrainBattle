function App() {
  return (
    <>
      <main className="h-screen  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center ">
        <section className="bg-white w-11/12 lg:max-w-3xl py-10 px-8 space-y-6 rounded-2xl shadow-md">
          <p className="text-right text-green-500 tracking-wider">
            Correct Answers: 5/8
          </p>
          <article className="flex flex-col justify-center items-center space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold w-full text-center">
              Which country will host the 2020 Summer Olympics?
            </h2>
            <div className="flex flex-col space-y-4 w-2/3">
              <button className="bg-indigo-500 tracking-wider py-2 text-white">
                China
              </button>
              <button className="bg-indigo-500 tracking-wider py-2 text-white">
                Australia
              </button>
              <button className="bg-indigo-500 tracking-wider py-2 text-white">
                Japan
              </button>
              <button className="bg-indigo-500 tracking-wider py-2 text-white">
                Germany
              </button>
            </div>
          </article>
          <button className="block ml-auto px-4 py-2 bg-indigo-600 text-white tracking-wider rounded shadow-lg focus:outline-none">
            Next Question
          </button>
        </section>
      </main>
    </>
  )
}

export default App
