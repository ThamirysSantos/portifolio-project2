import './App.css';
import profilePic from './pictures/profile-pic.png';

function App() {
  return (
    <div className="App">
      <head>
        <meta charset="utf-8" />
        <title>Personal Portfolio Website</title>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        {/* <!-- font awesome --> */}
        <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
        {/* <!-- main css --> */}
        <link rel="stylesheet" type="text/css" href="css/style.css" />
      </head>
      <body>
        {/* <!-- header start --> */}
        <header class="header">
          <div class="container">
            <div class="row justify-content-between">
              <div class="logo">
                <a href="index.html">T</a>
              </div>
              <div class="hamburger-btn outer-shadow houver-in-shadow">
                <span></span>
              </div>
            </div>
          </div>
        </header>
        {/* <!-- header end --> */}
        {/* <!-- navigation menu start --> */}
        <nav class="nav-menu">
          <div class="close-nav-menu outer-shadow houver-in-shadow">&times;</div>
          <div class="nav-menu-inner">
            <ul>
              <li><a href="#" class="inner-shadow active">home</a></li>
              <li><a href="#" class="outer-shadow houver-in-shadow">about</a></li>
              <li><a href="#" class="outer-shadow houver-in-shadow">portifolio</a></li>
              <li><a href="#" class="outer-shadow houver-in-shadow">contact</a></li>
            </ul>
          </div>
          {/* <!-- copyright text -->   */}
          <p class="copyright-text">&copy; 2021 Thamirys Gonçalves Santos</p>
        </nav>
        {/* <!-- navigation menu end --> */}
        {/* <!-- home section start --> */}
        <section class="home-section section">
          {/* <!-- effect wrap start --> */}
          <div class="effect-wrap">
            <div class="effect effect-1"></div>
            <div class="effect effect-2">
              <div></div><div></div><div></div><div></div><div></div><div>
              </div><div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div><div></div><div></div><div></div>
              <div></div><div></div>
            </div>
            <div class="effect effect-3"></div>
          </div>
          {/* <!-- effect wrap end --> */}
          <div class="container">
            <div class="row full-screen align-items-center">
              <div class="home-text">
                <p>Hello</p>
                <h2>I'm Thamirys</h2>
                <h1>Web FullStack Developer</h1>
                <a href="#" class="btn-1 outer-shadow houver-in-shadow">More About Me</a>
              </div>
              <div class="home-img">
                <div class="img-box inner-shadow">
                  <img src={profilePic} class="outer-shadow" alt="profile-pic" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- home section end --> */}
        {/* <!-- main js --> */}
      <script src="js/main.js"></script>
      {/* <!-- style switcher js --> */}
      <script src="js/style-switcher.js"></script>
      </body>
    </div>
  );
};

export default App;
