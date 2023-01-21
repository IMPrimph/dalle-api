import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
  return (
    <div>
      <div className='flex gap-2 items-center mb-2'>
        <label 
          htmlFor={name} 
          className='block text-sm font-medium text-gray-900'>
            {labelName}
        </label>
        {isSurpriseMe && (
          <button
            type='button'
            onClick={handleSurpriseMe}
            className='py-1 px-2 text-black font-semibold text-xs bg-[#ececf1] rounded-[5px]'

          >
            Surprise Me
          </button>
        )}
      </div>
      <input 
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border-gray-300 border text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3'
      />
    </div>
  )
}

export default FormField