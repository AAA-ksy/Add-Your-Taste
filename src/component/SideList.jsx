import { useState } from "react";

export default function SideList( {isModalOpen, handleModalOpen, initData }){

    const [data] = useState(initData);
    //console.log("isModalOpen in SideList : "+isModalOpen);

    return(
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            onClick={handleModalOpen}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.genre}>{item.genre}</span>
          ))}
        </div>
    );
}