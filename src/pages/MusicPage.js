import { useDispatch, useSelector } from "react-redux"
import { getMusic } from "../store/music/actions";

export default function MusicPage() {
    
    const {authDetails} = useSelector((state) => state.AccessReducer)
    const accessToken = authDetails.access_token;
    const {artistDetails} = useSelector((state) => state.MusicReducer)
    console.log(artistDetails)
    const dispatch = useDispatch()
  
    function searchData(){
      dispatch(getMusic({
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken}
      }))
    }
    
    return (
        <div>
            <h2>Hola</h2>
            <button onClick={searchData}>Obtener Info API</button>
            {artistDetails.map((artist) => {
                return (
                    <div>
                        <h3> {artist.name} </h3>
                        {/* <img src= {artist.images[0].url} alt={artist.name} /> */}
                        <p> {artist.genres[0]} </p>
                        <p> {artist.followers.total} </p>
                    </div>
                )
            })}
            <p></p>
        </div>
    )
}