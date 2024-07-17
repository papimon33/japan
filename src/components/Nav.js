function Nav() {
  const toggleNav = () => {
      document.querySelector('.navbar-burger').classList.toggle("is-active");
      document.querySelector('.navbar-menu').classList.toggle("is-active");
  };
  

  return (
    <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-burger" role="button" aria-label="menu" aria-expanded="false" onClick={toggleNav}>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <a class="navbar-item">복합동사</a>
        <a class="navbar-item">부사</a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
