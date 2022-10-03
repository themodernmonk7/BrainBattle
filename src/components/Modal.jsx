import React from "react"

const Modal = () => {
  return (
    <section className="bg-blue-200 w-1/3 text-center p-12 space-y-10 rounded-2xl fixed z-50 ">
      <div className="space-y-4">
        <h2 className="text-4xl font-bold text-gray-700">Congrats! 🎉</h2>
        <p className="text-gray-600 text-xl">
          You answered 50% of questions correctly.
        </p>
      </div>
      <button className="px-10 py-2 bg-indigo-600 text-white tracking-wider rounded shadow-xl focus:outline-none">
        Play Again
      </button>
    </section>
  )
}

export default Modal
