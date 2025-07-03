"use client"

import React, { useState } from 'react'

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email soumis :', email);
    setEmail('');
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="px-6 py-6 rounded-lg md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center"
            style={{ backgroundColor: '#1E5631' }}>
            <div className="xl:w-0 xl:flex-1">
                <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
                    Recevez nos dernières mises à jour !
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-200">
                    Abonnez-vous à notre newsletter et restez informé des dernières publications.
                </p>
            </div>
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
                <div id="mc_embed_signup">
                    <form className="sm:flex" onSubmit={handleSubmit}>
                        <input
                            className="required rounded-md w-full px-4 py-2 email bg-white"
                            id="mce-EMAIL"
                            placeholder="Entrez votre email"
                            required
                            type="email"
                            value={email}
                            onChange={handleEmailChange}
                            aria-required="true"
                        />
                        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                            <button
                                className="w-full flex items-center justify-center px-5 py-3 text-base leading-6
                                font-medium rounded-md text-white bg-[#A4DE02] focus:ring
                                hover:bg-green-300 focus:outline-none focus:bg-indigo-400
                                transition duration-150 ease-in-out"
                                type="submit"
                            >
                                S&apos;abonner
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter