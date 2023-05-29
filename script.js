//('TEST')


const get_recipe = async function (url) {
    try {

        
        const res = await fetch(url)
        const data = await res.json()

        if(!res.ok){
            throw new Error (`HERE ${data.message}`)
        }
        //console.log( data.data.recipe.ingredients)

        const ingridients = data.data.recipe.ingredients
        //console.log(ingridients)

        ingridients.forEach(function(el){
            //console.log(el)
            console.log(el.description, el.quantity, el.unit)
        })
        

    } catch (err) {
        console.error(err)
    }

}

get_recipe(`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`)

