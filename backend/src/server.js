import app from './app';
import './app/jobs';

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`));
