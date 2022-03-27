import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  card: {
    height: 240,
  },
  cardMedia: {
    display: 'block',
    width: 290,
    objectFit: 'fill',
  },
  descriptionBox: {
    width: 199,
    height: 99,
    overflow: 'hidden',
  },
  detailsButton: {
    background: 'rgba(245, 0, 87, 0.08)',
    borderRadius: 4,
  },
});
export default useStyles;
