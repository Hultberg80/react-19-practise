
function Lists(){

    const categories = [
        {
            id: 1,
            category: "mobile",
            name: "Iphone",
            model: "13",
            price: 15000
        },
        {
            id: 2,
            category: "car",
            name: "Tesla",
            model: "3",
            price: 100000
        },
        {
            id: 3,
            category: "vacuum-cleaner",
            name: "Shark",
            model: "3000",
            price: 3654
        }
    ]

    return(
        <table className="table">
            {categories.map(category => (
                <thead key={`category-${category.id}`}>
                    <div>
                        <h1>{ category.name } { category.model }</h1>
                        <p>{category.price} kr</p>
                    </div>

                </thead>
            ))}
        </table>
    )
}

export default Lists
