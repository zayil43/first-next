import Head from 'next/head'
import React from 'react'
import A from './A'

const MainContainer = ({children, keywords}) => {
  return (
    <>
    <Head>
        <meta keywords = {'ulbi tv' + keywords}></meta>
        <title>Главная страница</title>
    </Head>
    <div className="navbar">
        <A href={'/'} text='Главная'/>
        <A href={'/users'} text='Пользователи'/>
    </div>
    <div>
        {children}
    </div>
    <style jsx>
            {`
            .navbar{
                background-color:orange;
                padding: 15px;
                display: flex;
                flex-direction: row;
                aligh-items:center;
                justify-content: center;
            }
            `}
        </style>
    </>
  )
}

export default MainContainer