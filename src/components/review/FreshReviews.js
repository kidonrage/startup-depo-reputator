import React from 'react'
import moment from 'moment'
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
import { getMoodIcon } from '../../helpers/getMood'

const useStyles = makeStyles((theme) => ({}))

const FreshReviewsTable = ({ reviews, url }) => {
  const classes = useStyles()

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
          {reviews.map((review) => (
            <TableRow key={review.time}>
              <TableCell>
                <a href={url} target="_blank" rel="noreferrer">
                  Google Maps
                </a>
              </TableCell>
              <TableCell>{moment.unix(review.time).format('L')}</TableCell>
              <TableCell>
                <ExpandableText text={review.text} />
              </TableCell>
              <TableCell>{getMoodIcon(review.rating)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default FreshReviewsTable
