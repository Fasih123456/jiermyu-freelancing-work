import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import { Row, Col, Container } from "react-bootstrap";


import "../css/styles.css";
import "../css/home-content.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div class="container px-4 px-lg-5 main-body">
        <Container style={{ paddingTop: "1.5rem" }}>
          <div class="mb-5 row">
            <div class="col">
              <div class="mb-4 row">
                <div class="mb-4 col-lg-7 col-12">
                  <h1 class="d-flex font-italic welcome-title mb-3">
                    WELCOME TO THE
                    <br />
                    BORED APE YACHT CLUB
                  </h1>
                  <p class="common-p mb-0">
                    BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living
                    on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership
                    card, and grants access to members-only benefits, the first of which is access
                    to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be
                    unlocked by the community through roadmap activation.
                  </p>
                </div>
                <div class="my-lg-auto col-lg-4 col-12 offset-lg-1">
                  <div class="common-container">
                    <div class="row">
                    <div class="pb-2 pr-2 col-6 img-fluid-section left-padding">
                        <img
                          class="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/ape1.png"
                          alt="ape1"
                          aria-label="ape1"
                        />
                      </div>
                      <div class="pb-2 pr-2 col-6 img-fluid-section right-padding">
                        <img
                          class="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/ape2.png"
                          alt="ape2"
                          aria-label="ape2"
                        />
                      </div>
                    </div>
                    <div class="row">
                      <div class="pb-2 pr-2 col-6 img-fluid-section left-padding">
                        <img
                          class="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/ape3.png"
                          alt="ape3"
                          aria-label="ape3"
                        />
                      </div>
                      <div class="pb-2 pr-2 col-6 img-fluid-section right-padding">
                        <img
                          class="img-fluid"
                          src="https://ik.imagekit.io/bayc/assets/ape4.png"
                          aria-label="ape4"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="mb-3 col-12">
                <h3 class="yellow-text">FAIR DISTRIBUTION</h3>
              <h4 class="ponzi">(BONDING CURVES ARE A PONZI)</h4>
                </div>
                <div class="mb-2 mb-lg-0 col-lg-7 col-12">
                  <p class="common-p mb-lg-0">
                    There are no bonding curves here. Buying a Bored Ape costs 0.08 ETH. There are
                    no price tiers; BAYC membership costs the same for everyone.
                  </p>
                </div>
                <div class="col-lg-4 col-12 offset-lg-1">
                  <p class="note text-justify mb-0">
                    Note: Thirty apes are being withheld from the sale. These will be used for
                    giveaways, puzzle rewards—and for the creators' BAYC memberships.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="mb-5 row yellow-division">
            <div class="col" style={{ paddingBottom: "0px" }}>
              <div id="buy-an-ape" class="fair-title">
                <div class="bayc-bg p-4 m-auto row" style={{ height: "100%" }}>
                  <div
                    class="m-auto col-lg-3 col-12 each-column"
                    id="inner-div"
                    style={{ paddingTop: "20px" }}
                  >
                    <h3 class="buy-ape-title">BUY AN APE</h3>
                  </div>
                  <div class="m-auto col-lg-4 col-12 offset-lg-1 each-column">
                    <p
                      style={{
                        color: "#000",
                        fontSize: "1em",
                        textAlign: "justify",
                        wordSpacing: "1px",
                      }}
                    >
                      The initial sale has sold out. To get your Bored Ape, check out the collection
                      on OpenSea.
                    </p>
                  </div>
                  <div class="m-auto col-lg-3 col-12 offset-lg-1 each-column">
                    <a class="button-style" href="https://opensea.io/collection/boredapeyachtclub">
                      <button class="inside-button-font" id="button-for-buy" type="button">
                        BUY AN APE ON OPENSEA
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ borderColor: "rgb(105,105,105)", opacity: "30%" }} />

          <div class="mb-5 row">
            <div class="col">
              <div class="common-container">
                <div class="row">
                  <div class="mb-3 col-lg-7 col-12">
                    <h1>THE SPECS</h1>
                    <p class="common-p">
                      Each Bored Ape is unique and programmatically generated from over 170 possible
                      traits, including expression, headwear, clothing, and more. All apes are dope,
                      but some are rarer than others.
                      <br />
                      <br />
                      The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on
                      IPFS. (
                      <a class="link" href="#/provenance">
                        See Record and Proof.
                      </a>
                      ) Purchasing an ape costs 0.08 ETH.
                      <br />
                      <br />
                      To access members-only areas such as&nbsp;
                      <a class="link" href="#/bathroom">
                        THE BATHROOM
                      </a>
                      , Apeholders will need to be signed into their Metamask Wallet.
                    </p>
                  </div>
                  <div class="my-auto col-lg-4 col-12 offset-lg-1">
                    <img
                      class="img-fluid w-100"
                      src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif"
                      alt="mystery token"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ borderColor: "rgb(105,105,105)", opacity: "30%" }} />

          <div class="mb-5 row">
            <div class="col">
              <div class="row">
                <div class="mb-3 col-lg-9 col-12">
                  <h2 class="common-title mb-3">WELCOME TO THE CLUB</h2>
                  <p class="common-p">
                    When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare
                    piece of art. You are gaining membership access to a club whose benefits and
                    offerings will increase over time. Your Bored Ape can serve as your digital
                    identity, and open digital doors for you.
                  </p>
                </div>
              </div>
              <div class="row">
                <div class="mx-auto col-md-2 col-12">
                  <div class="mb-4 mb-md-0 row">
                    <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                      <img
                        class="img-fluid m-auto"
                        src="https://ik.imagekit.io/bayc/assets/icon1.png"
                        alt="petrified monkey paw"
                        width="100px"
                        id="image1"
                      />
                    </div>
                    <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                      <p class="mb-0 common-sub-p text-md-center small-text">
                        10,000 Provably-rare Bored Ape tokens
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mx-auto col-md-2 col-12">
                  <div class="mb-4 mb-md-0 row">
                    <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                      <img
                        class="img-fluid m-auto"
                        src="https://ik.imagekit.io/bayc/assets/icon2.png"
                        alt="tiki monkey"
                        width="100px"
                        id="image2"
                      />
                    </div>
                    <div class="m-auto col-md-12 col-8 offset-md-0 offset-1" style={{paddingTop: "25px"}}>
                      <p class="mb-0 common-sub-p text-md-center small-text">
                        Fair Launch, fair distribution: All apes cost 0.08 ETH
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mx-auto col-md-2 col-12">
                  <div class="mb-4 mb-md-0 row">
                    <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3" >
                      <img
                        class="img-fluid m-auto"
                        src="https://ik.imagekit.io/bayc/assets/icon3.png"
                        alt="captain monkey"
                        width="100px"
                        id="image3"
                      />
                    </div>
                    <div class="m-auto col-md-12 col-8 offset-md-0 offset-1" style={{paddingTop: "25px"}}>
                      <p class="mb-0 common-sub-p text-md-center small-text">
                        Ownership and commercial usage rights given to the consumer over their NFT
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mx-auto col-md-2 col-12">
                  <div class="mb-4 mb-md-0 row">
                    <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3">
                      <img
                        class="img-fluid m-auto"
                        src="https://ik.imagekit.io/bayc/assets/icon4.png"
                        alt="beer bottles"
                        width="100px"
                        id="image4"
                      />
                    </div>
                    <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                      <p class="mb-0 common-sub-p text-md-center small-text">
                        The Bathroom: A member's-only graffiti board
                      </p>
                    </div>
                  </div>
                </div>
                <div class="mx-auto col-md-2 col-12">
                  <div class=" mb-md-0 row">
                    <div class="d-flex m-auto align-items-md-center icon-container col-md-12 col-3" style={{paddingTop: "45px"}}>
                      <img
                        class="img-fluid m-auto"
                        src="https://ik.imagekit.io/bayc/assets/icon5.png"
                        alt="mermonkey"
                        width="100px"
                        id="image5"
                      />
                    </div>
                    <div class="m-auto col-md-12 col-8 offset-md-0 offset-1">
                      <p class="mb-0 common-sub-p text-md-center small-text">
                        Gain additional benefits through roadmap activations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ borderColor: "rgb(105,105,105)", opacity: "30%" }} />

          <div class="mb-5 row">
            <div class="col">
              <div class="common-container">
                <div class="row">
                  <div class="mb-5 mb-lg-0 col-lg-9 col-12">
                    <h2 class="common-title mb-3">THE BATHROOM</h2>
                    <p class="common-p">
                      The BAYC Bathroom will become operational once the presale period is over. It
                      contains a canvas accessible only to wallets containing at least one ape. Like
                      any good dive bar bathroom, this is the place to draw, scrawl, or write
                      expletives.
                    </p>
                    <p class="common-p">
                      Each ape-holder will be able to paint a pixel on the bathroom wall every
                      fifteen minutes. Think of it as a collaborative art experiment for the
                      cryptosphere. A members-only canvas for the discerning minds of crypto
                      twitter.
                    </p>
                    <p class="common-p mb-0">We're pretty sure it's going to be full of dicks.</p>
                  </div>
                  <div class="d-flex col-lg-3 col-12">
                    <img
                      class="toilet m-auto"
                      src="https://ik.imagekit.io/bayc/assets/toilet.png"
                      alt="bayc toilet"
                      height="300px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ borderColor: "rgb(105,105,105)", opacity: "30%" }} />
          <div class="row">
            <div class="mb-3 col-lg-9 col-12">
              <h2 class="common-title mb-3">ROADMAP ACTIVATIONS</h2>
              <p class="common-p">We’re in this for the long haul.</p>
              <p class="common-p">
                We’ve set up some goalposts for ourselves. Once we hit a target sell through
                percentage, we will begin to work on realizing the stated goal.
              </p>
            </div>
            <div class="mb-3 mb-md-0 col-lg-8 col-12">
              <div class="mb-3 mb-lg-1 row percentage">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">10%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p small-text">
                    We pay back our moms.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row percentage">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">20%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p small-text">
                    We release the Caged Apes. 5 Caged Apes (tokens held back from the sale) are
                    airdropped to random Apeholders.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row percentage">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">40%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p small-text">
                    BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to Ape into Shitcoins
                    To.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row percentage">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">60%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p small-text">
                    Member-Exclusive BAYC Merch Store gets unlocked, featuring Limited Edition tees,
                    hoodies, and other goodies.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row percentage  " style={{ height: "70px" }}>
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">80%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p small-text">
                    The clubhouse image becomes interactive and the Mysterious Note becomes legible,
                    beginning a treasure hunt. The first to solve the mystery will be rewarded 5 ETH
                    and a Bored Ape.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row percentage">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">90%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p small-text">
                    The Bored Ape liquidity pool is initiated.
                  </p>
                </div>
              </div>
              <div class="mb-3 mb-lg-1 row percentage">
                <div class="m-auto col-lg-1 col-2 offset-lg-1 offset-1">
                  <p class="goal">100%</p>
                </div>
                <div class="m-auto col-lg-10 col-9">
                  <p class="text-decoration-line-through common-sub-p small-text">
                    The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we cook up new ways
                    to ape with our friends.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="shirt-container mx-auto mb-5 my-lg-auto col-lg-3 col-12 offset-lg-1 center"
              style={{ backgroundColor: "#bfc500", marginTop: "40px" }}
            >
              <img
                class="shirt-mask"
                src="https://ik.imagekit.io/bayc/assets/shirt.png"
                alt="shirt"
              />
            </div>
          </div>
          <hr style={{ borderColor: "rgb(105,105,105)", opacity: "30%" }} />

          <div class="mb-5 row">
            <div class="col">
              <div class="row">
                <div class="mb-4 mb-lg-0 col-lg-8 col-12">
                  <h2 class="common-title mb-3">COMMUNITY TOOLS</h2>
                  <p class="common-p mb-0">
                    Here are some helpful tools created by the Bored Ape Yacht Club community.
                    Please note that these are unofficial in nature. Every assignment of an ape's
                    overall value or rarity is inherently subjective.
                  </p>
                </div>
                <div class="m-lg-auto col-lg-3 col-12 offset-lg-1">
                  <div class="d-flex row">
                    <div class="mb-3 mx-auto col-lg-12 col-md-6 col-sm-12">
                      <a href="https://nftexp.io/explore/bored-ape-yacht-club">
                        <button class="bayc-button w-100" type="button">
                          NFTEXP.IO
                        </button>
                      </a>
                    </div>
                    <div class="mx-auto col-lg-12 col-md-6 col-sm-12">
                      <a href="https://rarity.tools/boredapeyachtclub">
                        <button class="bayc-button w-100" type="button">
                          RARITY.TOOLS
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ borderColor: "rgb(105,105,105)", opacity: "30%" }} />

          <div class="mb-5 row">
            <div class="col">
              <div id="team" class="common-container">
                <div class="row">
                  <div class="mb-3 col-lg-7 col-12">
                    <h2 class="common-title mb-3">THE TEAM</h2>
                    <p class="common-p">
                      BAYC was created by four friends who set out to make some dope apes, test our
                      skills, and try to build something (ridiculous).
                    </p>
                    <p class="common-p">
                      <span class="bayc-color bold-text">GARGAMEL.</span>{" "}
                      <span class="font-italic">STARCRAFT OBSESSED. EATS SMURFS.</span>
                    </p>
                    <p class="common-p">
                      <span class="bayc-color bold-text">GORDON GONER.</span>{" "}
                      <span class="font-italic">REFORMED LEVERAGE ADDICT.</span>
                    </p>
                    <p class="common-p">
                      <span class="bayc-color bold-text">EMPEROR TOMATO KETCHUP.</span>{" "}
                      <span class="font-italic">
                        SPENT ALL THEIR MONEY ON FIRST PRESSES AND PET-NAT.
                      </span>
                    </p>
                    <p class="common-p">
                      <span class="bayc-color bold-text">NO SASS.</span>{" "}
                      <span class="font-italic"> HERE FOR THE APES. NOT FOR THE SASS.</span>
                    </p>
                  </div>
                  <div class="col-lg-4 col-12 offset-lg-1">
                    <div class="common-container">
                      <div class="row">
                        <div class="pb-2 pr-2 col-6 img-fluid-section">
                          <img
                            class="img-fluid"
                            src="https://ik.imagekit.io/bayc/assets/garga.png"
                            alt="garga"
                            aria-label="garga"
                          />
                        </div>
                        <div class="pb-2 pl-2 col-6 img-fluid-section">
                          <img
                            class="img-fluid"
                            src="https://ik.imagekit.io/bayc/assets/gordy.png"
                            alt="gordy"
                            aria-label="gordy"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div class="pt-2 pr-2 col-6 img-fluid-section">
                          <img
                            class="img-fluid"
                            src="https://ik.imagekit.io/bayc/assets/tomato.png"
                            alt="tomato"
                            aria-label="tomato"
                          />
                        </div>
                        <div class="pt-2 pl-2 col-6 img-fluid-section">
                          <img
                            class="img-fluid"
                            src="https://ik.imagekit.io/bayc/assets/sass.png"
                            aria-label="sass"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="mb-5 row" id="final-section">
            <div class="col">
              <div class="d-flex justify-content-center">
                <p class="common-p text-center text-break mb-0">
                  <span class="bold-text">VERIFIED SMART CONTRACT ADDRESS: </span>
                  <a
                    title="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
                    href="https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
                    class="link"
                  >
                    0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Container>

        <hr class="p-0 line last-line-page" />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
