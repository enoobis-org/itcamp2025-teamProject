import React, { useState } from 'react';

const TravelForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    preferences: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    alert(`Thank you, ${formData.name}! We’ll contact you soon.`);
    setFormData({
      name: '',
      email: '',
      preferences: '',
    });
  };

  return (
    <form onSubmit={handleSubmit} className="travel-form">
      <h2 className="form-title">Запланируйте свое путешествие</h2>
      <div className="form-group">
        <label htmlFor="name">ФИО:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Введите свое имя"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Введите свой адрес электронной почты"
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="preferences">Предпочтения в путешествиях:</label>
        <textarea
          id="preferences"
          name="preferences"
          value={formData.preferences}
          onChange={handleChange}
          placeholder="Опишите ваши предпочтения в путешествиях"
          required
        />
      </div>
      <button type="submit" className="submit-btn">Submit</button>
    </form>
  );
};

export default TravelForm;
