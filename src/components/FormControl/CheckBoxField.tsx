import * as React from 'react'
import { FormControlLabel, Checkbox, Theme, CheckboxProps } from '@material-ui/core'
import FavoriteBorder from '@material-ui/icons/FavoriteBorder'
import Favorite from '@material-ui/icons/Favorite'
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'
import BookmarkIcon from '@material-ui/icons/Bookmark'
const label = { inputProps: { 'aria-label': 'Checkbox demo' } }
const CheckBoxField = () => {
  return (
    <div>
      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
      <Checkbox {...label} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
    </div>
  )
}
export default CheckBoxField
