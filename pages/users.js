import Link from 'next/link'
import {useState, useEffect} from 'react'
import MainContainer from '../components/MainContainer'

const users = ({users}) => {
    

  return (
    <MainContainer keywords={'main page'}>
        <h1>Пользователи</h1>
        <ul>
            {users.map(user =>
            <li key={user.id}>
                <Link href={ `/users/${user.id}`}>
                    <div>
                        {user.name}
                    </div>
                </Link>
            </li>)}
        </ul>
    </MainContainer>
  )
}

export default users

    export async function getStaticProps(context) {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const users = await response.json()
        return {
        props: {users}, // will be passed to the page component as props
        }
    }