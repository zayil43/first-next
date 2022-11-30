import Head from "next/head";
import Link from "next/link"
import A from '../components/A';
import MainContainer from "../components/MainContainer";


const index = () => {
  return (
    <MainContainer keywords={'main page'}>
        <h1>Главная страница</h1>
    </MainContainer>
  )
}

export default index