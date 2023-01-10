import FormComp from "./component/FormComp";
import "./styles.css";
import { deleteData } from "./redux/StateReducer";
import { useSelector, useDispatch } from "react-redux";

export default function App() {
  const liftedState = useSelector((state) => state.metaDataRedux);
  const dispatch = useDispatch();
  console.log(liftedState);

  const deleteThat = (data) => {
    dispatch(deleteData(data));
  };
  return (
    <div className="App">
      <FormComp />

      <table>
        <thead>
          <th>Name</th>
          <th>email</th>
          <th>country</th>
          <th>Action</th>
        </thead>
        <tbody>
          {liftedState?.map((el, i) => (
            <tr key={el?.name + i}>
              <td>{el?.name}</td>
              <td>{el?.email}</td>
              <td>{el?.country}</td>
              <td>
                <button
                  onClick={() => {
                    deleteThat(el);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
