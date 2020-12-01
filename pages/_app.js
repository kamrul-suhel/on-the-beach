import React, {Fragment} from 'react'
import {wrapper} from '../store'
import PropTypes from 'prop-types'
import Header from "../components/layouts/header"
import {ThemeProvider} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../src/theme'

function MyApp({Component, pageProps}) {
    return <Fragment>
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Component {...pageProps} />
        </ThemeProvider>
    </Fragment>
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    pageProps: PropTypes.object.isRequired,
}

export default wrapper.withRedux(MyApp)
