import React, { Component } from 'react';
import '../UserSettings/UserSettings.css'
class UserSettings extends Component {
  constructor(props) {
    super(props);

    // Initialize state to hold user settings
    this.state = {
      selectedCorrectionSource: '',
      corsSettings: '',
    };
  }

  // Function to handle changes in the correction source dropdown
  handleCorrectionSourceChange = (event) => {
    this.setState({ selectedCorrectionSource: event.target.value });
  }

  // Function to handle changes in CORS settings input
  handleCorsSettingsChange = (event) => {
    this.setState({ corsSettings: event.target.value });
  }

  // Function to save user settings (you can customize this to save to your backend)
  saveUserSettings = () => {
    const { selectedCorrectionSource, corsSettings } = this.state;

    // Here, you would send the user settings to your backend for storage and processing
    // You can use an API call, Redux, or other state management tools for this.

    console.log('User settings saved:', {
      selectedCorrectionSource,
      corsSettings,
    });
  }

  render() {
    const { selectedCorrectionSource, corsSettings } = this.state;

    return (
        <div className="UserSettings"> {/* Apply the UserSettings class to the container */}
        <h1>User Settings</h1>
  
        <label>
          Select Correction Source:
          <select value={selectedCorrectionSource} onChange={this.handleCorrectionSourceChange} className="SelectInput">
            <option value="">Select a source</option>
            <option value="source1">Source 1</option>
            <option value="source2">Source 2</option>
            {/* Add more options as needed */}
          </select>
        </label> 
  
        <br />
  
        <label>
          CORS Settings:
          <input
            type="text"
            value={corsSettings}
            onChange={this.handleCorsSettingsChange}
            className="TextInput"
          />
        </label>
  
        <br />
  
        <button className="SaveButton" onClick={this.saveUserSettings}>Save Settings</button>
      </div>
    );
  }
}

export default UserSettings;
