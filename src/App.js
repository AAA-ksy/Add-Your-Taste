import { useState } from "react";
import './App.css';

import ModalMovie from './component/ModalMovie';
import MovieList from './component/MovieList';
import SideList from './component/SideList';
import Header from './component/Header';

function App() {
  const initData = [
    {
        genre: "로맨틱",
        content: "B급영화의 진수! 이런 느낌의 로맨틱코미디 좋아해요.",
        image: "https://cdn.pixabay.com/photo/2016/03/31/20/57/actress-1296108__340.png",
    },
    {
        genre: "동물",
        content:"삭막한 감수성에 힐링감동을 더해주는 동물영화 짱",
        image: "https://media.istockphoto.com/photos/cute-dog-posing-for-filming-on-meadow-picture-id1310575940?k=20&m=1310575940&s=612x612&w=0&h=mYD-JX1g2ZwaK322vZ_do9_rxIC3pzDaBKi--YYjdo8=",

    },
    {
        genre: "액션",
        content:"화려한 액션. 이제 스칼렛 요한슨을 곁들인...",
        image: "https://media.istockphoto.com/vectors/vector-superhero-team-charging-forward-silhouette-vector-id1089368508?k=20&m=1089368508&s=612x612&w=0&h=d_XgCBS64YSgrvWiEMX0scKPLH6r9L3XRw5ojJ_qGKk=",
    },
    {
        genre:"애니메이션",
        content:"귀여운 애니메이션과 더불어 신나는 음악까지!",
        image:"https://media.istockphoto.com/photos/disneyland-park-picture-id525221562?k=20&m=525221562&s=612x612&w=0&h=qqCwKL2EOAsmhyWLH6Q9r2bcx5jCzl-GsGt9Dv0W9n0="
    },
];

  const [data, setData] = useState(initData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let handleAddItem = (item) => {
      console.log("item in App.js : "+item);
      setData([...data, item]);
      console.log("data after handleAddItem : "+data);
  }

  let handleModalOpen = () => {
      setIsModalOpen(!isModalOpen);
  };

   console.log("isModalOpen in App.js : "+isModalOpen);

  return (
    <>
        <Header />
    <main>
        <SideList 
          handleModalOpen={handleModalOpen}
          data={data}/>
        <ModalMovie 
        handleModalOpen={handleModalOpen}
        isModalOpen={isModalOpen}
        handleAddItem={handleAddItem}/>
        <MovieList data={data}/>
    </main>
    </>
  );
}

export default App;
