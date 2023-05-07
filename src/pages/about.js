import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="about-page-container">
        <h1>Futuristic Features</h1>
        <p className="hide-mobile-view">
          Swop offers a variety of services in our free app. While our app is
          free and provides a business or creator with essential
          <br />
          tools they need to grow and expand. We also offer a paid subscription
          that provides various add-ons
          <br />
          like token powered sites that will allow you to take your relationship
          <br />
          with your following to the next level.
        </p>
        <p className="hide-pc-view">
          Swop offers a variety of services in our free app. While our app is
          free and provides a business or creator with essential tools they need
          to grow and expand. We also offer a paid subscription that provides
          various add-ons like token powered sites that will allow you to take
          your relationship with your following to the next level.
        </p>
        <div className="row">
          <div className="col-6">
            <div className="about-image-container">
              <Image
                src="/image/token-powered.png"
                alt="token-powered"
                height={380}
                width={396}
              />
              <h3>Token Powered Websites</h3>
              <p>
                Token powered websites allow you to monetize your content in a
                new and unique way. By creating gated websites that can only be
                accessed with your own non-fungible token (NFT) or other digital
                token, you can create a new way for users to connect with and
                support your work. This can provide a new source of revenue for
                your content and give you more control over how it is shared and
                accessed. With token powered websites, you can create a truly
                immersive and interactive experience for your audience.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="about-image-container">
              <Image
                src="/image/share-with-nfc.png"
                alt="share-with-nfc"
                height={380}
                width={278}
              />
              <h3>Complimentary NFC</h3>
              <p>
                As a special bonus for our customers, we offer a complimentary
                NFC chip to those who sign up for a one-year in-app
                subscription. This NFC chip will be mailed directly to you and
                can be used to share all of the information and content that you
                upload to your Swop website. With this NFC chip, you can easily
                share your website and all of its contents with others by simply
                tapping your device against another NFC-enabled device. This is
                a convenient and quick way to share your work and connect with
                your audience.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="about-image-container">
              <Image
                src="/image/share-with-qr.png"
                alt="share-with-qr"
                height={380}
                width={300}
              />
              <h3>Customized QR</h3>
              <p>
                As a premium member, you can customize your Quick Response (QR)
                code with your own logo and colors. Our QR codes are dynamic,
                meaning they will automatically update as your content changes.
                This is an advantage over traditional static QR codes, which do
                not update and may become outdated. Our customizable and dynamic
                QR codes provide an effective way to share your content and
                connect with your audience.
              </p>
            </div>
          </div>
          <div className="col-6">
            <div className="about-image-container">
              <Image
                src="/image/analytics.png"
                alt="analytics"
                height={380}
                width={258}
              />
              <h3>Analytics</h3>
              <p>
                Our analytics feature provides insights into the performance of
                your website, including leads generated, connections made,
                revenue generated, and popular links. This information can help
                you optimize your website and better engage with your audience.
                Easily export all of your data and leads to your CRM with the
                click of a button. Get a in depth breakdown of which links are
                being clicked for each one of your mircosites.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
