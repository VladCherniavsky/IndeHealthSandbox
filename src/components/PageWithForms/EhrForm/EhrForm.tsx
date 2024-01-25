import { useState } from 'react'

const EhrForm = ({formData, onSubmit}) => {
  const [ehrFormState, setEhrFormState] = useState(formData)
  const isSubmitDisabled = !ehrFormState.system || !ehrFormState.organizationName

  const handleSelectChange = (event) => {
    setEhrFormState((current) => {
      return {
        ...current,
        system: event.target.value,
      }
    })
  }

  const handleInputChange = (event) => {
    setEhrFormState((current) => {
      return {
        ...current,
        organizationName: event.target.value
      }
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit(ehrFormState)
  }

  return (
    <div
      className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-4 px-6.5 dark:border-strokedark">
        <h1 className="font-medium text-black dark:text-white">
          Electronic Health Records
        </h1>
        <p> Lorem ipsum lorem ipsum</p>
      </div>

      <form>
        <div className="p-6.5">
          <div className="mb-4.5">
            <label className="mb-2.5 font-bold block text-black dark:text-white">
              Which EHR system does your school use ?
            </label>

            <div className="relative z-20 bg-transparent dark:bg-form-input">
              <select
                onChange={handleSelectChange}
                value={ehrFormState.system}
                className="relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                <option value="">Type your subject</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
                <option value="Canada">Canada</option>
              </select>
              <span className="absolute top-1/2 right-4 z-30 -translate-y-1/2">
                      <svg
                        className="fill-current"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g opacity="0.8">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z"
                            fill=""
                          ></path>
                        </g>
                      </svg>
                    </span>
            </div>
          </div>
          <div className="mb-4.5">
            <label className="mb-2.5 font-bold block text-black dark:text-white">
              What is the organization name of your EHR
            </label>
            <input
              value={ehrFormState.organizationName}
              type="text"
              onChange={handleInputChange}
              placeholder="Select subject"
              className="w-full rounded border-[1.5px] border-stroke bg-transparent py-3 px-5 font-medium outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-whiter dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
            />
          </div>
          <button disabled={isSubmitDisabled} onClick={handleSubmit} className="disabled:opacity-25 inline-flex items-center justify-center rounded-md bg-primary py-4 px-10 text-center font-medium text-white hover:bg-opacity-90 lg:px-8 xl:px-10" type={'submit'}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default EhrForm