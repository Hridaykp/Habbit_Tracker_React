//import react, state
import React, { useState } from "react";

//import styling file
import "./Habit.css";

// import essentials hooks
import { useSelector, useDispatch } from "react-redux";

// import actions's functions for adding and deleting habits
import { addHabit, deleteHabit } from "../actions/homeActions";


function Habit() {
    const [inputHabit, setInputHabit] = useState("");
    const [inputDesc, setInputDesc] = useState("");
    const list = useSelector((state) => state.habitReducers.list); //A hook to access the redux store's state
    const dispatch = useDispatch();     //redux dispatch function
    return (
        <div>
            <div className="child-div text-center">
            <figure>
                <h6 className="subTitle"> The Habit List Is Here :-</h6>
            </figure>
            </div>
            <div className="main-div ">
                <form className="col-8 mx-auto my-4">
                    <div className="form-group row my-2">
                        <label htmlFor="task" className="col-sm-2 col-form-label">
                            Habit
                        </label>
                        <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="taskName"
                            placeholder="Enter the habit name..."
                            value={inputHabit}
                            onChange={(event) => setInputHabit(event.target.value)}
                        />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
                            description
                        </label>
                        <div className="col-sm-10">
                        <input
                            type="text"
                            className="form-control"
                            id="=taskDesc"
                            placeholder="Enter the description..."
                            value={inputDesc}
                            onChange={(event) => setInputDesc(event.target.value)}
                        />
                        </div>
                    </div>
                </form>

                <div className="addItems  gap-2 col-6 mx-auto">
                    <button
                        type="button"
                        className="add-btn"
                        onClick={() =>
                            dispatch(
                                addHabit(inputHabit, inputDesc),
                                setInputHabit(""),
                                setInputDesc(""),
                                window.confirm("Successfuly Added !!")
                            )
                        }
                    >
                        <i className="fa-solid fa-pen-to-square"></i> Add habit
                    </button>
                </div>

                <div className="showList my-2 list-group-item-primary ">
                {list.map((elem) => {
                    return (
                    <div
                        className="eachItem col-8 mx-auto d-flex justify-content-between"
                        key={elem.id}
                    >
                        <h5>{elem.habit}</h5>
                        <h5>{elem.description}</h5>
                        <i
                        class="fa-solid fa-trash-can fa-large my-2"
                        title="Delete Item"
                        onClick={() => {
                            dispatch(deleteHabit(elem.id))
                            window.alert("Successfuly Deleted !!");
                        }}
                        ></i>
                    </div>
                    );
                })}
                </div>
            </div>
        </div>
    );
}

export default Habit;
