import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import moment from 'moment'
import { Grid, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import axios from '../../axios'
import PageTitle from '../../components/PageTitle'
import ReviewsListTablePanel from '../../components/tagDetails/ReviewsListTablePanel'
import CardDetailSummaryCard from '../../components/TagDetailCard'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  tagLabel: {
    fontWeight: 700,
  },
}))

const TagDetails = () => {
  const classes = useStyles()

  const { tagId } = useParams()

  const [tagStatistics, setTagStatistics] = useState({})
  const [tagReviews, setTagReviews] = useState([])

  useEffect(() => {
    async function getStatistics() {
      const { data } = await axios.get(`/tags/${tagId}/statistics`)
      setTagStatistics(data)
    }

    getStatistics()
  }, [tagId])

  useEffect(() => {
    async function getReviews() {
      const { data } = await axios.get(`/tags/${tagId}/reviews`)

      const tagReviews = data.map((review) => ({
        ...review,
        moment: moment.unix(review.time),
      }))

      setTagReviews(tagReviews)
    }

    getReviews()
  }, [tagId])

  return (
    <Container fixed>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <PageTitle>
              Статистика по Тегу:{' '}
              <span className={classes.tagLabel}>{tagStatistics.label}</span>
            </PageTitle>
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Средний рейтинг"
              cardTextValue={`${
                tagStatistics.averageRating
                  ? tagStatistics.averageRating.toFixed(1)
                  : '0.0'
              } / 5.0`}
            />
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Всего отзывов"
              cardTextValue={tagStatistics.reviewsCount || 0}
            />
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Новых отзывов"
              cardTextValue={tagStatistics.newReviewsCount || 0}
            />
          </Grid>
          <Grid item xs>
            <CardDetailSummaryCard
              cardLabel="Изменение рейтинга"
              cardTextValue={`${tagStatistics.ratingChange || 0}%`}
            />
          </Grid>
          <Grid item xs={12}>
            <ReviewsListTablePanel reviews={tagReviews} />
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default TagDetails
