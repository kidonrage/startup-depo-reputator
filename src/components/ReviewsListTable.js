import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'
import { lighten, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Switch from '@material-ui/core/Switch'
import DeleteIcon from '@material-ui/icons/Delete'
import FilterListIcon from '@material-ui/icons/FilterList'

function createData(sourceName, sourceLink, date, reviewText, rating) {
  return { sourceName, sourceLink, date, reviewText, rating }
}

const rows = [
  createData('2ГИС', 'https://2gis.ru', new Date(), 'Текст отзыва', 4.3),
  createData('ВК', 'https://vk.com', new Date(), 'Текст отзыва 2', 5.0),
]

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

export default function DenseTable() {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>
                <a href={row.sourceLink} target="_blank" rel="noreferrer">
                  {row.sourceName}
                </a>
              </TableCell>
              <TableCell>{row.date.toString()}</TableCell>
              <TableCell>{row.reviewText}</TableCell>
              <TableCell>{row.rating}/5.0</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
