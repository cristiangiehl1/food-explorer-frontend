import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";

import { api } from "../../services/api";

import { Container } from "./styles";

import { SideMenu } from "../../components/SideMenu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Button } from "../../components/Button";
import { DisheIngredient } from "../../components/DisheIngredient";
import { UserMesssage } from "../../components/UserMessage";

import { useAuth } from "../../hooks/auth";


export function EditDishe() {
    const { updateDishe, message } = useAuth();

    const [userMessage, setUserMessage] = useState(message)

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState("");
    const [isMostOrdered, setIsMostOrdered] = useState("");
    
    const [disheImgFile, setDisheImgFile] = useState(null);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");  
    
    const [menuIsOpen, setMenuIsOpen] = useState();

    const navigate = useNavigate();
    const params = useParams();   

    async function handleUpdate(event) {
        event.preventDefault();
        
        const dishe = {
            id,
            name,
            price,
            description,
            categories,
            ingredients,
            most_ordered: isMostOrdered            
        }

        await updateDishe({ dishe, disheImgFile });
    }

    async function handleChangeDisheImg(event) {        
        const file = event.target.files[0];        
        setDisheImgFile(file);
    }

    async function handleDelete(event) {
        event.preventDefault();
        
        await api.delete(`/dishes/${params.id}`)

        navigate("/")

    }

    function formatPrice(price) {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
    }
   
    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");   
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    function handleCheckbox() {
        if (isMostOrdered === "0") {
            setIsMostOrdered("1")
        } else {
            setIsMostOrdered("0")
        }
    }

    function handleBack() {
        navigate("/")
    }

    function handleCloseMessage() {
        setUserMessage("")
    }

    useEffect(() => {
        setUserMessage(message)
    }, [message])


    useEffect(() => {
        async function fetchDishe() {
            const disheWithIngredients = await api.get(`/dishes/${params.id}`);           
            const disheInfo = disheWithIngredients.data;

            const disheWithCategories = await api.get(`/categories`)
            const categoriesInfo = disheWithCategories.data;         

            const filtredCategory = categoriesInfo.filter(category => {
                return category.id === parseInt(params.id)
            })   
            
            const ingredients = disheInfo.ingredients.map(dishe => {
                return dishe.ingredient
            })      

            setId(disheInfo.id)
            setName(disheInfo.name);
            setDescription(disheInfo.description);      
            setPrice(disheInfo.price);            
            setCategories(filtredCategory[0].categories[0].type);         
            setIsMostOrdered(filtredCategory[0].categories[0].most_ordered);   
            setIngredients(ingredients);     
        }
        fetchDishe();
    }, [])

    useEffect(() => {
        if (!menuIsOpen) {
          const content = document.querySelector(".content")
          content.style.display = "block";
          return;
        }
    
        const timeoutId = setTimeout(() => {
            const content = document.querySelector(".content")
            content.style.display = "none";
        }, 300);
    
        return () => clearTimeout(timeoutId);
      }, [menuIsOpen]);

    return(
        <Container>
            <UserMesssage                     
                message={userMessage} 
                isMessage={!!userMessage}
                onClose={handleCloseMessage}
            />
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
                        <div className="largeScreenFix">
                            <div>
                                <label htmlFor="fileUpload">Imagem do prato</label>
                                <div className="custom-file-upload">
                                    <input
                                        type="file"
                                        id="fileUpload"
                                        onChange={handleChangeDisheImg}
                                    />
                                    <MdOutlineFileUpload size={20}/>
                                    <p>{disheImgFile && disheImgFile.name || "Selecione imagem"}</p>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <div className="custom-file-upload">
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder={name && name || "Salada Cesar"}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="category">Categoria</label>
                                <select
                                    className="input-category"
                                    id="category"
                                    name="category"
                                    value={categories}
                                    onChange={(e) => setCategories(e.target.value)}
                                >
                                    <option value="">Selecione opção</option>
                                    <option value="bebida">bebida</option>
                                    <option value="bebida">entrada</option>
                                    <option value="refeição">refeição</option>
                                    <option value="sobremesa">sobremesa</option>
                                </select>
                            </div>
                        </div>
                        <div className="checkbox">
                            <input
                                name="checkbox"
                                id="checkbox"
                                type="checkbox"                                                              
                                onChange={() => handleCheckbox()}
                            />
                            <span className="checkmark" data-is-checked={isMostOrdered}></span>
                            <label htmlFor="checkbox">O prato é um dos mais pedidos?</label>
                        </div>                        
                        <div className="largeScreenFix2">
                            <div className="ingredients-wrapper">
                                <label htmlFor="ingredients">Ingredientes</label>
                                <section id="ingredients">
                                    {
                                       ingredients &&
                                       ingredients.map((ingredient, index) => (
                                        <DisheIngredient
                                            className="DisheIngredient"
                                            key={String(index)}
                                            value={ingredient}
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        />
                                       ))
                                    }
                                        <DisheIngredient
                                            isNew
                                            value={newIngredient}
                                            placeholder="Adicionar"
                                            onChange={e => setNewIngredient(e.target.value)}
                                            onClick={handleAddIngredient}
                                            />
                                </section>
                            </div>
                            <div className="input-price">
                                <Input
                                    label="Preço"
                                    type="text"
                                    placeholder={price && `${formatPrice(price)}` || "R$ 40,00"}
                                    id="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <Textarea 
                            label="Descrição"
                            id="description"
                            placeholder={description && description || "A salada César é uma opção maravilhosa"}
                            onChange={(e) => setDescription(e.target.value)}
                        />

                        <div className="buttons-wrapper">
                            <Button 
                                title="Excluir prato"
                                color="BACKGROUND_DARK_900"
                                onClick={(event) => handleDelete(event)}
                            />
                            <Button 
                                title="Salvar alterações"
                                color="TINTS_TOMATO_400"
                                onClick={(event) => handleUpdate(event)}
                            />                            
                        </div>
                    </form>
                </main>
                <Footer />
            </div>
        </Container>
    )
}