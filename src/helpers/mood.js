import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import { red, green, yellow } from '@material-ui/core/colors'

export const getMoodIcon = (sence) => {
  switch (sence) {
    case -1:
      return <SentimentVeryDissatisfiedIcon style={{ color: red[700] }} />
    case 0:
      return <SentimentSatisfiedIcon style={{ color: yellow[700] }} />
    case 1:
      return <InsertEmoticonIcon style={{ color: green[700] }} />
    default:
      return <SentimentSatisfiedIcon style={{ color: yellow[700] }} />
  }
}

export function getSenceFromRating(rating) {
  if (rating < 3) {
    return -1
  } else if (rating < 4) {
    return 0
  } else {
    return 1
  }
}
