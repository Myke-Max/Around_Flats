import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useFirestoreDocData, useFirestore } from 'reactfire';
import { Box } from '@mui/material';
import { GoogleMap, Marker } from '@react-google-maps/api';
import LoadingFlatView from '../LoadingFlatView';
import ErrorLoadView from '../ErrorLoadView';
import useStyle from './useStyleMUI';

interface Props {
  setActiveItem: React.Dispatch<string | null>;
}
interface IDetailsFlat {
  id: string;
  lat: number;
  lng: number;
}

interface Params {
  flatsId: string;
}

const mapContainerStyle = {
  width: '65vw',
  height: '100vh',
};

const ViewingFlat = ({ setActiveItem }: Props): JSX.Element => {
  const { flatsId } = useParams<Params>();
  const classes = useStyle();
  const [center, setCenter] = useState<any>();
  const [viewPage, SetViewPage] = useState<any>([]);

  const firestore = useFirestore();
  const flatsRef = firestore.collection('flats').doc(flatsId);

  const {
    error,
    status,
    data: detailsFlat,
  }: {
    error: unknown;
    status: unknown;
    data: IDetailsFlat;
  } = useFirestoreDocData(flatsRef, { idField: 'id' });

  useEffect(() => {
    if (!detailsFlat) return;
    if (!flatsId) return;
    SetViewPage(detailsFlat);
    setActiveItem(flatsId);
  }, [detailsFlat, flatsId, setActiveItem]);
  const { lat, lng } = viewPage;
  useEffect(() => {
    setCenter({
      lat,
      lng,
    });
  }, [flatsId, lat, lng]);

  const loading = status === 'loading';
  const success = status === 'success';
  const notFoundFlat = status === 'error' || !detailsFlat;
  return (
    <Box className={classes.container}>
      {loading && <LoadingFlatView />}
      {success && (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          zoom={18}
          center={center}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
      {error || (notFoundFlat && <ErrorLoadView />)}
    </Box>
  );
};
export default ViewingFlat;
