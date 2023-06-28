import { useState } from "react"
export function TwitterFollowCard({children, formatUsername, userName, name}) {
  const [isFollowing, setIsFollowing] = useState(false);
  const text = isFollowing? "Siguiendo" : "Seguir"
  const buttonClassName = isFollowing? "button is-following" : "button";

    const handdleclick = () =>{
      setIsFollowing(!isFollowing)
    }
  return (
    <article>
      <header>
        <img
          className="img"
          src="https://www.sideshow.com/cdn-cgi/image/height=200,quality=90,f=auto/https://www.sideshow.com/storage/product-images/904950/batman-sonar-suit_dc-comics_square_sm.jpg"
          alt=""
        />
        <div className="info">
          <strong>{name}</strong>
          <span className="userName">{formatUsername(userName)}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handdleclick}>
          <strong>{text}</strong>
        </button>
      </aside>
    </article>
  );
}
