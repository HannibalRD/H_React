import { useState } from "react";
import  {AddCategory, GifGrid}  from "./components"; // por defecto conge el index entonces no hace falta apautar a el


export const GifExpertApp = () => {

const [categories, setCategories] = useState(
    ['one punch']

);
const onAddCategory= (newCategory) =>{

   if(categories.includes(newCategory)) return;
    // setCategories(cat =>[...cat,'valorant'])
    setCategories([newCategory,...categories])
    // categories.push(newCategory)
    
}
    return(
        <>

        <h1>GifExpertApp</h1>      


        <AddCategory 
        // setCategories={setCategories}
            onNewCategory={event => onAddCategory(event)}
        
        />
        
            {categories.map((category) => (
                <GifGrid key={category} category={category}/>
                ))
            }
            {/* <li>ABV</li> */}

                {/* Gif Item */}
        </>
    )
}