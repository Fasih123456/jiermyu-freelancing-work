const Footer = () => {
  return (


      <footer class="footer">
        <div class="container-fluid footer-line">
          <hr class="p-0 line" />
          <div class="row mx-0 footer-padding">
            <div class="col-12 col-lg-4 order-lg-first my-lg-auto">
              <div class="email-container">
                <span class="email-label">GET ON THE LIST</span>
                <br />
                <div class="d-flex email-flex">
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
                    <button name="subscribe" class="email-submit" type="submit">
                      →
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-12 col-lg-4 order-first">
              <img
                class="img-fluid footer-logo"
                src="https://ik.imagekit.io/bayc/assets/bayc-footer.png"
                alt="logo"
              />
            </div>
            <div class="order-last my-auto text-center col-lg-4 col-sm-12 col-12">
              <div class="row">
                <div class="text-lg-right col-sm-12 col-12">
                  <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
                    <i class="fa fa-youtube-play social-icon pr-lg-0"></i>
                  </a>
                  <a href="">
                    <i class="fa fa-instagram social-icon pr-lg-0"></i>
                  </a>
                  <a href="https://discord.gg/3P5K3dzgdB">
                    <i class="fa fa-discord-alt social-icon pr-lg-0"></i>
                  </a>
                  <a href="https://twitter.com/BoredApeYC">
                    <i class="fa fa-twitter social-icon pr-lg-0"></i>
                  </a>
                </div>
                <div class="col-lg-12 col-sm-6 col-6">
                  <p class="copyright text-right">
                    <span class="copy-left">© 2021 Yuga Labs LLC</span>
                  </p>
                </div>
                <div class="col-lg-12 col-sm-6 col-6">
                  <p id="terms" class="copyright text-right">
                    <a class="link" href="#/terms">
                      BAYC Terms &amp; Conditions
                    </a>
                    <br />
                    <a class="link" href="#/mayc/terms">
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
