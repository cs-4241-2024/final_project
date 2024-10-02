import { Collection } from 'mongodb'


// for this function, we need a collection of schools, where each school has:
//      - a name (optional, but could be useful for other features)
//      - an abbreviation (3 characters)
//      - an ordered list of player objects that play for that school
//          - player objects could either be strings, or mongoDB objects with more information, such as the school they play for
/**
 * Lookup a player from an abbreviation
 * - ex:
 * "AND1" -> "A. Villegas"
 * - AND = "Anderson", 1 = 1st player in the list
 * @param playerAbbr
 * @param schools
 */
export async function lookupPlayerFromAbbr( playerAbbr: string, schools: Collection ): Promise<string> {
    // split the abbreviation into the school abbreviation and the player index
    const schoolAbbr: string = playerAbbr.slice(0, 3);
    const playerIndex: number = parseInt(playerAbbr.slice(3)) - 1;  // -1 to convert to 0-indexed

    // find the school with the abbreviation
    const school = await schools.findOne( { abbr: schoolAbbr } );
    if (school == null) {
        return "School not found";
    }

    // get all players for the school
    // school schema should look like:
    // {
    //     _id: ObjectId,
    //     name: string,
    //     abbr: string,
    //     players: [ player1, player2, ... ]
    // }
    const players: Array<string> = school.players;

    if (playerIndex < 0 ||  players.length < playerIndex) {
        return "Player index out of bounds";
    }

    // return the player object
    return players[playerIndex - 1];
}