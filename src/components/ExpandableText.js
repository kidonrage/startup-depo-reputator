import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  expandButton: {
    color: theme.palette.primary.main,
  },
}))

const ExpandableText = ({ text }) => {
  const classes = useStyles()

  const compactTextLength = 250

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = (event) => {
    event.preventDefault()

    setIsExpanded(!isExpanded)
  }

  return (
    <p>
      {isExpanded ? text : text.replace(/^(.{250}[^\s]*).*/, '$1')}{' '}
      {text.length > compactTextLength && (
        <a href="#" className={classes.expandButton} onClick={toggleExpanded}>
          {isExpanded ? 'Свернуть' : 'Читать далее...'}
        </a>
      )}
    </p>
  )
}

export default ExpandableText
