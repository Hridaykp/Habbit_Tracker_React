
//  function for adding habbit and it's description and export as well
export const addHabit = (habit, description) =>{
    return{
        type:"ADD_HABIT",
        payload:{
            id: new Date().getTime().toString(),
            habit : habit,
            description:description
        }
    }
}

//  function for deleting habbit by its id and export as well
export const deleteHabit = (id) =>{
    return{
        type:"DELETE_HABIT",
        id,
    }
}
