import { useNavigate } from "react-router-dom"

const MovieCard = ({ toRender }) => {
	const navigate = useNavigate()

	const redirectToDetail = () => {
		navigate(`/biblioteca/${toRender.media_type}/${toRender.id}`, {
			state: { media: toRender.media_type, id: toRender.id },
		})
	}

	return (
		<div onClick={redirectToDetail} style={{ cursor: "pointer" }}>
			{toRender.original_title || toRender.original_name}
		</div>
	)
}

export default MovieCard
