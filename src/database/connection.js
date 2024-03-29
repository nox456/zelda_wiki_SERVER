import pg from "pg";
import insert_consoles_data from "./data/consoles.js"
import insert_games_data from "./data/games.js"
import insert_races_data from "./data/races.js"
import insert_characters_data from "./data/characters.js"
import insert_enemies_data from "./data/enemies.js"

const db = new pg.Pool({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    connectionString: process.env.DB_STRING
});

export default db;

await insert_consoles_data()
await insert_games_data()
await insert_races_data()
await insert_characters_data()
await insert_enemies_data()
