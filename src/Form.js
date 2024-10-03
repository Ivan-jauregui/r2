
import React, { useState } from 'react';
import './Form.css';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    let error = '';
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      error = 'Correo inválido';
    }
    if (name === 'password' && value.length < 6) {
      error = 'Contraseña debe tener al menos 6 caracteres';
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    validate(name, value);
  };

  return (
    <form className="form">
      <div>
        <label>Nombre:</label>
        <input name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Correo:</label>
        <input name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}
      </div>
      <div>
        <label>Contraseña:</label>
        <input name="password" type="password" value={formData.password} onChange={handleChange} />
        {errors.password && <span className="error">{errors.password}</span>}
      </div>
    </form>
  );
};

export default Form;
