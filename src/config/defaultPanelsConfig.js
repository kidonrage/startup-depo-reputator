import ReviewsCountPanel from '../components/review/ReviewsCountPanel'
import PositiveNegativeReviewsCountPanel from '../components/review/PositiveNegativeReviewsCountPanel'
import FreshReviewsPanel from '../components/review/FreshReviewsPanel'

const defaultPanelsConfig = [
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

export default defaultPanelsConfig
