//O banco de dados escolhido será o MYSQL
import mysql from 'mysql2/promise';

//Nós vamos desenvolver código assíncrono, já que a nossa aplicação
//não é o banco de dados e sim se comunica com um banco de dados que pode
//responder de imediato, demorar para responder ou nunca respoder
//por isso vamos usar o async e o await

export default async function conectar() {
    if (global.pool !== undefined) {
        return await global.pool.getConnection();
    }
    else {
        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root', //não é recomendado usar o super usuário
            password: '',
            port: 3306,
            database: 'backend',
            waitForConnections: true,
            connectionLimit: 10,
            maxIdle: 10, // max idle connections, the default value is the same as `connectionLimit`
            idleTimeout: 360000, // idle connections timeout, in milliseconds, the default value 60000
            queueLimit: 0,
            enableKeepAlive: true,
            keepAliveInitialDelay: 0,
        });

        //garantindo que haja somente uma cópia desse pool para a minha aplicação
        global.pool = pool;
        return await pool.getConnection();
    }
}