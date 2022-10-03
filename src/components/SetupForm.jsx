import React from "react"

const SetupForm = () => {
  return (
    <>
      <section className=" bg-white xl:max-w-xl rounded-xl md:w-1/2 p-8 flex flex-col justify-center space-y-14 ">
        <form className="space-y-4 text-xl">
          <h2 className="text-center text-3xl">Setup Quiz</h2>

          <div className="flex flex-col space-y-2">
            <label htmlFor="amount">Number of Questions</label>
            <input
              name="amount"
              id="amount"
              type="number"
              className="py-4 px-4 border-2 rounded-2xl focus: outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 hover:shadow-inner"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              className="py-4 px-4 border-2 rounded-2xl focus: outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 hover:shadow-inner"
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="difficulty">Select Difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              className="py-4 px-4 border-2 rounded-2xl focus: outline-none focus:border-indigo-500 focus:ring-indigo-500 focus:ring-1 hover:shadow-inner"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
        </form>
        <button className=" px-4 py-4 bg-indigo-600 text-white tracking-wider rounded-2xl shadow-lg focus:outline-none">
          Play
        </button>
      </section>
    </>
  )
}

export default SetupForm
