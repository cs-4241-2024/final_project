import mongodb, {ObjectId} from "mongodb";

const DbConnectionURL = `mongodb+srv://${process.env.DbUser}:${process.env.DbPass}@${process.env.DbURL}`
const client = new mongodb.MongoClient( DbConnectionURL )
const Dbname ="SongWebsite"

export function getPost(){
    return "TODO"
}

export async function createPost(req,res) {
    let newPost = req.body
    console.log("newPost")
    console.log(newPost)
    console.log(req.body)
    console.log("newPost2")
    if(newPostIsVaild(newPost)) {
        try {
            newPost.createdBy=req.user._id
            newPost.createdOn=new Date()
            newPost.replies=[]
            let postTable = await client.db(Dbname).collection("Posts")
            let newID = (await postTable.insertOne(newPost)).insertedId
            res.status(200)
            res.send(newID.toString())
        } catch (e) {
            res.status(404)
            res.send('error connecting to db')
        }
    }
    else{
        res.status(400)
        res.send('post object is not valid')
    }
}

export async function searchPosts(req,res) {
    let searchParms = setSearchParameters(req.body)
    console.log("searchParms")
    console.log(searchParms)
    try {
        let postTable = await client.db(Dbname).collection("Posts")
        let foundPosts = await postTable.find(searchParms).toArray()
        console.log("foundPosts")
        console.log(foundPosts)
        res.status(200)
        res.send(foundPosts)
    } catch (e) {
        console.log(e)
        res.status(400)
        res.send('bad search parameters')
    }

}

export async function updatePost(req, res) {
    let idToUpdate = req.params.id
    let editedRecord = req.body
    console.log(idToUpdate)
    console.log(editedRecord)
    try {
        let updateScheme = {
            $set: {
                title:editedRecord["title"],
                content:editedRecord["content"],
            },
        }
        let postTable = await client.db(Dbname).collection("Posts")
        let updateResult = await postTable.updateOne({_id: new ObjectId(idToUpdate)},updateScheme)
        if (updateResult) {
            res.status(200)
            res.send("Update done")
        } else {
            res.status(400)
            res.send('Update failed not found in db??')
        }
    } catch (e) {
        console.log(e)
        res.status(400)
        res.send('error connecting to database')
    }
}

export async function deletePost(req, res) {
    let idToDelete = req.params.id
    console.log(idToDelete)
    try{
        let postTable = await client.db(Dbname).collection("Posts")
        let deleteResult =  postTable.deleteOne({_id: new ObjectId(idToDelete)})
        if (deleteResult) {
            res.status(200)
            res.send("delete done")
        } else {
            res.status(400)
            res.send('delete failed: not found in db')
        }
    }
    catch (e){
        console.log(e)
        res.status(400)
        res.send('error connecting to database')
    }
}
export function getAllPosts(){
    return "TODO"
}
export function addReply(){
    return "TODO"
}

function newPostIsVaild(newPost){
    if(newPost.isPlaylist === undefined || typeof(newPost.isPlaylist) !== "boolean"){
        return false
    }
    if(newPost.isSong === undefined || typeof(newPost.isSong) !== "boolean"){
        return false
    }
    if(newPost.idOfTopic === undefined || typeof(newPost.idOfTopic) !== "string"){
        return false
    }
    if(newPost.title === undefined || typeof(newPost.title) !== "string"){
        return false
    }
    if(newPost.content === undefined || typeof(newPost.content) !== "string"){
        return false
    }
    return true
}

function setSearchParameters(params){
    let finalParams = {}
    if(params._id!==undefined){
        finalParams._id = new ObjectId(params._id)
    }
    if(params.createdBy!==undefined){
        finalParams.createdBy = new ObjectId(params.createdBy)
    }
    if(params.createdOn!==undefined){
        finalParams.createdOn = params.createdOn
    }
    if(params.isPlaylist!==undefined){
        finalParams.isPlaylist = params.isPlaylist
    }
    if(params.isSong!==undefined){
        finalParams.isSong = params.isSong
    }
    if(params.idOfTopic!==undefined){
        finalParams.idOfTopic = new ObjectId(params.idOfTopic)
    }
    if(params.title!==undefined){
        finalParams.title = params.title
    }
    if(params.content!==undefined){
        finalParams.content = params.content
    }
    if(params.replies!==undefined){
        finalParams.replies = params.replies
    }

    return finalParams
}