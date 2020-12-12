import React, { useState, useEffect } from 'react'
import { Grid, Container, Button } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import SettingsIcon from '@material-ui/icons/Settings'
import { makeStyles } from '@material-ui/core/styles'
import DateFnsUtils from '@date-io/date-fns'

import PageTitle from '../../components/PageTitle'
import SettingsDialog from '../../components/review/SettingsDialog'
import ReviewsCountPanel from '../../components/review/ReviewsCountPanel'
import PositiveNegativeReviewsCountPanel from '../../components/review/PositiveNegativeReviewsCountPanel'
import FreshReviewsPanel from '../../components/review/FreshReviewsPanel'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(3),
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
  buttonContainer: {
    textAlign: 'right',
  },
  paperHeader: {},
  datePickersContainer: {
    textAlign: 'right',
  },
  datePicker: {
    marginLeft: theme.spacing(2),
  },
}))

const Home = () => {
  const classes = useStyles()

  const [panelsConfiguration, setPanelsConfiguration] = useState([])
  const [isSettingsOpened, setIsSettingsOpened] = useState(false)

  useEffect(() => {
    let savedPanelsConfig = localStorage.getItem('panelsConfig')

    if (!savedPanelsConfig) {
      savedPanelsConfig = [
        {
          panelName: 'reviewsCount',
          panelLabel: 'Количество отзывов',
          panelComponent: <ReviewsCountPanel />,
          showPanel: true,
        },
        {
          panelName: 'positiveNegativeReviewsCount',
          panelLabel: 'Количество позитивных/нейтральных отзывов',
          panelComponent: <PositiveNegativeReviewsCountPanel />,
          showPanel: true,
        },
        {
          panelName: 'freshReviews',
          panelLabel: 'Новые отзывы',
          panelComponent: <FreshReviewsPanel />,
          showPanel: true,
        },
      ]
    }

    setPanelsConfiguration(savedPanelsConfig)
  }, [])

  const handlePanelsConfigSave = (updatedConfig) => {
    console.log('handlePanelsConfigSave')
    setPanelsConfiguration(updatedConfig)
  }

  const handleOpenSettings = () => {
    setIsSettingsOpened(true)
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Container fixed>
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <PageTitle>Обзор</PageTitle>
              </Grid>
              <Grid item xs={12} md={6} className={classes.buttonContainer}>
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  startIcon={<SettingsIcon />}
                  onClick={handleOpenSettings}
                >
                  Настройки
                </Button>
              </Grid>
              {panelsConfiguration.map((panelConfig) => {
                return panelConfig.showPanel ? (
                  <Grid item xs={12}>
                    {panelConfig.panelComponent}
                  </Grid>
                ) : (
                  <></>
                )
              })}
            </Grid>
          </div>
        </Container>
      </MuiPickersUtilsProvider>
      <SettingsDialog
        open={isSettingsOpened}
        handleClose={() => setIsSettingsOpened(false)}
        initialPanelsConfiguration={panelsConfiguration}
        handlePanelsConfigSave={handlePanelsConfigSave}
      />
    </>
  )
}

export default Home
