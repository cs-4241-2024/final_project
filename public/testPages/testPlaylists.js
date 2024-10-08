import {createCell} from "./testForm.js";

export async function loadPlaylists(){
    const response = await fetch('/api/playlists/search', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({})
    })

    let songs = JSON.parse(await response.text())

    let tableBody = document.getElementById("playlistTable")
    for (let i =0; i<songs.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,songs[i]["_id"])
        createCell(newTableRow,songs[i]["createdBy"])
        createCell(newTableRow,songs[i]["createdOn"])
        createCell(newTableRow,songs[i]["name"])
        createCell(newTableRow,songs[i]["songs"])
        tableBody.append(newTableRow)
    }
}
