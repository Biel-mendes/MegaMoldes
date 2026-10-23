import { useState, type FormEvent } from 'react';
import { Box, Container, Typography, TextField, Button, Alert, Paper } from '@mui/material';

const ENDPOINT = 'https://formspree.io/f/SEU_ID';

type Status = 'idle' | 'enviando' | 'ok' | 'erro';

function Orcamento() {
  const [status, setStatus] = useState<Status>('idle');

  const enviar = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('enviando');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        form.reset();
        setStatus('ok');
      } else {
        setStatus('erro');
      }
    } catch {
      setStatus('erro');
    }
  };

  return (
    <Box component="section" id="orcamento" sx={{ py: { xs: 7, md: 10 }, bgcolor: 'action.hover' }}>
      <Container maxWidth="sm">
        <Typography
          component="h2"
          sx={{
            textAlign: 'center',
            fontSize: { xs: 28, md: 34 },
            fontWeight: 700,
            color: 'primary.main',
            mb: { xs: 4, md: 6 },
            '&::after': {
              content: '""',
              display: 'block',
              width: 56,
              height: 4,
              borderRadius: 2,
              bgcolor: 'secondary.main',
              mx: 'auto',
              mt: 1.5,
            },
          }}
        >
          Orçamento
        </Typography>

        <Paper
          component="form"
          onSubmit={enviar}
          elevation={3}
          sx={{ p: { xs: 3, md: 5 }, borderRadius: 3, display: 'grid', gap: 2.5 }}
        >
          <input type="hidden" name="_subject" value="Novo pedido de orçamento - site" />
          <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

          <TextField name="nome" label="Nome" required fullWidth />
          <TextField name="email" label="E-mail" type="email" required fullWidth />
          <TextField name="mensagem" label="Observação" required fullWidth multiline minRows={5} />

          <Button type="submit" variant="contained" size="large" disabled={status === 'enviando'} sx={{ fontWeight: 700 }}>
            {status === 'enviando' ? 'Enviando...' : 'Enviar'}
          </Button>

          {status === 'ok' && <Alert severity="success">Pedido enviado! Retornaremos em breve.</Alert>}
          {status === 'erro' && (
            <Alert severity="error">Não foi possível enviar. Tente novamente ou fale pelo WhatsApp.</Alert>
          )}
        </Paper>
      </Container>
    </Box>
  );
}

export default Orcamento;