const FormField = ({
  id,
  value,
  label,
  onChange,
  placeholder,
  type = 'text',
  as = 'input',
  options = [],
}: FormFieldProps) => {
  return (
    <div className='form-field'>
      <label htmlFor={id}>{label}</label>
      {as === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      ) : as === 'select' ? (
        <select id={id} name={id} value={value} onChange={onChange}>
          {options.map(({ label, value }) => (
            <option key={label} value={value}>
              {label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={id}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      )}
    </div>
  );
};

export default FormField;
