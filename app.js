
async function getChefBirthday(id) {

    let recipe;
    try {
        const recipeResponce = await fetch(`https://dummyjson.com/recipes/${id}`);
        recipe = await recipeResponce.json();
    } catch (error) {
        console.error(error);
        throw new Error(`non recuperata la ricetta con id ${id}, controlla url o id`);
    };

    if (!recipe) {
        throw new Error(`non trovata la ricetta con id ${id}, controlla url o id`);
    };

    let user

    try {
        const userId = await fetch(`https://dummyjson.com/user/${recipe.userId}`);
        user = await userId.json();
    } catch (error) {
        console.error(error);
        throw new Error(`non recuperato lo user con id ${id}, controlla url o id`);
    };

    if (!user) {
        throw new Error(`non trovata la ricetta con id ${id}, controlla url o id`);
    };

    return user.birthDate
}

(async () => {
    try {
        const birthday = await getChefBirthday(12);
        console.log('data di nascita: ', birthday)
    } catch (error) {
        console.error("Errore:", error.message);
    }
})();