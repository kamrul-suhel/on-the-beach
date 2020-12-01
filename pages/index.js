import Head from 'next/head'
import {useSelector} from "react-redux";

export default function Home() {
    const user = useSelector(store => store.user)
  return (
    <div>
      <Head>
        <title>{user.name && user.name || 'Not name'}</title>
          <meta name="description" content={user.description && user.description || 'Some description'}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h2>HI</h2>
    </div>
  )
}
