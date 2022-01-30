import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

type Props = {
  sx: any;
};

const Copyright = ({ sx }: Props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...sx}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
