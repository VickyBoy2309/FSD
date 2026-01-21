import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted (prevented):", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Text" onChange={handleChange} /><br />

      <input type="email" name="email" placeholder="Email" onChange={handleChange} /><br />

      <input type="password" name="password" placeholder="Password" onChange={handleChange} /><br />

      <input type="number" name="number" placeholder="Number" onChange={handleChange} /><br />

      <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} /><br />

      <input type="url" name="url" placeholder="Website" onChange={handleChange} /><br />

      <input type="search" name="search" placeholder="Search" onChange={handleChange} /><br />

      <input type="date" name="date" onChange={handleChange} /><br />

      <input type="time" name="time" onChange={handleChange} /><br />

      <input type="month" name="month" onChange={handleChange} /><br />

      <input type="week" name="week" onChange={handleChange} /><br />

      <input type="datetime-local" name="datetime" onChange={handleChange} /><br />

      <input type="range" name="range" min="0" max="100" onChange={handleChange} /><br />

      <input type="color" name="color" onChange={handleChange} /><br />

      <input type="file" name="file" onChange={handleChange} /><br />

      <input type="checkbox" name="checkbox" onChange={handleChange} /> Checkbox<br />

      <input type="radio" name="radio" value="option1" onChange={handleChange} /> Radio 1<br />
      <input type="radio" name="radio" value="option2" onChange={handleChange} /> Radio 2<br />

      <select name="select" onChange={handleChange}>
        <option value="">Select option</option>
        <option value="one">One</option>
        <option value="two">Two</option>
      </select><br />

      <textarea name="textarea" placeholder="Textarea" onChange={handleChange}></textarea><br />

      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
