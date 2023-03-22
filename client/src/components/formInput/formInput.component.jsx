import './formInput.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label className='shrink form-input-label'>
          {label}
        </label>
      )}
    </div> 
    // <div className='group'>
    //   <input className='form-input' {...otherProps} />
    //   {label && (
    //     <label
    //       className={`${
    //         otherProps.value ? 'shrink' : ''
    //       } form-input-label`}
    //     >
    //       {label}
    //     </label>
    //   )}
    // </div> 
  );
};

export default FormInput;


// import './formInput.styles.scss';

// const FormInput = ({ label, ...otherAttributes }) => {
//   return (
//     <div className="group">
//       <label className={`${otherAttributes.value.length}`}>{label}</label>
//       {/* <label className='form-input-label'>{label}</label> */}
//       <input className="form-input" {...otherAttributes} />
//     </div>
//   );
// };

// export default FormInput;