import {createCell} from "./testForm.js";

export async function loadPlaylists(){
    const response = await fetch('/api/playlists/search', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({})
    })

    let playlists = JSON.parse(await response.text())

    let tableBody = document.getElementById("playlistTable")
    for (let i =0; i<playlists.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,playlists[i]["_id"])
        createCell(newTableRow,playlists[i]["createdBy"])
        createCell(newTableRow,playlists[i]["createdOn"])
        createCell(newTableRow,playlists[i]["name"])
        createCell(newTableRow,playlists[i]["songs"])
        let editCell = document.createElement("td")
        editCell.textContent = "Edit"
        editCell.addEventListener("click",handleEdit)
        editCell.dbId = playlists[i]["_id"]
        editCell.style.cursor="pointer"
        editCell.style.border="1px solid black"
        newTableRow.append(editCell)
        let deleteCell = document.createElement("td")
        deleteCell.textContent = "Delete"
        deleteCell.addEventListener("click",handleDelete)
        deleteCell.style.cursor="pointer"
        deleteCell.dbId = playlists[i]["_id"]
        deleteCell.style.border="1px solid black"
        newTableRow.append(deleteCell)
        tableBody.append(newTableRow)
    }
}

async function handleDelete(event) {
    let deleteButton = event.target
    //send id to delete
    let dbIdToDelte = deleteButton.dbId

    const response = await fetch(`/api/playlists/${dbIdToDelte}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        location.reload()
    }
}

async function handleEdit(event){
    let editButton = event.target
    editButton.textContent="Save"
    editButton.removeEventListener("click",handleEdit)
    let currentRow = editButton.parentElement
    //only make 4th element editable
    for(let i =3; i<4;i++){
        let cell = currentRow.children[i]
        let input = document.createElement("input")
        input.setAttribute("value",cell.textContent)
        input.setAttribute("type","text")
        cell.textContent = ""
        cell.appendChild(input)
    }
    editButton.addEventListener("click",handleSave)
}

async function handleSave(event) {
    let editButton = event.target
    let dbId = editButton.dbId
    console.log(dbId)

    let editedRecord={}
    let currentRow = editButton.parentElement
    let recordFields = ["name"]

    //only name can be edited
    for(let i =3; i<4;i++){
        let cell = currentRow.children[i]
        let input = cell.firstElementChild
        let value = input.value

        editedRecord[recordFields[0]]=value
        cell.removeChild(input)
        cell.textContent=value
    }

    const responseEdit = await fetch(`/api/playlists/name/${dbId}`, {
        method: 'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(editedRecord)
    })

    if(responseEdit.ok){
        editButton.removeEventListener("click",handleSave)
        location.reload()
    }
    else{
        console.error("edit failed")
    }

}

export async function submitNewPlaylist(ev){
    ev.preventDefault()

    let newPlaylist = {}
    newPlaylist['name'] = document.getElementById("playlistName").value
    newPlaylist['songs'] = []
    console.log(newPlaylist)

    const response = await fetch('/api/playlists/', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newPlaylist)
    })

    location.reload()
}


export async function addSongToPlayList(ev){
    ev.preventDefault()
    let playlistID = document.getElementById("playlistID").value
    let songID = document.getElementById("songID").value
    const response = await fetch(`/api/playlists/${playlistID}/add-song`, {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({songID:songID})
    })

    location.reload()
}


export async function playListSongs(ev){
    let playlistID = "67049e9ce0b0c7cb4ee53bfe"
    const response = await fetch(`/api/playlists/${playlistID}/songs`, {
        method: 'GET',
    })
    console.log("playlists songs")
    console.log(JSON.parse(await response.text()))
}












