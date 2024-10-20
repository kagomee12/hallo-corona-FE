
import { useParams } from "react-router-dom";
import { DetailArtikelComponent } from "../components/detail-artikel/detail-artikel";


const DetailArtikel = () => {
  const { id } = useParams();
  
  return (
    <DetailArtikelComponent id={id ? parseInt(id) : 0}/>
  );
};

export default DetailArtikel;
