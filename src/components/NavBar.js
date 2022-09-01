import React from "react";


function NavBar() {
  const links = ["home", "about", "projects"];

  

  return <nav>
    
    <h3>Links</h3>
    {
      links.map(item=><a key={item} href={"#" + item}>{item}</a>)
    }
  </nav>;
}

export default NavBar;
