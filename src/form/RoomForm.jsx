import React from 'react'
import TextField from '@material-ui/core/TextField';




const RoomTextInput = ({
    id,
    input,
    label,
    fullwidth,
    meta: { touched, error },
    ...custom
  }) => (
    <TextField
      fullwidth
      hintText={label}
      floatingLabelText={label}
      errorText={touched && error}
      {...input}
      {...custom}
      label={label}
      
    />
  )
  export default RoomTextInput