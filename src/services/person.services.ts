import { getTotalPeople, getRandomPerson } from "../repositories/person.repositories";

export async function getTotal() {
    const { rows } = await getTotalPeople();
    return rows[0];
}

export async function getPerson(id: number) {
    const { rows } = await getRandomPerson(id);
    return rows[0];
}