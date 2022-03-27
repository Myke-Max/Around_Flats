import React, { useState, useEffect } from 'react';
import { useLocation, Route } from 'react-router-dom';
import * as qs from 'qs';
import { Typography, Box } from '@mui/material';
import { useFirestoreCollectionData, useFirestore } from 'reactfire';
import PlacesAutocomplete from '../PlacesAutocomplete';
import FlatsList from '../FlatsList';
import ViewingFlat from '../ViewingFlat';
import NoFlatSelectedView from '../NoFlatSelectedView';

interface IFlatsCard {
  id: string;
  imgUrl: string;
  location: string;
  title: string;
  description: string;
  price: string;
}

const ListingFlats = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [activeItem, onActiveItemChange] = useState<string | null>(null);
  const locations = useLocation();

  const handleSearchValue = (value: string): void => {
    setSearchValue(value);
  };

  const { city } = qs.parse(locations.search.slice(1));

  useEffect(() => {
    if (typeof city === 'string') setSearchValue(city);
  }, [city, setSearchValue]);

  const firestore = useFirestore();
  const flatsRef = firestore
    .collection('flats')
    .orderBy('location', 'desc')
    .limit(20);
  const {
    data: flatsList,
  }: {
    data: IFlatsCard[];
  } = useFirestoreCollectionData(flatsRef, { idField: 'id' });

  const getFiltredCardByQuery = () =>
    flatsList?.filter(({ location }): boolean =>
      location.includes(searchValue),
    );

  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <PlacesAutocomplete handleSearchValue={handleSearchValue} />
        <Typography ml={2} mt={3} gutterBottom variant="h2" component="h2">
          Flats to rent
        </Typography>

        <FlatsList
          activeItem={activeItem}
          cards={searchValue ? getFiltredCardByQuery() : flatsList}
        />
      </Box>

      <Box>
        {!activeItem && <NoFlatSelectedView />}
        <Route exact path="/flats/:flatsId">
          <ViewingFlat setActiveItem={onActiveItemChange} />
        </Route>
      </Box>
    </Box>
  );
};
export default ListingFlats;
