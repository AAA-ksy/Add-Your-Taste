export default function SideList({ handleModalOpen, data }) {
  
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