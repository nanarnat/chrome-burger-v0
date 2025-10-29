use("chrome-burger-db");

//db.staff.find({})

//db.menu_items.find({category: "Burger"})

//db.menu_items.find({}).sort({ price:  -1 })

//db.menu_items.find({}).sort({ price: 1 }).limit(3)


db.menu_items.aggregate([
    {
        $match: { name: "Bacon Cheeseburger" }
    },
    {
        $unwind: "$recipe"
    },
    {
        $lookup: {
            from: "ingredients",
            localField: "recipe.ingredient_id",
            foreignField: "_id",
            as: "ingredient_detail"
        }
    },
    {
        $unwind: "$ingredient_detail"
    },
    {
        $project: {
            _id: 0,
            name: "$recipe.name",
            quantity_needed: "$recipe.quantity_needed",
            unit: "$ingredient_detail.unit"
        }
    }
]);