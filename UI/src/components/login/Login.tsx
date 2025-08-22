import { Typography, Box } from '@mui/material';

export const Login = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default',
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        color="primary"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Login
      </Typography>
    </Box>
  );
};
