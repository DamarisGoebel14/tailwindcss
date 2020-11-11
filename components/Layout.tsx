import React from 'react'
import Head from 'next/head'

const Layout:  React.FC = ({children}) => {
return (
    <div>
        <Head>

        </Head>

        <>{children}</>

        <div className="flex mb-4">
        <div className="w-full bg-gray-500 h-12"></div>
    </div>

    <div className="flex mb-4">
        <div className="w-1/2 bg-gray-400 h-12"></div>
        <div className="w-1/2 bg-gray-500 h-12"></div>
    </div>

    <div className="flex mb-4">
        <div className="w-1/3 bg-gray-400 h-12"></div>
        <div className="w-1/3 bg-gray-500 h-12"></div>
        <div className="w-1/3 bg-gray-400 h-12"></div>
    </div>

    <div className="flex mb-4">
        <div className="w-1/4 bg-gray-500 h-12"></div>
        <div className="w-1/4 bg-gray-400 h-12"></div>
        <div className="w-1/4 bg-gray-500 h-12"></div>
        <div className="w-1/4 bg-gray-400 h-12"></div>
    </div>

    <div className="flex mb-4">
        <div className="w-1/5 bg-gray-500 h-12"></div>
        <div className="w-1/5 bg-gray-400 h-12"></div>
        <div className="w-1/5 bg-gray-500 h-12"></div>
        <div className="w-1/5 bg-gray-400 h-12"></div>
        <div className="w-1/5 bg-gray-500 h-12"></div>
    </div>

    <div className="flex">
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
        <div className="w-1/6 bg-gray-400 h-12"></div>
        <div className="w-1/6 bg-gray-500 h-12"></div>
    </div>

    </div>
)
}

export default Layout