import React from 'react';
import { TextField, Autocomplete } from '@mui/material/';
import usePlacesAutocomplete from 'use-places-autocomplete';
import { useLocation, useHistory } from 'react-router-dom';

interface IHandleSearchValue {
  handleSearchValue: (event: string) => void;
}
const PlacesAutocomplete = ({
  handleSearchValue,
}: IHandleSearchValue): JSX.Element => {
  const {
    ready,
    suggestions: { data },
    setValue,
  } = usePlacesAutocomplete();

  const location = useLocation();
  const history = useHistory();
  const handlePush = (url: string) => {
    history.push({
      ...location,
      search: `city=${url}`,
    });
  };
  return (
    <Autocomplete
      freeSolo
      disableClearable
      options={data}
      disabled={!ready}
      onInputChange={async (event, inputValue) => {
        if (typeof inputValue === 'string') {
          setValue(inputValue);
          handleSearchValue(inputValue);
          handlePush(inputValue);
        }
      }}
      getOptionLabel={({ description }) => {
        if (description) {
          // const suggestionsCity = description.slice(
          //   0,
          //   description.indexOf(','),
          // );
          return `${description}`;
        }
        return '';
      }}
      renderInput={(params) => (
        <TextField
          color="warning"
          {...params}
          label="City"
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  );
};
export default PlacesAutocomplete;
