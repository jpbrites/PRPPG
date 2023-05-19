import mysql from 'mysql'

const pool = mysql.createPool({
    "user": "root",
    "password": "Dpesquisa23*",
    "database": "prppg",
    "host": "localhost",
    "port": 3306
})

export {pool};