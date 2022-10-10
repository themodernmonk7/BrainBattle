import React from "react"
import { useGlobalContext } from "../context/context"

const SetupForm = () => {
  const { handleChange, handleSubmit, quiz, error } = useGlobalContext()
  const { amount, category, difficulty } = quiz
  return (
    <>
      <section className=" flex w-11/12 flex-col  justify-center space-y-12 rounded-xl bg-white p-8 md:w-10/12 lg:w-1/2 xl:w-1/3 ">
        <form className="space-y-4 text-xl">
          <h2 className="text-center text-3xl font-bold tracking-wider text-gray-600">
            Quizology
          </h2>

          <div className="flex flex-col space-y-2">
            <label htmlFor="amount">Number of Questions</label>
            <input
              name="amount"
              id="amount"
              type="number"
              value={amount}
              onChange={handleChange}
              className=" rounded-md border-2 py-2 px-4 outline-none hover:shadow-inner focus:border-indigo-500 focus:bg-indigo-200/50 focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={category}
              onChange={handleChange}
              className=" rounded-md  border-2 py-2 px-4 outline-none hover:shadow-inner focus:border-indigo-500 focus:bg-indigo-200/50 focus:ring-1 focus:ring-indigo-500"
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
              value={difficulty}
              onChange={handleChange}
              className="rounded-md border-2  py-2 px-4 outline-none hover:shadow-inner focus:border-indigo-500 focus:bg-indigo-200/50 focus:ring-1 focus:ring-indigo-500"
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className=" text-center text-red-600">
              Can't generate questions, Please try different options.
            </p>
          )}
        </form>
        <button
          className=" rounded-md bg-indigo-600 px-4 py-2 tracking-wider text-white shadow-xl focus:outline-none"
          onClick={handleSubmit}
        >
          Play
        </button>
      </section>
    </>
  )
}

export default SetupForm
