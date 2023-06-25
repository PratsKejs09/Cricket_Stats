import { getPlayers } from '../services/get-players';

export async function getAllCricketersDetails() {
    return await getPlayers()
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.error("Promise rejected:", error);
      });
  }