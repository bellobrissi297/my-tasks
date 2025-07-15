function cakes(recipe, available) {
    return Math.min(
        ...Object.keys(recipe).map(ingredient => {
            if (!available[ingredient]) return 0;
            return Math.floor(available[ingredient] / recipe[ingredient])
        })
    );
}