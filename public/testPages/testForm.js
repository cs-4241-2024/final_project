export async function submitNewPost(ev){
    ev.preventDefault()

    let newPost = {}
    newPost['title'] = document.getElementById("title").value
    newPost['content'] = document.getElementById("content").value
    newPost['isSong'] = document.getElementById("isSong").checked
    newPost['isPlaylist'] = document.getElementById("isPlaylist").checked
    newPost['idOfTopic'] = document.getElementById("idOfTopic").value
    console.log(newPost)

    const response = await fetch('/api/posts/', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(newPost)
    })

    location.reload()
}

export async function loadPosts(){
    const response = await fetch('/api/posts/search', {
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({})
    })

    let posts = JSON.parse(await response.text())

    let tableBody = document.getElementById("postsTable")
    for (let i =0; i<posts.length;i++){
        let newTableRow = document.createElement("tr")
        createCell(newTableRow,posts[i]["title"])
        createCell(newTableRow,posts[i]["content"])
        createCell(newTableRow,posts[i]["isSong"])
        createCell(newTableRow,posts[i]["isPlaylist"])
        createCell(newTableRow,posts[i]["idOfTopic"])
        createCell(newTableRow,posts[i]["createdBy"])
        createCell(newTableRow,posts[i]["createdOn"])
        createCell(newTableRow,posts[i]["replies"])
        let editCell = document.createElement("td")
        editCell.textContent = "Edit"
        editCell.addEventListener("click",handleEdit)
        editCell.dbId = posts[i]["_id"]
        editCell.style.cursor="pointer"
        editCell.style.border="1px solid black"
        newTableRow.append(editCell)
        let deleteCell = document.createElement("td")
        deleteCell.textContent = "Delete"
        deleteCell.className="border-4 border-collapse border-stone-100 bg-red-800 hover:bg-red-900 text-white font-bold p-1.5 text-center"
        deleteCell.addEventListener("click",handleDelete)
        deleteCell.style.cursor="pointer"
        deleteCell.dbId = posts[i]["_id"]
        deleteCell.style.border="1px solid black"
        newTableRow.append(deleteCell)
        tableBody.append(newTableRow)
    }
}

function createCell(row,content){
    let cell = document.createElement("td")
    cell.textContent = content
    cell.style.border="1px solid black"
    row.append(cell)
}

async function handleDelete(event) {
    let deleteButton = event.target
    //send id to delete
    let dbIdToDelte = deleteButton.dbId

    const response = await fetch(`/api/posts/${dbIdToDelte}`, {
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
    //only make the first two elements editable
    for(let i =0; i<2;i++){
        let cell = currentRow.children[i]
        let input = document.createElement("input")
        input.setAttribute("value",cell.textContent)
        input.setAttribute("type","text")
        input.className = "bg-emerald-50 w-full text-black p-0 m-0 border-0"
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
    let recordFields = ["title","content"]

    //only title and content can be edited
    for(let i =0; i<2;i++){
        let cell = currentRow.children[i]
        let input = cell.firstElementChild
        let value = input.value

        editedRecord[recordFields[i]]=value
        cell.removeChild(input)
        cell.textContent=value
    }

    const responseEdit = await fetch(`/api/posts/${dbId}`, {
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