import React, { useState } from 'react';
import { TextField, InputAdornment, IconButton } from '@mui/material/';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface InputProps {
  id: string;
  name: string;
  label: string;
  value: string;
  handleChange: (e: React.ChangeEvent) => void;
  handleBlur: (e: React.FocusEvent) => void;
  touchedPassword: boolean | undefined;
  errorPassword: string | undefined;
}

const PasswordInput: React.FC<InputProps> = ({
  id,
  name,
  label,
  value,
  handleChange,
  handleBlur,
  touchedPassword,
  errorPassword,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);
  return (
    <>
      <TextField
        sx={{ mb: 6 }}
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        color="warning"
        id={id}
        name={name}
        label={label}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        error={touchedPassword && Boolean(errorPassword)}
        helperText={touchedPassword && errorPassword}
        required
      />
    </>
  );
};

export default PasswordInput;
