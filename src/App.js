import React from 'react'
import { AxiosProvider } from 'react-axios'
import axios from 'axios'
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { red, grey } from '@material-ui/core/colors'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Home from './pages/home/Home'
import TagDetails from './pages/tagDetails/TagDetails'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  title: {
    flexGrow: 1,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e21a1a',
    },
    secondary: {
      main: grey[500],
    },
  },
})

function App() {
  const classes = useStyles()

  return (
    // <AxiosProvider instance={axiosInstance}>
    <Router>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" noWrap className={classes.title}>
                ДВЖД Репутатор
              </Typography>
            </Toolbar>
          </AppBar>

          <main className={classes.content}>
            <div className={classes.drawerHeader} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/tags/:id" component={TagDetails} />
            </Switch>
          </main>
        </div>
      </ThemeProvider>
    </Router>
    // </AxiosProvider>
  )
}

export default App
