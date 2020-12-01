import Head from 'next/head'
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Home() {
    const user = useSelector(store => store.user)
  return (
    <div>
      <Head>
        <title>{user.name && user.name || 'Not name'}</title>
          <meta name="description" content={user.description && user.description || 'Some description'}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Container component="section">
            <Grid container
                  component="section"
                  id="wrapper">
                <Grid item xs={12} sm={4}>
                    <Typography component="h2">Filter section</Typography>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Typography component="h2">List section</Typography>
                </Grid>
            </Grid>
        </Container>
    </div>
  )
}

Home.getInitialProp = ()=> {
    return {
        title: 'has'
    }
}
