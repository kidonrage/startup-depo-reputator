import React from 'react'
import { Typography, Card, CardContent } from '@material-ui/core'

const TagDetailCard = ({ cardLabel, cardTextValue }) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {cardLabel}
        </Typography>
        <Typography variant="h4" component="h3">
          {cardTextValue}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TagDetailCard
