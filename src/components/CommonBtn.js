import Link from "next/link";

const CommonBtn = (props) => {
  return (
    <>
      <div className="commonBtn">
        <Link href={`${props.link}`}>{props.btnlabel}</Link>
      </div>
    </>
  );
};

export default CommonBtn;
