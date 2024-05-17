'use client';

type FormFieldWrapperProps = {
  label: string;
  hFor: string;
  colSpan: number;
  children: any;
};

const FormFieldWrapper = ({
  label,
  hFor,
  colSpan,
  children,
}: FormFieldWrapperProps) => {
  return (
    <div className={`col-span-1 md:col-span-${colSpan}`}>
      <label
        htmlFor={hFor}
        className='mb-2 block text-base font-medium text-black'
      >
        {label}
      </label>
      {children}
    </div>
  );
};

export default FormFieldWrapper;
