import React from 'react'
import TableContainer from '@material-ui/core/TableContainer'
import Paper from '@material-ui/core/Paper'
import ReviewsListTable from '../ReviewsListTable'

const ReviewsListTablePanel = ({ reviews }) => {
  return (
    <TableContainer component={Paper}>
      <ReviewsListTable reviews={reviews} />
    </TableContainer>
  )
}

export default ReviewsListTablePanel
