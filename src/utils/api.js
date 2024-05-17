// -------------- CREATE --------------
export async function addGoal(goal){
    try{
        let response = await fetch("http://localhost:8000/metas", 
        {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goal)
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// -------------- READ ----------------
export async function getGoals(){
    try{
        let response = await fetch("http://localhost:8000/metas")
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// export async function getGoalsByName(nome){
//     try{
//         let response = await fetch(`http://localhost:8000/metas?nome=${nome}`)
//         let data = await response.json()
//         return data
//     } catch(error) {
//         console.log("ERROR: " + error)
//     }
// }

export async function getGoalById(id){
    try{
        let response = await fetch(`http://localhost:8000/metas?id=${id}`)
        let data = await response.json()
        return data
    } catch(error) {
        console.log("ERROR: " + error)
    }
}

// ------------------- UPDATE -------------------
export async function updateGoal(goal){
    try{
        let response = await fetch("http://localhost:8000/metas/" + goal.id, 
        {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(goal)
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}


// --------------------- DELETE ----------------------
export async function deleteGoal(id){
    try{
        let response = await fetch("http://localhost:8000/metas/" + id, 
        {
            method: 'DELETE'
        })
        return response.status
    } catch(error) {
        console.log("ERROR: " + error)
    }
}