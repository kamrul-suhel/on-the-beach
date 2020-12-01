import React from 'react'
import {useSelector} from "react-redux";
import Head from "next/head";

const Home = () => {
    const user = useSelector(store => store.user)

    return (
        <div>
            <Head>
                <title>Some HOme page title</title>
                <meta name="description" content={user.description || 'Some description'}/>
            </Head>
            <h2>HOme page</h2>
        </div>
    )
}

export default Home
