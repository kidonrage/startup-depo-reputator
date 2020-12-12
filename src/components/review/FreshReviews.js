import React from 'react'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import ExpandableText from '../ExpandableText'

const useStyles = makeStyles((theme) => ({}))

const FreshReviewsTable = () => {
  const classes = useStyles()

  const reviews = []

  return (
    <TableContainer>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Источник</TableCell>
            <TableCell>Дата</TableCell>
            <TableCell>Текст отзыва</TableCell>
            <TableCell>Рейтинг</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reviews.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <a href={row.sourceLink} target="_blank" rel="noreferrer">
                  {row.sourceName}
                </a>
              </TableCell>
              <TableCell>{row.date.toString()}</TableCell>
              <TableCell>
                <ExpandableText text={row.reviewText} />
              </TableCell>
              <TableCell>{row.rating}/5.0</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FreshReviewsTable
