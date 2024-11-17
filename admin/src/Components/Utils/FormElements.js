import React from 'react';
import {  useField } from 'formik';

export const CustomInput = ({label, ...props})=>{
    const [field, meta] = useField(props)
    return(
     <>
     <div>
      <label>{label}</label>
       <input {...field} {...props} 
       className={meta.touched && meta.error ? "input-error": null}/>
      <br />
      {meta.touched && meta.error && <p>{meta.error }</p>}
     </div>
       
      </>
    )
  }

  export const CustomDateInput = ({label, ...props})=>{
    
    const [field, meta] = useField(props)
    return(
     <>
     <div>
      <label>{label}</label>
       <input {...field} {...props} 
       className={meta.touched && meta.error ? "input-error": null}/>
      <br />
      {meta.touched && meta.error && <p>{meta.error }</p>}
     </div>
       
      </>
    )
  }

export const CustomSelect = ({label, ...props})=>{
    const [field, meta] = useField(props)
  
    return(
     <>
      <label>{label}</label>
       <select {...field} {...props} 
       className={meta.touched && meta.error ? "input-error": ""}
       />
      {meta.touched && meta.error && <p>{meta.error }</p>}
      </>
    )
  }

  export const CustomCheckBox = ({...props})=>{
    const [field, meta] = useField(props)
    return(
     <>
     <div className='checkbox'>
       <input {...field} {...props} 
       className={meta.touched && meta.error ? "input-error": ""}/>
      <span>I accept terms </span>
      <br />
      {meta.touched && meta.error && <p>{meta.error }</p>}
     </div>
       
      </>
    )
  }