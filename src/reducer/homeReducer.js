// initialise initialData as empty array object
const initialData ={
    list : []
}

// a reducer function as habitReducers for actons like add and delete habits
const habitReducers = (state = initialData, action) =>{

    switch(action.type){
        case "ADD_HABIT":
            const {id, habit, description} = action.payload;
            return({
                ...state,
                list: [
                    ...state.list,
                    {
                      id:id,
                      habit : habit,
                      description:description
                    }
                ]
            })

            case "DELETE_HABIT":
               const newList = state.list.filter((elem) => elem.id !== action.id);
                return({
                    ...state,
                    list: newList
                });
        default : return state;  
    }
}

// exporting reducer
export default habitReducers;