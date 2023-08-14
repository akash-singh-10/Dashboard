import React from "react";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const Home = () => {
  return (
    <div className="mt-5">
      <div className="container">

        <div className="add_btn mt-3 mb-4">
          <button className="btn btn-primary">Add Data</button>
        </div>

        <table class="table">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Branch</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Akash Singh</td>
              <td>IT</td>
              <td>1234567890</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                <button className="btn btn-warning"><CreateIcon /></button>
                <button className="btn btn-danger"><DeleteIcon /></button>
              </td>
            </tr>

            <tr>
              <th scope="row">2</th>
              <td>Nitro Kumar</td>
              <td>IT</td>
              <td>1234567890</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success"><RemoveRedEyeIcon /></button>
                <button className="btn btn-warning"><CreateIcon /></button>
                <button className="btn btn-danger"><DeleteIcon /></button>
              </td>
            </tr>
            
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Home;
