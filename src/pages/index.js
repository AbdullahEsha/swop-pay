import Footer from "@/components/Footer";
import MainNav from "@/components/MainNav";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <MainNav />
        <div className="banner-div-top">
          <div className="container banner-div-top-inside">
            <div className="row">
              <div className="col-6">
                <h1>Allow Your Company To Take Crypto Payment Easily Online</h1>
                <p>
                  Swop’s Flat Rectangle NFC’s are designed to be durable and
                  simple to Flat is great to put under any phone case(non-metal)
                  Users can app to program any of our NFC’s with the click of a
                  button. This profile to the NFC for easy sharing. You just tap
                  the NFC on any phone to share your digital business card,
                  microsite, crypto the possibilities are endless. Use the swop
                  app to.
                </p>
                <Link href="/">Login</Link>
              </div>
              <div className="col-6">
                <Image
                  src="/image/crypto-payment-mobile.png"
                  alt="crypto-payment-mobile"
                  height={868}
                  width={738}
                  id="crypto-payment-mobile"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container polygon-blockchain-div">
          <div className="row reverse">
            <div className="col-6">
              <Image
                src="/image/polygon-matic-badge.png"
                alt="polygon-matic-badge"
                height={676}
                width={454}
                id="polygon-matic-badge"
              />
            </div>
            <div className="col-6 polygon-blockchain-content-out">
              <div className="polygon-blockchain-content">
                <h2>
                  Cut your payment cost by 90% using the Polygon Blockchain
                </h2>
                <p>
                  Swop’s Flat Rectangle NFC’s are designed to be durable and
                  simple to use. The Flat is great to put under any phone
                  case(non-metal) Users can download our app to program any of
                  our NFC’s with the click of a button. This will attach your
                  profile to the NFC for easy sharing. You just tap the NFC on
                  any compatible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container dashboard-div">
          <div className="row">
            <div className="col-6 swop-dashboard-content-out">
              <div className="swop-dashboard-content">
                <h2>Everything You Can Handle From Your Dashboard</h2>
                <p>
                  Swop’s Flat Rectangle NFC’s are designed to be durable and
                  simple to use. The Flat is great to put under any phone
                  case(non-metal) Users can download our app to program any of
                  our NFC’s with the click of a button. This will attach your
                  profile to the NFC for easy sharing. You just tap the NFC on
                  any compatible.
                </p>
              </div>
            </div>
            <div className="col-6">
              <Image
                src="/image/swop-dashboard.png"
                alt="swop-dashboard"
                height={641}
                width={635}
                id="swop-dashboard"
              />
            </div>
          </div>
        </div>
        <div className="container home-how-it-work">
          <h2>HOW ITS WORKS</h2>
          <p className="hide-mobile-view">
            Swop is free to download and very easy to get started. After making
            a profile and getting setup be
            <br />
            sure to order a NFC. Our technology is compatible with all current
            and most
            <br />
            modern models of smartphones. Never miss an opportunity
            <br />
            again with Swop.
          </p>
          <p className="hide-pc-view">
            Swop is free to download and very easy to get started. After making
            a profile and getting setup be sure to order a NFC. Our technology
            is compatible with all current and most modern models of
            smartphones. Never miss an opportunity again with Swop.
          </p>
          <div className="background-level" />
          <div className="row">
            <div className="col-4">
              <Image
                src="/image/number-icon1.png"
                alt="number_image"
                height={71}
                width={71}
                className="number-icon"
              />
              <div className="card-how-it">
                <Image
                  src="/image/homeCard1.png"
                  alt="no_image"
                  width={360}
                  height={540}
                />
                <h5>
                  Set up your <span>SWOP</span> profile
                </h5>
                <p>
                  After creating an account and setting up your wallet, create a
                  website in the builder. Building a website is easy with our
                  app, it provides a template to input all your important
                  information.
                </p>
              </div>
            </div>
            <div className="col-4">
              <Image
                src="/image/number-icon2.png"
                alt="number_image"
                height={71}
                width={71}
                className="number-icon"
              />
              <div className="card-how-it">
                <Image
                  src="/image/homeCard2.png"
                  alt="no_image"
                  width={360}
                  height={540}
                />
                <h5>
                  Active <span>NFC</span> device
                </h5>
                <p>
                  After ordering a NFC device and setting up your microsite,
                  press the activate button on your website builder and tap the
                  NFC to your phone to connect the NFC to your website.
                </p>
              </div>
            </div>
            <div className="col-4">
              <Image
                src="/image/number-icon3.png"
                alt="number_image"
                height={71}
                width={71}
                className="number-icon"
              />
              <div className="card-how-it">
                <Image
                  src="/image/homeCard3.png"
                  alt="no_image"
                  width={360}
                  height={540}
                />
                <h5>
                  Ready to <span>connect</span>
                </h5>
                <p>
                  Tap the NFC and hold from 1-4 seconds on anyone’s phone you
                  meet and your profile will pop up. The other person does NOT
                  need the swop app for the NFC to work.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container send-link-div">
          <div className="row reverse">
            <div className="col-6">
              <Image
                src="/image/swop-pay-image.png"
                alt="polygon-matic-badge"
                height={764}
                width={531}
                id="polygon-matic-badge"
              />
            </div>
            <div className="col-6 send-link-content-out">
              <div className="send-link-content">
                <h2>Send A Link To Get Paid</h2>
                <p>
                  Swop’s Flat Rectangle NFC’s are designed to be durable and
                  simple to use. The Flat is great to put under any phone
                  case(non-metal) Users can download our app to program any of
                  our NFC’s with the click of a button. This will attach your
                  profile to the NFC for easy sharing. You just tap the NFC on
                  any compatible.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container transaction">
          <div className="transaction-cost">
            <Image
              src="/image/cost-icon.png"
              alt="cost-icon"
              height={133}
              width={133}
            />
            <h3>Avarage cost per transaction</h3>
            <p>
              Personlize the look of your digital business card. Add all of your
              contact information.
            </p>
          </div>
          <div className="transaction-time">
            <Image
              src="/image/time-icon.png"
              alt="time-icon"
              height={133}
              width={133}
            />
            <h3>Avarage time per transaction</h3>
            <p>
              Personlize the look of your digital business card. Add all of your
              contact information.
            </p>
          </div>
          <div className="transaction-daily">
            <Image
              src="/image/daily-icon.png"
              alt="daily-icon"
              height={133}
              width={133}
            />
            <h3>Avarage daily transaction</h3>
            <p>
              Personlize the look of your digital business card. Add all of your
              contact information.
            </p>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
