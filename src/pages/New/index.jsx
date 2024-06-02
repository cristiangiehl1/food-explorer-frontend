import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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


export function New() {  
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [categories, setCategories] = useState("");
    const [isMostOrdered, setIsMostOrdered] = useState("");

    const [message, setMessage] = useState();
    const [bgColor, setBgColor] = useState();
    
    const [disheImgFile, setDisheImgFile] = useState(null);

    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");  
    
    const [menuIsOpen, setMenuIsOpen] = useState();

    const navigate = useNavigate();

    async function handleChangeDisheImg(event) {
        const file = event.target.files[0];        
        setDisheImgFile(file);
    }

    function userMessage(message) {
        setMessage(message)
        
        setTimeout(() => {
            setMessage("");
          
        }, 5900);  
    }    
    
    function handleAddIngredient() {
        setIngredients(prevState => [...prevState, newIngredient]);
        setNewIngredient("");   
    }

    function handleRemoveIngredient(deleted) {
        setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
    }

    async function handleCreateDishe(event) {
        event.preventDefault();

        let responseData;
        
        if(!name || !price || !categories || !description || !ingredients) {
           userMessage("Por favor, preencha todos os campos obrigatórios.")
           return
        }

        if(newIngredient) {
            userMessage("Você deixou um ingrediente para adicionar, mas não adicionou.")
            return
        }

        try {
            const response = await api.post("/dishes", {
                name,
                description,
                price,
                ingredients,
                categories,
                most_ordered: isMostOrdered
            });
    
            responseData = response.data; 
      
    
            setMessage("Prato cadastrado com sucesso");
            setBgColor("TINTS_CAKE_200");
    
            setTimeout(() => {
                setMessage("");
                setBgColor("");
            }, 5900);
        } catch (error) {
            if (error.response) {
                userMessage(error.response.data.message);

            } else {
                userMessage("Não foi possível cadastrar.");
            }
        }

        if(disheImgFile && responseData !== undefined) {
            try {                
                const fileUploadForm = new FormData();
                fileUploadForm.append("image", disheImgFile);

                await api.patch(`/dishes/image/${responseData}`, fileUploadForm); 

            } catch (error) {
                await api.delete(`/dishes/${responseData}`)
                if (error.response) {
                    userMessage(error.response.data.message);
    
                } else {
                    userMessage("Não foi possível cadastrar.");
                }
            }
        }
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

    useEffect(() => {            
   
    }, [])

    return(
        <Container>
            <UserMesssage   
                background={bgColor}                  
                message={message} 
                isMessage={!!message}
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
                        <h1>Novo Prato</h1>
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
                            <Input
                                label="Nome"
                                type="text"
                                placeholder="Ex.: Frango à parmegiana"
                                id="name"
                                onChange={(e) => setName(e.target.value)}
                            />
                            <div>
                                <label htmlFor="category">Categoria</label>
                                <select
                                    className="input-category"
                                    id="category"
                                    name="category"
                                    onChange={(e) => setCategories(e.target.value)}
                                >
                                    <option value="">Selecione opção</option>
                                    <option value="bebida">bebida</option>
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
                                    placeholder="Ex.: R$ 80,00"
                                    id="price"
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </div>
                        </div>
                        <Textarea 
                            label="Descrição"
                            id="description"
                            placeholder="Ex.: esse é simplemente o melhor prato da porra do mundo"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className="buttons-wrapper">
                            <Button
                                title="Salvar alterações"
                                color="TINTS_TOMATO_400"
                                onClick={handleCreateDishe}
                            />
                        </div>                     
                    </form>
                </main>
                <Footer />
            </div>
        </Container>
    )
}