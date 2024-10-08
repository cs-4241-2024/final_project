import mongodb, {ObjectId} from "mongodb";

const DbConnectionURL = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`
const client = new mongodb.MongoClient( DbConnectionURL )

const Dbname ="SongWebsite"

export function getPlaylist(){
    return "TODO"
}

export function createPlaylist(){
    return "TODO"
}

export function updatePlaylist(){
    return "TODO"
}

export function deletePlaylist(){
    return "TODO"
}
export function getAllPlaylists(){
    return "TODO"
}
export function addSongToPlaylist(){
    return "TODO"
}
export function getSongsInPlaylist(){
    return "TODO"
}

export async function searchPlaylists(req,res) {
    let searchParms = req.body
    // console.log("searchParms")
    // console.log(searchParms)

    if (searchParms.name !== undefined) {
        searchParms.name = {$regex: searchParms.name, $options: 'i'}
    }

    let finalSearch = {
        $or: []
    }

    for (const [key, value] of Object.entries(searchParms)) {
        console.log(`${key}: ${value}`);
        finalSearch.$or.push({[key]: value})
    }

    if (Object.entries(searchParms).length === 0) {
        finalSearch = {}
    }

    console.log("final Search")
    console.log(finalSearch)
    console.log(finalSearch.$or[0])

    try {
        let playlistTable = await client.db(Dbname).collection("Playlists")
        let foundPlaylists = await playlistTable.find(finalSearch).toArray()
        console.log("foundPosts")
        console.log(foundPlaylists)
        res.status(200)
        res.send(foundPlaylists)
    } catch (e) {
        console.log(e)
        res.status(400)
        res.send('bad search parameters')
    }
}