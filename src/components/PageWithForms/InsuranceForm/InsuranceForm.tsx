import { useState } from 'react';


const InsuranceForm = ({formData, isDisabled, onSubmit}) => {
  const [formState, setFormState] = useState(formData);
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(formState)
  }

  const handleRadioInputChange = (event) => {
    setFormState((current) => {
      return {
        ...current,
        isStudentCoveredByBasicSchoolPlan: event.target.value === 'Yes'
      }
    })
  }
  return(
    <div
      className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="border-stroke py-4 px-6.5 dark:border-strokedark">
        <h1 className="font-medium text-black dark:text-white">
          Insurance
        </h1>
        <p> Lorem ipsum lorem ipsum</p>
      </div>

      <form>
        <div className="p-6.5">
          <div className="mb-4.5">
            <label className="mb-2.5 font-bold block text-black dark:text-white">
              Is every Student covered by basic school plan ?
            </label>
            <div className="flex grid-cols-2 gap-3">
              <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 ">
                <input checked={formState.isStudentCoveredByBasicSchoolPlan === true}
                       onChange={handleRadioInputChange}
                       id="bordered-radio-1" type="radio" value="Yes" name="bordered-radio"
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="bordered-radio-1"
                       className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
              </div>
              <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700 ">
                <input checked={formState.isStudentCoveredByBasicSchoolPlan === false}
                       onChange={handleRadioInputChange}
                       id="bordered-radio-2" type="radio" value="No" name="bordered-radio"
                       className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label htmlFor="bordered-radio-2"
                       className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
              </div>
            </div>
          </div>
          <button
            disabled={isDisabled}
            onClick={handleSubmit}
            className="disabled:opacity-25 inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10"
            type={'submit'}>Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default InsuranceForm