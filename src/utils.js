

const paginate = (recipes) => {
    const itempage=5
    const page=Math.ceil(recipes.length / itempage)
    
    const newrecipe=Array.from({length:page},(_,index)=>{
        const start= itempage*index
        return recipes.slice(start,start+itempage)
    })

    return newrecipe
}

export default paginate
