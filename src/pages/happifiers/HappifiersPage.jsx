import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getHappifiersList } from "../../api";

export const HappifiersPage = () => {
  const [happifierList, setHappifierList] = useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    setHappifierList(getHappifiersList());
  },[]);

  return (
    <div className="wrapper">
      <h2>Happifiers</h2>
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>TITLE</th>
          <th>AUTHOR</th>
        </tr>
        {happifierList.map((happifier, index) => {
          return (
            <tr key={index} onClick = {() => {navigate(`/happifier/${happifier.id}`);}} className='table-row'>
              <td>{happifier.id}</td>
              <td>{happifier.title}</td>
              <td>{happifier.author}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  );
}
