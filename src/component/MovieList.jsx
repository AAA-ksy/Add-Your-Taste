import { useState } from "react";

export default function MovieList( {data} ){

    return(
        <section className="container">
        {data.map((item) => (
          <div className="card" key={item.genre}>
            <img src={item.image} alt={item.genre} />
            <span>{item.content}</span>
          </div>
        ))}
      </section>
    );
}