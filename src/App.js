
import './App.css';
import React, { useState } from 'react';

function App() {
  // Khởi tạo state cho các trường của form
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Hàm xử lý thay đổi của các trường trong form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Hàm xử lý khi form được submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lưu trữ dữ liệu đã nhập
    setSubmittedData(formData);
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="container"> {/* Sử dụng class container */}
      <h1>Form Example</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>

      {/* Hiển thị thông tin đã nhập */}
      {submittedData && (
        <div>
          <h2>Thông tin đã nhập:</h2>
          <p>Username: {submittedData.username}</p>
          <p>Email: {submittedData.email}</p>
          <p>Password: {submittedData.password}</p>
        </div>
      )}
    </div>
  );
}

export default App;
