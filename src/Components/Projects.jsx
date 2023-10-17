
function Projects() {
  return (
    <div className="Projects-section">
        <hr />
        <h3 className="Projects-heading">Projects</h3>


        <div class="container my-4" id="projects">
            <div class="w-100 text-center">
               <h1 class="display-1">Projects</h1>
            </div>
            <br />
            <div class="row py-4">
                <div class="col-12 m-auto">
                  <div class="accordion" id="accordionPanelsStayOpenExample">
                    <div class="timeline">
                      {/* <!-- component --> */}
                      <div class="timeline__component">
                        <div class="timeline__date timeline__date--right">July, 2022</div>
                      </div>
                      <div class="timeline__middle">
                        <div class="timeline__point"></div>
                      </div>
                      <div class="timeline__component timeline__component--bg">
                          <div class="accordion-item ">
                              <h2 class="accordion-header" id="panelsStayOpen-headingTwelve">
                                <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwelve" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwelve">
                                  File Sharing System
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseTwelve" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwelve">
                                <div class="accordion-body">
                                      <span class="badge text-bg-danger text-white">ejs templating</span>
                                      <span class="badge text-bg-danger text-white">Node JS</span>
                                      <span class="badge text-bg-danger text-white">Express</span>
                                      <span class="badge text-bg-danger text-white">Mongo DB</span>
                                      <div>File Sharing System with password protection.<a href="https://github.com/prodiptahalder/file-sharing">Visit Github</a></div>
                                        <a class="btn btn-success px-4 mt-2" target="blank" href="https://file-sharing-pro-projects.herokuapp.com/">
                                            View
                                        </a>
                                </div>
                              </div>
                            </div>
                      </div>
                      {/* <!-- component --> */}
                      <div class="timeline__component timeline__component--bg">
                        <div class="accordion-item ">
                            <h2 class="accordion-header" id="panelsStayOpen-headingEleven">
                              <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEleven" aria-expanded="true" aria-controls="panelsStayOpen-collapseEleven">
                                Chit Chat
                              </button>
                            </h2>
                            <div id="panelsStayOpen-collapseEleven" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingEleven">
                              <div class="accordion-body">
                                    <span class="badge text-bg-danger text-white">Node Js</span>
                                    <span class="badge text-bg-danger text-white">Express </span>
                                    <span class="badge text-bg-danger text-white">React Js</span>
                                    <span class="badge text-bg-danger text-white">Socket.io</span>
                                    <br />
                                      A Real Time Chat Application implemented using Socket.io.
                                      {/* <!-- <a class="btn btn-success px-4 mt-2"  target="blank" href="https://github.com/prodiptahalder/Shop_Backend">
                                          View
                                      </a> --> */}
                                      <a class="btn btn-success px-4 mt-2" target="blank" href="https://github.com/prodiptahalder/ChatAppBackend">
                                        View Server Repo
                                    </a>
                                    <a class="btn btn-success px-4 mt-2" target="blank" href="https://github.com/prodiptahalder/ChatAppClient">
                                      View Client Repo
                                  </a>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div class="timeline__middle">
                        <div class="timeline__point"></div>
                      </div>
                      <div class="timeline__component">
                        <div class="timeline__date">June, 2022</div>
                      </div>
                      {/* <!-- component --> */}
                      <div class="timeline__component">
                        <div class="timeline__date timeline__date--right">June, 2022</div>
                      </div>
                      <div class="timeline__middle">
                        <div class="timeline__point"></div>
                      </div>
                      <div class="timeline__component timeline__component--bg">
                          <div class="accordion-item ">
                              <h2 class="accordion-header" id="panelsStayOpen-headingTen">
                                <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTen" aria-expanded="true" aria-controls="panelsStayOpen-collapseTen">
                                  Blogger REST API
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseTen" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTen">
                                <div class="accordion-body">
                                      <span class="badge text-bg-danger text-white">Node JS</span>
                                      <span class="badge text-bg-danger text-white">Express</span>
                                      <span class="badge text-bg-danger text-white">Mongo DB</span>
                                      <div>A RESTful API Service for Blogging Website.<a href="https://github.com/prodiptahalder/bloggerBackend">Visit Github</a></div>
                                        <a class="btn btn-success px-4 mt-2" target="blank" href="https://bloggerbackendapp.herokuapp.com/">
                                            View
                                        </a>
                                </div>
                              </div>
                            </div>
                      </div>
                        {/* <!-- component --> */}
                        <div class="timeline__component timeline__component--bg">
                          <div class="accordion-item ">
                              <h2 class="accordion-header" id="panelsStayOpen-headingNine">
                                <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseNine" aria-expanded="true" aria-controls="panelsStayOpen-collapseNine">
                                  Backend Prototype
                                </button>
                              </h2>
                              <div id="panelsStayOpen-collapseNine" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingNine">
                                <div class="accordion-body">
                                      <span class="badge text-bg-danger text-white">Node Js</span>
                                      <span class="badge text-bg-danger text-white">Express </span>
                                      <br />
                                        A backend prototype for store, where we can create user, place order and add products, with admin and normal user login, protected routes.
                                        Different npm packages like multer, bodyparser etc have been used.
                                        <a class="btn btn-success px-4 mt-2" target="blank" href="https://github.com/prodiptahalder/Shop_Backend">
                                            View
                                        </a>
                                </div>
                              </div>
                            </div>
                      </div>
                      <div class="timeline__middle">
                        <div class="timeline__point"></div>
                      </div>
                      <div class="timeline__component">
                        <div class="timeline__date">May, 2022</div>
                      </div>
                        {/* <!-- component --> */}
                        <div class="timeline__component">
                          <div class="timeline__date timeline__date--right">May, 2022</div>
                        </div>
                        <div class="timeline__middle">
                          <div class="timeline__point"></div>
                        </div>
                        <div class="timeline__component timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                    GitHub Profile Finder
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                  <div class="accordion-body">
                                        <span class="badge text-bg-danger text-white">AJAX</span><br />
                                        <div>This Project uses AJAX to fetch github profile details using Github API for based on username.
                                          You need to enter correct github usernname, and press Enter.</div>
                                          <a class="btn btn-success px-4 mt-2" target="blank" href="https://bucolic-sprite-cbdea8.netlify.app/">
                                              View
                                          </a>
                                  </div>
                                </div>
                              </div>
                        </div>
                        {/* <!-- component --> */}
                        <div class="timeline__component timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Game Of Life Visualizer
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                                  <div class="accordion-body">
                                        <span class="badge text-bg-danger text-white">React Js</span><br />
                                          "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
                                          <a class="btn btn-success px-4 mt-2" target="blank" href="https://agitated-euclid-92de03.netlify.app/">
                                              View
                                          </a>
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div class="timeline__middle">
                          <div class="timeline__point"></div>
                        </div>
                        <div class="timeline__component">
                          <div class="timeline__date">Apr, 2022</div>
                        </div>
                        {/* <!-- component --> */}
                        <div class="timeline__component">
                            <div class="timeline__date timeline__date--right">Feb, 2022</div>
                          </div>
                          <div class="timeline__middle">
                            <div class="timeline__point"></div>
                          </div>
                          <div class="timeline__component timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                                    3D Project
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                  <div class="accordion-body">
                                          <span class="badge text-bg-danger text-white">React Js</span>
                                          <span class="badge text-bg-danger text-white">Three Js</span><br />
                                          <div>This is a fun project, it does not serve any purpouse.
                                          Will surely enhannce it and  make something useful out of it.</div>
                                          <a class="btn btn-success px-4 mt-2" target="blank" href="https://competent-curie-31f80f.netlify.app/">
                                              View
                                          </a>
                                  </div>
                                </div>
                              </div>
                          </div>
                          {/* <!-- component --> */}
                          <div class="timeline__component timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                                    CircleSkinCare
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                  <div class="accordion-body">
                                          <span class="badge text-bg-danger text-white">React Js</span>
                                          <span class="badge text-bg-danger text-white">NodeJs</span>
                                          <span class="badge text-bg-danger text-white">Mongo DB</span>
                                          <span class="badge text-bg-danger text-white">Express Js</span>
                                          <span class="badge text-bg-danger text-white">E-Commerce</span><br />
                                              <div>This is one of mmy freelancing Projects.
                                              It is an E-commerce platform with all the basic functions, such as add to cart sort products using filters.
                                              The stand out feature of the website is it's Skin Quiz which will recommend you product as per your skin's need.</div>
                                              <a class="btn btn-success px-4 mt-2" target="blank" href="https://circleskincare.com/">
                                                  View
                                              </a>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div class="timeline__middle">
                            <div class="timeline__point"></div>
                          </div>
                          <div class="timeline__component">
                            <div class="timeline__date">Jun, 2020</div>
                          </div>
                          {/* <!-- component --> */}
                        <div class="timeline__component">
                            <div class="timeline__date timeline__date--right">May, 2020</div>
                          </div>
                          <div class="timeline__middle">
                            <div class="timeline__point"></div>
                          </div>
                          <div class="timeline__component timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
                                    Weather Forecast Website
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                  <div class="accordion-body">
                                              <span class="badge text-bg-danger text-white">React Js</span>
                                              <span class="badge text-bg-danger text-white">Weather API</span><br />
                                              <div>This project uses a third party API to fetch weather forecast of a certain city. 
                                              You need to enter the name of the city and press Enter.
                                              The website will show you a detail weather forecast of upcoming week.</div>
                                              <a class="btn btn-success px-4 mt-2" target="blank" href="https://evening-coast-56737.herokuapp.com/">
                                                  View
                                              </a>
                                  </div>
                                </div>
                              </div>
                          </div>
                          {/* <!-- component --> */}
                          <div class="timeline__component timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingSix">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
                                    CryptoCurrency Ticker App
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSix" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSix">
                                  <div class="accordion-body">
                                    <span class="badge text-bg-danger text-white">React Js</span>
                                    <span class="badge text-bg-danger text-white">Binance API</span><br />
                                    <div>This project uses data from Binance API to display real time data, of different Crypto exchange pairs.
                                    This Project also provides a calculator to calculate amount of crypto worth with respect to some other crypto.</div>
                                    <a class="btn btn-success px-4 mt-2" target="blank" href="https://tetraunit.netlify.app/">
                                          View
                                      </a>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div class="timeline__middle">
                            <div class="timeline__point"></div>
                          </div>
                          <div class="timeline__component">
                            <div class="timeline__date">May, 2020</div>
                          </div>
                          {/* <!-- component --> */}
                        <div class="timeline__component">
                            <div class="timeline__date timeline__date--right">Mar, 2020</div>
                          </div>
                          <div class="timeline__middle">
                            <div class="timeline__point"></div>
                          </div>
                          <div class="timeline__component timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingSeven">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
                                    TinDog
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseSeven" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingSeven">
                                  <div class="accordion-body">
                                    <span class="badge text-bg-danger text-white">HTML</span>
                                    <span class="badge text-bg-danger text-white">CSS</span><br />
                                    <div>This project is a basic HTML, CSS website; replicating Tinder for Dog.</div>
                                    <a class="btn btn-success px-4 mt-2" target="blank" href="https://62810aaef1045a459cfc86e2--earnest-dango-8cfd18.netlify.app/">
                                          View
                                      </a>
                                  </div>
                                </div>
                              </div>
                          </div>
                        {/* <!-- component --> */}
                        <div class="timeline__component timeline__component--bottom timeline__component--bg">
                            <div class="accordion-item ">
                                <h2 class="accordion-header" id="panelsStayOpen-headingEight">
                                  <button class="accordion-button collapsed bg-warning" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseEight" aria-expanded="true" aria-controls="panelsStayOpen-collapseEight">
                                    Barber
                                  </button>
                                </h2>
                                <div id="panelsStayOpen-collapseEight" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingEight">
                                  <div class="accordion-body">
                                    <span class="badge text-bg-danger text-white">HTML</span>
                                    <span class="badge text-bg-danger text-white">CSS</span><br />
                                    <div>This project is a basic HTML, CSS website.
                                    A portfolio for Barber.</div>
                                    <a class="btn btn-success px-4 mt-2" target="blank" href="https://prodiptahalder.github.io/The-Barber/">
                                          View
                                      </a>
                                  </div>
                                </div>
                              </div>
                        </div>
                        <div class="timeline__middle">
                          <div class="timeline__point"></div>
                          <div class="timeline__point timeline__point--bottom"></div>
                        </div>
                        <div class="timeline__component timeline__component--bottom">
                          <div class="timeline__date">Jan,2020</div>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
         </div>

    </div>
  );
}

export default Projects;
