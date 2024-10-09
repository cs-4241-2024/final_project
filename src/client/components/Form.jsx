import React, { useState } from 'react';

const Form = ({ handleAddApplication }) => {
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('Under Review');
  const [submitted, setSubmitted] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddApplication({ companyName, jobTitle, dueDate, status });
    setCompanyName('');
    setJobTitle('');
    setDueDate('');
    setSubmitted(false);
    setStatus('Under Review');
  };

  return (
    <div id="form-div">
      <h1>Job Application Tracker</h1>
      <form id="applicationForm" className="pure-form pure-form-stacked" onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="companyName">Company Name:</label>
          <input
            type="text"
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />

          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />

          <label htmlFor="dueDate">Application Due Date:</label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
          />

          <label htmlFor="status">Application Status:</label>
          <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="Under Review">Under Review</option>
            <option value="Interview Stage">Interview Stage</option>
            <option value="Accepted">Accepted</option>
            <option value="Denied">Denied</option>
          </select>

          <label htmlFor="submitted">Submitted:</label>
            <select
              id="submitted"
              value={submitted ? 'true' : 'false'}
              onChange={(e) => setSubmitted(e.target.value === 'true')}
              required
            >
              <option value="false">False</option>
              <option value="true">True</option>
            </select>

          <button type="submit" className="pure-button pure-button-primary">Add Application</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
