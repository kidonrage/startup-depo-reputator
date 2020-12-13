import { makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyles = makeStyles((theme) => ({
  expandButton: {
    color: theme.palette.primary.main,
  },
}))

const ExpandableText = ({ text }) => {
  const classes = useStyles()

  const compactTextLength = 100

  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = (event) => {
    event.preventDefault()

    setIsExpanded(!isExpanded)
  }

  const trimByWord = (sentence) => {
    var result = sentence
    var resultArray = result.split(' ')
    if (resultArray.length > compactTextLength) {
      resultArray = resultArray.slice(0, compactTextLength)
      result = resultArray.join(' ') + '...'
    }
    return result
  }

  return (
    <p>
      {isExpanded ? text : trimByWord(text)}{' '}
      {text.length > compactTextLength && (
        <a href="#" className={classes.expandButton} onClick={toggleExpanded}>
          {isExpanded ? 'Свернуть' : 'Читать далее...'}
        </a>
      )}
    </p>
  )
}

export default ExpandableText
