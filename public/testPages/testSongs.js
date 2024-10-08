import {createCell} from "./testForm.js";

export async function loadSongs(){
    const response = await fetch('/api/songs/search', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({_id:"66fad67d7c666b549aef4189"})
    })

    let songs = JSON.parse(await response.text())

    let tableBody = document.getElementById("songsTable")
    for (let i =0; i<songs.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,songs[i]["name"])
        createCell(newTableRow,songs[i]["artist"])
        createCell(newTableRow,songs[i]["album"])
        createCell(newTableRow,songs[i]["duration"])
        createCell(newTableRow,songs[i]["genre"])
        createCell(newTableRow,songs[i]["createdBy"])
        createCell(newTableRow,songs[i]["createdOn"])
        tableBody.append(newTableRow)
    }
}




