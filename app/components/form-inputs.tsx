'use client'

interface FormGridInputTypes {
    hFor: string,
    label: string,
    inputType: string,
    cols: number,
}

export const FormGridInput = ({hFor, label, inputType, cols }: FormGridInputTypes) => {
    return (
        <div className={`col-span-${cols}`}>
        <label
          htmlFor={hFor}
          className='mb-3 block text-base font-medium text-black'
        >
          {label}
        </label>
        <input
          type={inputType}
          placeholder={label}
          className='w-full rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 outline-none focus:border-purple-500 focus:shadow-md'
          {...register({hFor}, { required: true })}
        />
      </div>
    )
}