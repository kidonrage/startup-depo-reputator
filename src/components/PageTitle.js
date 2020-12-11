import React from 'react'
import Typography from '@material-ui/core/Typography'

const PageTitle = (props) => {
  return (
    <Typography component="h1" variant="h4" color="primary">
      {' '}
      {props.children}
    </Typography>
  )
}

export default PageTitle
