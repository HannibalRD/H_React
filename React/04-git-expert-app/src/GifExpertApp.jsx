import { useState } from "react";
import  {AddCategory}  from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

const [categories, setCategories] = useState(
    ['one punch','Dragon Ball']

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