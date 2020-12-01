import React from 'react'
import Head from "next/head";
import {wrapper} from "../store";
import {useSelector} from "react-redux";

const About = () => {
    const user = useSelector(store => store.user)
    return (
        <div>
            <Head>
                <title>{user.name || 'No name'}</title>
                <meta name="description" content={user.description || 'Some description'}/>
            </Head>

            <h2>About page</h2>
        </div>
    )
}
export const getStaticProps = wrapper.getStaticProps(async ({store}) => {
    store.dispatch({
        type: 'UPDATE_NAME',
        payload:'UPdate user name'
    })
})

export default About
