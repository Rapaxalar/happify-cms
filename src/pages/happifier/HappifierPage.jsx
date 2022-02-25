import { useEffect, useState } from "react";
import { getHappifier } from "../../api";
import {useParams} from 'react-router-dom';
import { HappifierTable } from "../../components";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";


export const HappifierPage = () => {
  const { id } = useParams();
  const [happifier, setHappifier] = useState([])
  const navigate = useNavigate();

  useEffect(()=>{
    setHappifier(getHappifier({id}));
  },[id])

  return (
    <div className="wrapper">
      <Button variant="contained" onClick = {() => {navigate('/');}}>Back</Button>
      <h4>Happifier {id}</h4>
      <HappifierTable happifier={happifier} />
    </div>
  );
}
