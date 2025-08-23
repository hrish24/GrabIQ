import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";

const Profile: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "Hrishikesh",
    lastName: "N",
    email: "rushnahar+240@gmail.com",
    phone: "7350322881",
    status: "Active",
    theme: "light",  // default
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Updated Profile:", formData);
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Profile Settings</Typography>

      {/* User Info */}
      <TextField
        label="First Name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email Address"
        name="email"
        value={formData.email}
        disabled
        fullWidth
        margin="normal"
      />
      <TextField
        label="Phone Number"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      
      {/* Actions */}
      <Box sx={{ mt: 3, display: "flex", gap: 2 }}>
        <Button variant="outlined" color="secondary" onClick={() => window.history.back()}>Cancel</Button>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Update Profile
        </Button>
      </Box>
    </Box>
  );
};

export default Profile;
