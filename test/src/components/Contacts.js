import React, { useState } from 'react';
import { ContactWrapper, ContactButton, useStyles } from '../styles/Contact.style';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import * as Yup from 'yup';
import 'yup-phone';

const Contact = () => {
  const classes = useStyles();

  const [state, setState] = useState({
    email: '',
    password: '',
    phoneNumber: '',
  });

  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
    phoneNumberError: false,
  });

  const phoneSchema = Yup.string().phone('IR').required();

  const handleChange = ({ target: { name, value } }) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const validateEmail = ({ target: { value } }) => {
    if (value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i) || value === '') {
      setError({
        ...error,
        emailError: false,
      });
    } else {
      setError({
        ...error,
        emailError: true,
      });
    }
  };

  const validatePassword = ({ target: { value } }) => {
    if (value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d\w\W]{8,}$/i) || value === '') {
      setError({
        ...error,
        passwordError: false,
      });
    } else {
      setError({
        ...error,
        passwordError: true,
      });
    }
  };

  const validatePhoneNumber = async ({ target: { value } }) => {
    const status = await phoneSchema.isValid(value);
    if (status || value === '') {
      setError({
        ...error,
        phoneNumberError: false,
      });
    } else {
      setError({
        ...error,
        phoneNumberError: true,
      });
    }
  };

  return (
    <ContactWrapper>
      <h2>
        Facing Problem?
        <br />
        Let's Get In Touch Now
      </h2>
      <div>
        <Paper elevation={4} className={classes.paper}>
          <form className="contact-form">
            <TextField
              margin="normal"
              className={classes.textField}
              label="First Name"
              placeholder="Hamid"
              InputLabelProps={{
                shrink: true,
              }}
              type="text"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              margin="normal"
              className={classes.textField}
              label="Last Name"
              placeholder="Mahi"
              InputLabelProps={{
                shrink: true,
              }}
              type="text"
              variant="outlined"
              size="small"
              required
            />
            <TextField
              margin="normal"
              className={classes.textField}
              label="Your Email Address"
              placeholder="hamid.mahi@mail.com"
              InputLabelProps={{
                shrink: true,
              }}
              type="email"
              variant="outlined"
              size="small"
              required
              fullWidth
              onChange={(e) => {
                handleChange(e);
                validateEmail(e);
              }}
              value={state.email}
              name="email"
              error={error.emailError}
              helperText={error.emailError ? 'Enter a valid email address' : ''}
            />
            <TextField
              margin="normal"
              className={classes.textField}
              label="Your Password"
              placeholder="********"
              InputLabelProps={{
                shrink: true,
              }}
              type="password"
              variant="outlined"
              size="small"
              required
              fullWidth
              onChange={(e) => {
                handleChange(e);
                validatePassword(e);
              }}
              value={state.password}
              name="password"
              error={error.passwordError}
              helperText={
                error.passwordError ? 'Password should be at least 8 charachters and includes numbers and letters.' : ''
              }
            />
            <TextField
              margin="normal"
              className={classes.textField}
              label="Your Phone Number"
              placeholder="+9892145*****"
              InputLabelProps={{
                shrink: true,
              }}
              type="tel"
              variant="outlined"
              size="small"
              required
              fullWidth
              onChange={(e) => {
                handleChange(e);
                validatePhoneNumber(e);
              }}
              value={state.phoneNumber}
              name="phoneNumber"
              error={error.phoneNumberError}
              helperText={error.phoneNumberError ? 'Phone number should match domestic phone numbers' : ''}
            />
            <TextField
              margin="normal"
              className={classes.textField}
              label="Type Your Message"
              placeholder="Velit amet do quis do laboris velit consecte....."
              InputLabelProps={{
                shrink: true,
              }}
              multiline
              rows={4}
              variant="outlined"
              size="small"
              required
              fullWidth
            />
            <ContactButton
              type="submit"
              disabled={error.emailError || error.passwordError || error.phoneNumberError ? true : false}
            >
              Send
            </ContactButton>
          </form>
        </Paper>
      </div>
    </ContactWrapper>
  );
};

export { Contact };
