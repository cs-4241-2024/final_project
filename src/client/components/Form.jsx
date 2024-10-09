import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FiBriefcase, FiX } from 'react-icons/fi';

const usCities = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA',
  'Dallas, TX',
  'San Jose, CA',
];

const JobApplicationForm = ({ onClose, onSubmit }) => {
  const [formValues, setFormValues] = useState({
    company: '',
    applicationLink: '',
    jobTitle: '',
    location: '',
    jobType: '',
    submitted: 'no', 
    dueDate: new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormValues((prev) => ({ ...prev, dueDate: date }));
  };

  // Check if the form is valid
  const isFormValid =
    formValues.company &&
    formValues.applicationLink &&
    formValues.jobTitle &&
    formValues.location &&
    formValues.jobType;

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch('/applications', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log('Form submitted successfully');
        } else {
          console.error('Form submission failed');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button onClick={onClose} style={modalStyles.closeButton}>
          <FiX size={20} />
        </button>
        <h2 style={modalStyles.heading}>
          <FiBriefcase size={24} style={{padding: 3, verticalAlign: 'middle'}} />
           Add Job Application</h2>

        <form onSubmit={handleSubmit} style={modalStyles.form}>
          <div style={modalStyles.column}>
            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Company:</label>
              <input
                type="text"
                name="company"
                value={formValues.company}
                onChange={handleChange}
                required
                placeholder="Enter company name"
                style={modalStyles.input}
              />
            </div>
            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Application Link:</label>
              <input
                type="url"
                name="applicationLink"
                value={formValues.applicationLink}
                onChange={handleChange}
                required
                placeholder="https://"
                style={modalStyles.input}
              />
            </div>
            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Job Title:</label>
              <input
                type="text"
                name="jobTitle"
                value={formValues.jobTitle}
                onChange={handleChange}
                required
                placeholder="Job title"
                style={modalStyles.input}
              />
            </div>
          </div>

          {/* Column 2 */}
          <div style={modalStyles.column}>
            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Location:</label>
              <select
                name="location"
                value={formValues.location}
                onChange={handleChange}
                required
                style={modalStyles.select}
              >
                <option value="">Select a city</option>
                {usCities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
            <div style={modalStyles.formGroup}>
              <label style={modalStyles.label}>Job Type:</label>
              <select
                name="jobType"
                value={formValues.jobType}
                onChange={handleChange}
                required
                style={modalStyles.select}
              >
                <option value="">Select job type</option>
                <option value="Internship">Internship</option>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
              </select>
            </div>

            {/* Due Date and Submitted on the same row */}
            <div style={modalStyles.horizontalGroup}>
              <div style={{ flex: 1 }}>
                <label style={modalStyles.label}>Due Date:</label>
                <ReactDatePicker
                  selected={formValues.dueDate}
                  onChange={handleDateChange}
                  disabled={formValues.submitted === 'yes'}
                  placeholderText="Select due date"
                  style={modalStyles.input}
                />
              </div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <label style={modalStyles.label}>Have you submitted?</label>
                <div style={modalStyles.radioGroup}>
                  <label>
                    <input
                      type="radio"
                      name="submitted"
                      value="yes"
                      checked={formValues.submitted === 'yes'}
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label style={{ marginLeft: '20px' }}>
                    <input
                      type="radio"
                      name="submitted"
                      value="no"
                      checked={formValues.submitted === 'no'}
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Button Container */}
        <div style={modalStyles.buttonContainer}>
          <button
            type="submit"
            style={{
              backgroundColor: isFormValid ? '#4CAF50' : '#ddd',
              color: isFormValid ? '#fff' : '#aaa',
              cursor: isFormValid ? 'pointer' : 'not-allowed',
              width: '48%',
              borderRadius: '5px',
              padding: '10px 0',
              fontSize: '14px',
              border: 'none',
            }}
            disabled={!isFormValid}
            onClick={handleSubmit}
          >
            Submit
          </button>

          <button
            type="button"
            onClick={onClose}
            style={{
              backgroundColor: 'white',
              color: 'black',
              width: '48%',
              borderRadius: '5px',
              padding: '10px 0',
              fontSize: '14px',
              border: '1px solid #ddd',
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    background: '#fff',
    padding: '30px',
    borderRadius: '10px',
    width: '800px',
    maxWidth: '100%',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '20px',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flex: 1,
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
  },
  label: {
    marginBottom: '5px',
  },
  input: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  select: {
    padding: '8px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  horizontalGroup: {
    display: 'flex',
    gap: '20px',
    marginTop: '10px',
    textAlign: 'left',
  },
  radioGroup: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '5px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginTop: '20px',
  },
  heading: {
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'left', 
    gap: '8px',
    textAlign: 'center',
    margin: '0 0 20px 0',
  }

};

export default JobApplicationForm;
