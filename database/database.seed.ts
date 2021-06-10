import {findAllProducts, findAllUsers} from './database.data';
import {DATABASE_CONNECTION} from '../src/constants';

const util = require('util');
const password = require('password-hash-and-salt');

console.log('Seeding the database with some data...');

const MongoClient = require('mongodb').MongoClient;

const dbName = 'ikse_db';
const client = new MongoClient(DATABASE_CONNECTION);

// CONNECT TO DATABASE
client.connect(async (err, client) => {
    try {
        if(err) {
            console.log('Cannot connect to database. Please check username and password. Exiting...');
            process.exit();
        }
        console.log('Connected to the database');
        const db = client.db(dbName);

        // SEED USERS
        const users = findAllUsers();
        console.log('Seeding users... Found: ' + users.length);

        for(let i = 0; i < users.length; i++) {
            const user = users[i];
            const newUser = {...user};
            const hashPassword = util.promisify(password(newUser.password).hash);

            newUser.passwordHash = await hashPassword();
            delete newUser.password;

            console.log('Seeding user ', newUser);
            await db.collection('users').insertOne(newUser);
        }

        // SEED PRODUCTS
        const products = findAllProducts();
        console.log('Seeding products... Found: ' +products.length);

        for(let i = 0; i < products.length; i++) {
            const product = products[i];
            console.log('Seeding product ', product);
            await db.collection('products').insertOne(product);
        }

        console.log('Finished');
        await client.close();
        process.exit();
    }
    catch (error) {
        console.log('Error caught. Exiting... ', error);
        await client.close();
        process.exit();
    }
})
