import React from "react";

function FormField({label, value, onChange,name,type }) {
  return (
    <div>
      <label>
        {label}
        <input type={type} value={value.nome} name={name} onChange={onChange} />
      </label>
    </div>
  );
}
export default FormField;
