import Link from "next/link";

const CommonBtn = (props) => {
  return (
    <>
      <div className="commonBtn">
        <Link href={`${props.url}`}>{props.btnlabel}</Link>
      </div>
    </>
  );
};

export default CommonBtn;
