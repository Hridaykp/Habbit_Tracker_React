import React from "react";  // importing react
import "./Details.css";     // importing styling file
import {  useSelector } from "react-redux";  // importing useSelector hook used to access redux store's state

// details function
function Details() {

  const list = useSelector((state) => state.habitReducers.list);

  const date = new Date();  // date purpose
  return (
    <div>
      <h3 className="Title text-center">Weekly updates are available </h3>

      <div className="main-div bg-light list-group-item my-4">
          {list.map((elem) => {
            return (
              <div className="details col-8 mx-auto" key={elem.id}>
                <table className="my-4">
                  <tr className="taskname">
                    <td className="tableTitle text-center" colspan="7">
                    {elem.habit + " on the date of "}
                    {date.getDate()}-{date.getMonth() + 1}-{date.getFullYear()}
                    </td>
                  
                  </tr>
                  <tr>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                  </tr>
                  <tr>
                    <td>
                      <select id="status">
                        <option value="volvo">None⛔</option>
                        <option value="saab">Done✔ </option>
                        <option value="opel">Undone❌</option>
                      </select>
                    </td>
                    <td>
                      <select id="status">
                        <option value="volvo">None⛔</option>
                        <option value="saab">Done✔ </option>
                        <option value="opel">Undone❌</option>
                      </select>
                    </td>
                    <td>
                      <select id="status">
                        <option value="volvo">None⛔</option>
                        <option value="saab">Done✔ </option>
                        <option value="opel">Undone❌</option>
                      </select>
                    </td>
                    <td>
                      <select id="status">
                        <option value="volvo">None⛔</option>
                        <option value="saab">Done✔ </option>
                        <option value="opel">Undone❌</option>
                      </select>
                    </td>
                    <td>
                      <select id="status">
                        <option value="volvo">None⛔</option>
                        <option value="saab">Done✔ </option>
                        <option value="opel">Undone❌</option>
                      </select>
                    </td>
                    <td>
                      <select id="status">
                        <option value="volvo">None⛔</option>
                        <option value="saab">Done✔ </option>
                        <option value="opel">Undone❌</option>
                      </select>
                    </td>
                    <td>
                      <select id="status">
                        <option value="volvo">None⛔</option>
                        <option value="saab">Done✔ </option>
                        <option value="opel">Undone❌</option>
                      </select>
                    </td>
                  </tr>
                </table>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default Details;