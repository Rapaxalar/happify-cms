import { useEffect, useState } from "react";
import { getHappifier } from "../../api";
import {useParams, Link} from 'react-router-dom';
import { HappifierTable } from "../../components";


export const HappifierPage = () => {
  const { id } = useParams();
  const [happifier, setHappifier] = useState([])

  useEffect(()=>{
    setHappifier(getHappifier({id}));
  },[id])

  return (
    <div className="wrapper">
      <Link to='/'>Happifier list</Link>
      <h4>Happifier {id}</h4>
      <HappifierTable happifier={happifier} />
    </div>
  );
}
