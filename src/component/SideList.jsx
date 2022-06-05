import { useState } from "react";

export default function SideList( {isModalOpen, handleModalOpen, initData }){

    // const [data] = initData;
    // const [isModalOpen, setIsModalOpen] = useState(false);
    const [data] = useState(initData);

    return(
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            onClick={() => handleModalOpen(true)}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.genre}>{item.genre}</span>
          ))}
        </div>
    );
}