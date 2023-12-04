import { useEffect } from "react"
import { useParams } from "react-router-dom"

function Details() {

    const { id } = useParams()

    const [movie, setMovie] = useParams({})

    useEffect(() => {


    }, [id])


    return (
        <h1>Página de detalhes</h1>
    )
}

export default Details