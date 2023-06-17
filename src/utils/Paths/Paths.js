/**
 * Here movies Id and Tv shows will be popular or top rated or latest or upcoming
 * so I add common file path
 */
const PATHS = {
    home: "/",
    search: "search?query=",
    movies: {
        category: "/movies/:id"
    },
    tv: {
        category: "/movies/:id"
    }
}

export {
    PATHS
}