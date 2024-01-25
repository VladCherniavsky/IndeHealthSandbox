import { useState, useEffect } from 'react'
import FormContext from './FormContext.ts';

const initialState = {
  ehr: {
    system: '',
    organizationName: ''
  },
  insurance: {
    isStudentCoveredByBasicSchoolPlan: undefined,
  }
}
const FormDataProvider = ({children}) => {

  const [state, setState] = useState(initialState)

  useEffect(() => {
   const isRequiredDataFilled = state.ehr.system && state.ehr.organizationName && state.insurance.isStudentCoveredByBasicSchoolPlan

    if(isRequiredDataFilled) {
      console.log('ehr form data', state.ehr)
      console.log('insurance form data', state.insurance)
    }
  }, [state])

  return (
    <FormContext.Provider value={{state, setState}}>
      {children}
    </FormContext.Provider>
  )
}

export default FormDataProvider


