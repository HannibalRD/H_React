import { useState } from "react"


export const AddCategory = ({onNewCategory}) => {
  
  const [InputValue, setInputValue] = useState('')
  
const onInputChange = () => {//otra manera seria desestructurar el target y entonces omitimos el event
    setInputValue(event.target.value)
}
const onSubmit = (event) =>{
    event.preventDefault()
    if( InputValue.trim().length<=0) return;
    // setCategories(categories =>[InputValue, ...categories])
    onNewCategory( InputValue.trim());
    setInputValue('')
}
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                    placeholder="Buscar Gif"
                    value = {InputValue}
                    onChange={ onInputChange}
                    // onChange={(event) => onInputChange(event)} esto se utiliza para poder ver el evente dentro de un console.log
    /></form>
    
  )
}
