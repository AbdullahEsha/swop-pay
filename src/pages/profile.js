import CommonBtn2 from "@/components/CommonBtn2";
import Image from "next/image";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="row">
          <div className="col-6">
            <h4>Phone</h4>
            <input type="text" placeholder="Input text here" />
            <h4>Website</h4>
            <input type="text" placeholder="Input text here" />
            <h4>City</h4>
            <input type="text" placeholder="Input text here" />
            <h4>Zipcode</h4>
            <input type="text" placeholder="Input text here" />
            <h4>Shipping Cost</h4>
            <input type="text" placeholder="Input text here" />
            <h4>Select File</h4>
            <input type="file" className="profile-container-fill" />
          </div>
          <div className="col-6">
            <h4>Email</h4>
            <input type="text" placeholder="Input text here" />
            <h4>Street</h4>
            <input type="text" placeholder="Input text here" />
            <h4>State/Providence</h4>
            <input type="text" placeholder="Input text here" />
            <h4>Country</h4>
            <input type="text" placeholder="Input text here" />
            <h4>Acceptable Blockchains For Payment</h4>
            <div className="option-container">
              <div className="option active">
                <Image
                  src="/image/polygon.png"
                  alt="polygon"
                  height={21}
                  width={21}
                />{" "}
                <p>Polygon</p>
              </div>
              <div className="option">
                <Image
                  src="/image/apple-pay.png"
                  alt="apple-pay"
                  height={21}
                  width={21}
                />{" "}
                <p>Apple Pay</p>
              </div>
              <div className="option">
                <Image
                  src="/image/ethereum.png"
                  alt="ethereum"
                  height={21}
                  width={21}
                />{" "}
                <p>ETH</p>
              </div>
            </div>
            <h4>Acceptable Tockens For Blockchains</h4>
            <div className="option-container">
              <div className="option">
                <Image
                  src="/image/polygon.png"
                  alt="polygon"
                  height={21}
                  width={21}
                />{" "}
                <p>Polygon</p>
              </div>
              <div className="option active">
                <Image
                  src="/image/apple-pay.png"
                  alt="apple-pay"
                  height={21}
                  width={21}
                />{" "}
                <p>Apple Pay</p>
              </div>
              <div className="option">
                <Image
                  src="/image/ethereum.png"
                  alt="ethereum"
                  height={21}
                  width={21}
                />{" "}
                <p>ETH</p>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="provile-header-container"></div>
          </div>
        </div>
        <div className="profile-container-bottom">
          <div>
            <h4>Subsidize gas fee:</h4>
            <label class="switch">
              <input type="checkbox" />
              <span class="slider round"></span>
            </label>
          </div>{" "}
          <CommonBtn2 btnlabel="Save" />
        </div>
      </div>
    </>
  );
};

export default Profile;
