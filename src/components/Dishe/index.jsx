import { FaAngleRight } from "react-icons/fa";
import { GoPencil } from "react-icons/go";
import { useNavigate } from "react-router-dom";

import { Container } from "./styles";

import { api } from "../../services/api" 

import dishePlaceholder from "../../assets/dishes/dishePlaceholder.jpg"

export function Dishe({navDetails, data, ...rest}) {

    const avatarUrl = data.image ? `${api.defaults.baseURL}/files/dishes/${data.image}` : dishePlaceholder; 
    const navigate = useNavigate();

    function navEdit(id) {
        navigate(`/editdishe/${id}`)
    }

    function editPrice(price) {
        return price.toFixed(2).replace(".", ",");
    }

    return (
        <Container {...rest}>
            <figure>
                <button>
                    <GoPencil onClick={() => navEdit(data.id)} size={24}/>
                </button>
                <div className="nav-wrapper" onClick={navDetails}>
                    <img src={avatarUrl} alt={data.name} />
                    <figcaption>
                        <div>
                            <h2>{data.name} </h2>
                            <FaAngleRight size={12}/>
                        </div>
                        <p>R$ {editPrice(data.price)}</p>
                    </figcaption>
                </div>
            </figure>
        </Container>
    )
}