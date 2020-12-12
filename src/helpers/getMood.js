import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied'
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied'
import { red, green, yellow } from '@material-ui/core/colors'

export const getMoodIcon = (rating) => {
  if (rating < 3) {
    return <SentimentVeryDissatisfiedIcon style={{ color: red[700] }} />
  } else if (rating < 4) {
    return <SentimentSatisfiedIcon style={{ color: yellow[700] }} />
  } else {
    return <InsertEmoticonIcon style={{ color: green[700] }} />
  }
}
