import EhrForm from '../../components/PageWithForms/EhrForm'
import InsuranceForm from '../../components/PageWithForms/InsuranceForm'
import { useContext } from 'react';
import FormContext from '../../context/FormContext.ts';

const PageWithForms = () => {
  const {state, setState} = useContext(FormContext);
  const isInsuranceFormDisabled = !state.ehr.system || !state.ehr.organizationName
  const handleEhrFormSubmit = (data) => {
    setState((current) => {
      return {
        ...current,
        ehr: data
      }
    })
  }

  const handleInsuranceFormSubmit = (data) => {
    setState((current) => {
      return {
        ...current,
        insurance: data
      }
    })
  }

  return (
    <div className="grid grid-cols-1 gap-9 sm:grid-cols-1">
      <EhrForm
        formData={state.ehr}
        onSubmit={handleEhrFormSubmit}
      />
      <InsuranceForm
        isDisabled={isInsuranceFormDisabled}
        formData={state.insurance}
        onSubmit={handleInsuranceFormSubmit}
      />
    </div>
  );
};

export default PageWithForms
