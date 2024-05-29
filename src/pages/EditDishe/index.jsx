import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";

import { api } from "../../services/api";

import { Container } from "./styles";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { DisheIngredient } from "../../components/DisheIngredient";


export function EditDishe() {
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");

    const [data, setData] = useState();
    const [menuIsOpen, setMenuIsOpen] = useState();

    const navigate = useNavigate();
    const params = useParams();   
    
    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");   
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))

    }


    function handleBack() {
        navigate("/")
    }


    useEffect(() => {
        async function fetchDishe() {
            const response = await api.get(`/dishes/${params.id}`)
            
            setData(response.data)
            setIngredients(response.data.ingredients)

        }
        fetchDishe();
    }, [])

    return(
        <Container>
            <SideMenu 
                menuIsOpen={menuIsOpen}
                onCloseMenu={() => setMenuIsOpen(false)} 
            />
            <div 
                className="content"
                data-hide-edit={menuIsOpen}
            >
                <Header onOpenMenu={() => setMenuIsOpen(true)}/>
                <main>
                    <button className="nav" onClick={handleBack}>
                        <FaChevronLeft size={20} />
                        <span>Voltar</span>
                    </button>  
                    <form>
                        <h1>Editar Prato</h1>
                        <div>
                            <label htmlFor="fileUpload">Imagem do prato</label>
                            <div className="custom-file-upload">
                                <input type="file" id="fileUpload"/>
                                <MdOutlineFileUpload size={20}/>
                                <p>Selecione imagem para alterá-la</p>
                            </div>
                        </div>
                        <Input 
                            label="Nome"
                            type="text"
                            placeholder={data && data.name || "Salada Cesar"}
                            id="name"
                        />
                        <div>
                            <label htmlFor="category">Categoria</label>
                            <div className="input-category">
                                <input
                                    type="text" id="category"
                                    placeholder="Refeição"
                                />
                                <FaChevronDown />
                            </div>
                        </div>
                        <section>
                            {
                               ingredients &&
                               ingredients.map((ingredient, index) => (
                                <DisheIngredient
                                    key={String(index)}                                                         
                                    value={ingredient.ingredient}                                   
                                    onClick={() => handleRemoveIngredient(ingredient)}
                                />
                               ))
                            }
                                <DisheIngredient
                                    isNew                              
                                    value={newIngredient}
                                    onChange={e => setNewIngredient(e.target.value)}
                                    placeholder="Adicionar"
                                    onClick={handleAddIngredient}
                                />
                        </section>
                        <Input 
                            label="Preço"
                            type="text"
                            placeholder={data && `R$ ${data.price}` || "R$ 40,00"}
                            id="price"
                        />
                        <Textarea 
                            label="Descrição"
                            id="description"
                            placeholder={data && `${data.description}` || "A salada César é uma opção maravilhosa"}
                        />

                        <div className="buttons-wrapper">
                            <Button 
                                title="Excluir nota"
                                color="BACKGROUND_DARK_900"
                            />
                            <Button 
                                title="Salvar alterações"
                                color="TINTS_TOMATO_400"
                            />                            
                        </div>
                    </form>
                </main>
                <Footer />
            </div>
        </Container>
    )
}