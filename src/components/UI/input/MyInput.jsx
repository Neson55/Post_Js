import React from 'react'
import classess from './MyInput.module.css'

const MyInput = React.forwardRef((props, ref) =>{
  return(
    <input ref={ref} className={classess.myInput} {...props}/>
  );   
})
export default MyInput