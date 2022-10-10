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
            ? "fixed z-50 flex h-full w-full items-center justify-center bg-black/80 opacity-100"
            : "fixed -z-10 flex h-full w-full items-center justify-center bg-black opacity-0"
        }`}
      >
        <section className="mx-4 space-y-10 rounded-2xl border bg-blue-200 p-12 text-center  md:mx-0 lg:w-1/3  ">
          <div className="space-y-4">
            <span className="text-5xl">🎉</span>
            <h2 className="text-4xl font-bold text-gray-700">Congrats! </h2>
            <p className="text-xl text-gray-600">
              You answered {((correct / questions.length) * 100).toFixed(0)}% of
              questions correctly.
            </p>
          </div>
          <button
            className="rounded bg-indigo-600 px-10 py-2 tracking-wider text-white shadow-xl focus:outline-none"
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
