import { getPerson, getTotal } from "../services/person.services";

export async function getRandomPerson(req: any, res: any) {
    try{
        const { count } = await getTotal();
        const randomId = Math.floor(Math.random() * count) + 1;
        const randomPerson = await getPerson(randomId);
        res.status(200).send(randomPerson);
    } catch(err){
        res.status(500).send(err.message);
    }

}