import Image from "next/image";

const QrCodeScan = (props) => {
  return (
    <>
      <div className="modal-qr-code-scan">
        <h2>Scan to Deposit any EVM</h2>
        <Image
          src={`/image/${props.qrCode}`}
          alt="qrCode"
          height={300}
          width={300}
        />
        <input type="text" />
        <button>Copy</button>
      </div>
    </>
  );
};

export default QrCodeScan;
