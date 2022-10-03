import React from "react"
import { useGlobalContext } from "../context/context"

const Modal = () => {
  const { openModal, closeModal, isModalOpen, correct, questions } =
    useGlobalContext()
  return (
    <>
      <main
        className={`${
          isModalOpen
            ? "bg-black/80 flex justify-center items-center fixed z-50 w-full h-full opacity-100"
            : "bg-black flex justify-center items-center fixed -z-10 w-full h-full opacity-0"
        }`}
      >
        <section className="bg-blue-200 lg:w-1/3 mx-4 md:mx-0 text-center p-12 space-y-10 rounded-2xl  ">
          <div className="space-y-4">
            <span className="text-5xl">🎉</span>
            <h2 className="text-4xl font-bold text-gray-700">Congrats! </h2>
            <p className="text-gray-600 text-xl">
              You answered {((correct / questions.length) * 100).toFixed(0)}% of
              questions correctly.
            </p>
          </div>
          <button
            className="px-10 py-2 bg-indigo-600 text-white tracking-wider rounded shadow-xl focus:outline-none"
            onClick={closeModal}
          >
            Play Again
          </button>
        </section>
      </main>
    </>
  )
}

export default Modal
