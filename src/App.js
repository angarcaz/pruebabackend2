import { useDispatch, useSelector } from 'react-redux';
import { postParams } from './store/access/actions';
import { getMusic } from './store/music/actions';
import './App.css';
import { useEffect } from 'react';
import MusicPage from './pages/MusicPage';
import ShowDataBaseComponent from './components/ShowDataBaseComponent/ShowDataBaseComponent';

function App() {
  
  const client_id = "3d95c9ad5ab940d6a51a8f5c94147c26";
  const client_secret = "c75caaa68a414680ae9c10af4ca8565a";

  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(postParams({
      method: 'POST',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      body: `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`
    }))
  }, [])

  const {authDetails} = useSelector((state) => state.AccessReducer)
  const accessToken = authDetails.access_token;

  // useEffect(() => {
  //   dispatch(getMusic({
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + accessToken}
  //   }))
  // }, [])

  
  const {artistDetails} = useSelector((state) => state.MusicReducer)
  console.log(artistDetails)


  // function searchData(){
  //   dispatch(getMusic({
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Authorization': 'Bearer ' + accessToken}
  //   }))
  // }

  return (
    <div className="App">
    <h2>Hola qué tal</h2>
    <p>Token:</p>{accessToken}
    <div>
    <MusicPage></MusicPage>
    <ShowDataBaseComponent></ShowDataBaseComponent>
    </div>
    </div>
  );
}

export default App;
