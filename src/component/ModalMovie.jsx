import {useState} from "react";

export default function ModalMovie( {handleAddItem, isModalOpen, handleModalOpen }){
    const [genre,setName] = useState("");
    const [content,setContent] = useState("");
    const [image,setImage] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        handleAddItem({genre, content, image});
        handleModalOpen();
        console.log("genre:"+genre+", content:"+content+", image:"+image);
    }

    return(
        <div className="modal-background" hidden={!isModalOpen}>
        <form className="modal" onSubmit={handleSubmit}>
            <span className="modal-close" onClick={handleModalOpen}>X</span>
            <label htmlFor="genre" className="label">장르</label>
            <input id="genre" type="text" placeholder="SF" className="input" 
            value={genre} onChange={(e)=>{setName(e.target.value)}} required/>
            <label htmlFor="image" className="label">이미지</label>
            <input id="image" type="text" placeholder="URL" className="input" 
            value={image} onChange={(e)=>{setImage(e.target.value)}} required/>
            <label htmlFor="content" className="label">내용</label>
            <input id="content" type="text" placeholder="제작연도 보면 깜짝놀랄 킬링타임용 SF!" className="input"
            value={content} onChange={(e)=>{setContent(e.target.value)}} required/>
            <button type="submit" className="submit-button">저장</button>
        </form>
    </div>
    );
}