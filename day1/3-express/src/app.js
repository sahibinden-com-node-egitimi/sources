import express from 'express';
import bodyParser from 'body-parser';

// routes
import Index from './routes';
import Users from './routes/users';
import Settings from './routes/settings';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', Index);
app.use('/users', Users);
app.use('/settings', Settings);

app.listen(3000, () => console.log('Server is up on 3000 PORT! '));
