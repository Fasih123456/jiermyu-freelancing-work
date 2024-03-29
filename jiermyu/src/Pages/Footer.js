import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (


      <footer class="footer">

              
        <div class="container-fluid footer-line">

          <div class="row mx-0 footer-padding">
            <div class="col-12 col-lg-4 order-lg-first my-lg-auto" style={{fontSize: "12px"}}>
              <div class="email-container" style={{fontSize: "12px", textAlign: "left"}}>
                <span class="email-label" style={{fontSize: "12px", paddingLeft: "35px"}}>GET ON THE LIST</span>

                <div class="d-flex email-flex" style={{paddingTop: "10px"}}>
                  <br />
                  <form
                    id="email-submit"
                    method="post"
                    name="mc-embedded-subscribe-form"
                    target="_blank"
                    class="email-form"
                  >
                    <input
                      id="email-address"
                      class="m-0 email-input-text"
                      type="email"
                      placeholder="Email Address"
                      name="EMAIL"
                      required=""
                      value=""
                    />
                    <div aria-hidden="true" style={{position: "absolute", left: "-5000px"}}>
                      <input
                        type="text"
                        name="b_c979ffabc41007fd79ffe121b_b785550a9e"
                        tabindex="-1"
                        value=""
                      />
                    </div>
                    <button name="subscribe" class="email-submit" type="submit" style={{borderRadius: "0px"}}>
                      →
                    </button>
                  </form>
                </div>
              </div>
            </div>
   
            <div class="col-12 col-lg-4 order-first" style={{display: "flex"}}>
            <hr class='logo-lines' />
              <img
                class="img-fluid footer-logo"
                src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
                alt="logo"
                style={{margin: "auto", height: "200px"}}
              />

<hr class='logo-lines' />
            </div>
            <div class="order-last my-auto text-center col-lg-4 col-sm-12 col-12 last-section">
              <div class="row">
                <div class="text-lg-right col-sm-12 col-12">
                <a style={{paddingRight: "10px"}} href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q"><FontAwesomeIcon icon="fa-brands fa-youtube" /></a>
                        <a style={{paddingRight: "10px"}}> <FontAwesomeIcon icon="fa-brands fa-instagram" /></a>
                        <a style={{paddingRight: "10px"}} href="https://discord.gg/3P5K3dzgdB"><FontAwesomeIcon icon="fa-brands fa-discord" /></a>
                        <a style={{paddingRight: "10px"}} href="https://twitter.com/BoredApeYC">                        <FontAwesomeIcon icon="fa-brands fa-twitter" /></a>

                </div>
                <div class="col-lg-12 col-sm-6 col-6">
                  <p class="copyright text-right">
                    <span class="copy-left final-footer">© 2021 Yuga Labs LLC</span>
                  </p>
                </div>
                <div class="col-lg-12 col-sm-6 col-6">
                  <p id="terms" class="copyright text-right">
                    <a class="link final-footer" href="#/terms">
                      BAYC Terms &amp; Conditions
                    </a>
                    <br />
                    <a class="link final-footer" href="#/mayc/terms">
                      MAYC Terms &amp; Conditions
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container-fluid m-0 p-0">
          <span class="last-line"></span>
        </div>
      </footer>

  );
};

export default Footer;
