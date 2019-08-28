import React from 'react'

const Contact = () => {
  return(
    <form className="w-full" action="https://docs.google.com/forms/d/e/1FAIpQLSf59qqalA9EcMf0VukXyDaAfjNiGfpanlU3fjbXVSPDth23bA/formResponse">
      <label className="block">
        <span className="text-gray-700">お名前</span>
        <input
          type="text"
          name="entry.1127121424"
          className="form-input mt-1 block w-full"
          placeholder="大野知恵"
          required
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">メールアドレス</span>
        <input
          type="email"
          name="entry.719966787"
          className="form-input mt-1 block w-full"
          placeholder="chie@example.com"
          required
        />
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">お問い合わせ内容</span>
        <textarea
          name="entry.907539306"
          className="form-textarea mt-1 block w-full"
          rows="3"
          placeholder="１億出して全部買いたい"
          required
        />
      </label>
      <div className="flex justify-end">
        <button
          type="submit"
          name="button"
          className="mt-4 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          value="送信">
            送信
        </button>
      </div>
    </form>
  )
}

export default Contact