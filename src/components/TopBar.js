import React from 'react'
import { useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    color: '#fff',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'none',
    },
  },
}))

const TopBar = () => {
  const classes = useStyles()
  const history = useHistory()

  const goHome = (event) => {
    event.preventDefault()
    history.push('/')
  }

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Link variant="h6" noWrap className={classes.title} onClick={goHome}>
          ДВЖД Репутатор
        </Link>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
