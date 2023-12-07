import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container,Select,InputLabel, Typography, TextField, MenuItem, Button } from '@mui/material';
import '../DataSubcription/DataSubcription.css';
function DataSubscriptionPage() {
  const [formData, setFormData] = useState({
    mountPoint: '',
    duration: '',
    correctionType: '',
    region: '',
    dataFormat: '',
    dataRate: '',
    username: '',
    password: '',
    subscriptionName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    // Implement the subscription logic here, which may include making a request to the server.

    // Clear the form or navigate to the subscription management page.
    setFormData({
      mountPoint: '',
      duration: '',
      correctionType: '',
      region: '',
      dataFormat: '',
      dataRate: '',
      username: '',
      password: '',
      subscriptionName: '',
    });
  };

  return (
    <Container className="container">
       <div className="breadcrumbs">
          <Link to="/">Home</Link>
          <span>&gt;</span>
          <span>Data Subscription</span>
        </div>
    <Typography variant="h5"  className="label" gutterBottom>
     <center>Data Subscription</center> 
    </Typography>
    <p></p>
    <center>
    <form style={{paddingTop:'20px',maxWidth:'500px'}} onSubmit={handleSubscribe}>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
          name="mountPoint"
          label="Select Mount Point"
          variant="outlined"
          fullWidth
          select
          value={formData.mountPoint}
          onChange={handleChange}
          required
        >
          <MenuItem value="mount-point-1">Mount Point 1</MenuItem>
          <MenuItem value="mount-point-2">Mount Point 2</MenuItem>
          {/* Add more mount points here as MenuItem components */}
        </TextField>
        <p></p>
      <TextField
      style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="duration"
        label="Subscription Duration"
        variant="outlined"
        fullWidth
        value={formData.duration}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="correctionType"
        label="Correction Type"
        variant="outlined"
        fullWidth
        value={formData.correctionType}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="region"
        label="Geographical Region"
        variant="outlined"
        fullWidth
        value={formData.region}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="dataFormat"
        label="Data Format"
        variant="outlined"
        fullWidth
        value={formData.dataFormat}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="dataRate"
        label="Data Rate or Quality"
        variant="outlined"
        fullWidth
        value={formData.dataRate}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="username"
        label="Username"
        variant="outlined"
        fullWidth
        value={formData.username}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="password"
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={formData.password}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <TextField
       style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}}
        name="subscriptionName"
        label="Subscription Name/Description"
        variant="outlined"
        fullWidth
        value={formData.subscriptionName}
        onChange={handleChange}
        className="text-input"
      />
       <p></p>
      <button  style={{boxShadow:'rgba(149,157,165,0.2) 0px 8px 24px'}} type="submit"  className="subscribe-button">Subscribe</button>

    </form>
    </center>
  </Container>
  
  );
}

export default DataSubscriptionPage;