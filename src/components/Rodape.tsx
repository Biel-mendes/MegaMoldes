// Rodape.tsx
import { Box, Typography } from '@mui/material';

function Rodape() {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center', bgcolor: 'background.default' }}>
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Mega Moldes. Todos os direitos reservados.
      </Typography>
    </Box>
  );
}

export default Rodape;