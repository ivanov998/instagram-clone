import pg from "pg"
import dotenv from "dotenv"

dotenv.config();

class DB {
    
    _pool = null;
    
    connect() {
        
        // TODO: export to config/keys
        this._pool = new pg.Pool({
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            database: process.env.DATABASE_NAME,
            user: process.env.DATABASE_USER,
            password: process.env.DATABASE_PASSWORD
        });

        // Performing a test query to make sure everything is OK
        return this._pool.query('SELECT 1 + 1;');
    }

    close () {
        return this._pool.end();
    }

    query(sql, params) {
        return this._pool.query(sql, params);
    }
}

export default new DB()