import Image from "next/image";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const QrCodeScan = (props) => {
  const [url, setUrl] = useState(props.link);
  return (
    <div className="modal-qr-code-scan-out">
      <div className="modal-qr-code-scan">
        <IoCloseSharp
          size={25}
          color="#020202"
          onClick={() =>
            (document.querySelector(".modal-qr-code-scan-out").style.display =
              "none")
          }
        />
        <h2>Scan to Deposit any EVM</h2>
        <Image
          src={`/image/${props.qrCode}`}
          alt="qrCode"
          height={300}
          width={300}
        />
        <br />
        <input
          type="text"
          value={`${url}`}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button>Copy</button>
      </div>
    </div>
  );
};

export default QrCodeScan;
