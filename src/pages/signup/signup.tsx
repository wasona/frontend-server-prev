import { useState } from "react";
import axios from "axios";
import "./signup.css";

export const Signup = () => {
  const [form, setForm] = useState({
    user_email: "",
    user_pw: "",
    confirmPassword: "",
    user_name: "",
    user_phone: "",
    user_country: "",
    user_subnational: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.user_pw !== form.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const { confirmPassword, ...signupDataToSend } = form;
      const backendUrl = process.env.REACT_APP_BACKEND_URL_TEST;
      const backendPort = process.env.REACT_APP_BACKEND_PORT_TEST;

      if (!backendUrl || !backendPort) {
        alert("Backend URL or port is missing. Please check your environment variables.");
        return;
      }

      const response = await axios.post(
        `${backendUrl}:${backendPort}/auth/signup`,
        signupDataToSend,
      );
      console.log("Signup successful", response.data);
      alert("Signup successful!");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        alert(`Server error: ${error.response.data.message}`);
      } else if (error instanceof Error) {
        alert("Network error: " + error.message);
      } else {
        alert("An unexpected error occurred: " + error);
      }
    }
  };

  return (
    <SignupForm
      form={form}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Signup;

const SignupForm = ({
  form,
  handleChange,
  handleSubmit,
}: {
  form: {
    user_email: string;
    user_pw: string;
    confirmPassword: string;
    user_name: string;
    user_phone: string;
    user_country: string;
    user_subnational: string;
  };
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}) => (
  <form className="signup-form" onSubmit={handleSubmit}>
    <h2>Sign Up</h2>
    <div className="form-group">
      <label htmlFor="user_name">Username</label>
      <input
        type="text"
        id="user_name"
        name="user_name"
        value={form.user_name}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="user_email">Email</label>
      <input
        type="email" // browser handles validation
        id="user_email"
        name="user_email"
        value={form.user_email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="user_pw">Password</label>
      <input
        type="password" // browser handles validation
        id="user_pw"
        name="user_pw"
        value={form.user_pw}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password" // browser handles validation
        id="confirmPassword"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="user_phone">Phone</label>
      <input
        type="text"
        id="user_phone"
        name="user_phone"
        value={form.user_phone}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="user_country">Country</label>
      <select
        id="user_country"
        name="user_country"
        value={form.user_country}
        onChange={handleChange}
        required
      >
        <option value="">Select your country</option>
        <option value="US">United States</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="user_subnational">Subnational</label>
      <select
        id="user_subnational"
        name="user_subnational"
        value={form.user_subnational}
        onChange={handleChange}
        required
      >
        <option value="">Select your state/province</option>
        <option value="CA">California</option>
        <option value="TX">Texas</option>
        <option value="ON">New York</option>
      </select>
    </div>
    <button type="submit">Sign Up</button>
  </form>
);
