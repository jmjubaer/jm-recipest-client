const getStoredRecipes = () =>{
    const storedRecipes = JSON.parse(localStorage.getItem('recipe-cart'));
    if(storedRecipes){
        return storedRecipes;
    }else{
        return [] ;
    }
}
const addToCart = (recipeDetails) => { 
    const storedCart = getStoredRecipes();
    storedCart.push(recipeDetails);
    localStorage.setItem('recipe-cart', JSON.stringify(storedCart)); 
    
}

export {getStoredRecipes,addToCart}