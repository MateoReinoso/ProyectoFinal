import mysql from 'promise-mysql';

import keys from './keys';

const da = mysql.createPool(keys.database);