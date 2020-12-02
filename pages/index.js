import Head from 'next/head'
import {useSelector} from "react-redux";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import FilterComponent from "../components/FilterComponent";
import Products from "../components/Products";
import Header from "../components/layouts/header";


export default function Home() {
    const global = useSelector(store => store.global)
  return (
    <div className="root">
      <Head>
        <title>{global.name && global.name || 'Add title for SEO'}</title>
          <meta name="description" content={global.description && global.description || 'Some description'}/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header/>

        <Container component="section">
            <Grid container
                  spacing={10}
                  component="section"
                  id="wrapper">

                <Grid item xs={12} sm={4} className="m">
                    <FilterComponent/>
                </Grid>

                <Grid item xs={12} sm={8}>
                    <Products/>
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
