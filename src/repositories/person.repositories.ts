import connection from "../database/database.connection";

export function getTotalPeople() {
    return connection.query(`SELECT COUNT(*) FROM people;`);
}

export function getRandomPerson(id:number) {
    return connection.query(`SELECT * FROM people WHERE id=$1;`, [id])
}