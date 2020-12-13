import React, { useState } from 'react'
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
import ExpandableText from './ExpandableText'
import { getMoodIcon } from '../helpers/mood'
import { stableSort, getComparator } from '../helpers/arraySorting'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  moodIconContainer: {
    textAlign: 'center',
    paddingRight: 22,
  },
})

const ReviewsListTable = ({ reviews }) => {
  const classes = useStyles()

  const [order, setOrder] = useState('asc')
  const [orderBy, setOrderBy] = useState(null)

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property)
  }

  return (
    <Table className={classes.table} size="small">
      <TableHead>
        <TableRow>
          <TableCell>Источник</TableCell>
          <TableCell width={120}>
            <TableSortLabel
              active={orderBy === 'time'}
              direction={orderBy === 'time' ? order : 'asc'}
              onClick={createSortHandler('time')}
            >
              Дата
            </TableSortLabel>
          </TableCell>
          <TableCell>Текст отзыва</TableCell>
          <TableCell width={120}>
            <TableSortLabel
              active={orderBy === 'sence'}
              direction={orderBy === 'sence' ? order : 'asc'}
              onClick={createSortHandler('sence')}
            >
              Настроение
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stableSort(reviews, getComparator(order, orderBy)).map((row) => (
          <TableRow key={row.name}>
            <TableCell>
              <a href={row.sourceLink} target="_blank" rel="noreferrer">
                {row.sourceName}
              </a>
            </TableCell>
            <TableCell>
              {row.moment
                ? row.moment.format('DD.MM.YYYY')
                : 'Не удалось получить дату'}
            </TableCell>
            <TableCell>
              <ExpandableText text={row.text} />
            </TableCell>
            <TableCell>
              <div className={classes.moodIconContainer}>
                {getMoodIcon(row.sence)}
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default ReviewsListTable
