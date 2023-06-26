import { getPlayers } from '../services/get-players';
import { getAge } from '../utils/cricketApp';

export async function getAllCricketersDetails() {
    return await getPlayers()
      .then((result) => {
        for (let i = 0; i < result.length; i++) {
          result[i]["age"] = getAge(result[i].dob)  
        }
        return result;
      })
      .catch((error) => {
        console.error("Promise rejected:", error);
      });
  }