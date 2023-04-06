import {
  AiOutlineUnorderedList,
  AiOutlinePlus,
  AiFillStar,
} from "react-icons/ai";
import { RiBarChart2Line } from "react-icons/ri";
import { BiLockOpen } from "react-icons/bi";
import { RiAlertFill } from "react-icons/ri";
import CommonBtn2 from "@/components/CommonBtn2";

const CreateMint = () => {
  return (
    <>
      <div className="create-mint-container">
        <h2>Create New Item</h2>
        <p>
          <span>*</span> Required fields
        </p>
        <h4>Image, Video, Audio, or 3D Model * </h4>
        <p>
          File types supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3, WAV, OGG,
          GLB, GLTF. Max size: 100 MB
        </p>
        <h3>Name:</h3>
        <input type="text" placeholder="Item name" />
        <h3>External link:</h3>
        <p>
          OpenSea will include a link to this URL on this item's detail page, so
          that users can click to learn more about it. You are welcome to link
          to your own webpage with more details.
        </p>
        <input type="text" placeholder="Http//youtube-.com/hdksj" />
        <h3>Description:</h3>
        <p>
          The description will be included on the item's detail page underneath
          its image. Markdown syntax is supported.
        </p>
        <textarea
          rows={7}
          placeholder="Provide a detailed description for your item"
        />
        <h3>Collection:</h3>
        <p>This is the collection where your item will appear. info</p>
        <select>
          <option disabled>Select Collection</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <div className="mint-new-item-collection">
          <AiOutlineUnorderedList size={20} className="icon-1" />
          <div className="mint-new-item-in">
            <h3>Properties</h3>
            <p>Textual traits that show up as rectangles</p>
          </div>
          <AiOutlinePlus size={20} className="icon-2" />
        </div>
        <div className="mint-new-item-collection">
          <AiFillStar size={20} className="icon-1" />
          <div className="mint-new-item-in">
            <h3>Properties</h3>
            <p>Textual traits that show up as rectangles</p>
          </div>
          <AiOutlinePlus size={20} className="icon-2" />
        </div>
        <div className="mint-new-item-collection">
          <RiBarChart2Line size={20} className="icon-1" />
          <div className="mint-new-item-in">
            <h3>Properties</h3>
            <p>Textual traits that show up as rectangles</p>
          </div>
          <AiOutlinePlus size={20} className="icon-2" />
        </div>
        <div className="mint-new-item-collection">
          <BiLockOpen size={20} className="icon-1" />
          <div className="mint-new-item-in">
            <h3>Properties</h3>
            <p>Textual traits that show up as rectangles</p>
          </div>
          <AiOutlinePlus size={20} className="icon-2" />
        </div>
        <div className="mint-new-item-collection">
          <RiAlertFill size={20} className="icon-1" />
          <div className="mint-new-item-in">
            <h3>Properties</h3>
            <p>Textual traits that show up as rectangles</p>
          </div>
          <AiOutlinePlus size={20} className="icon-2" />
        </div>
        <h3>Supply:</h3>
        <p>The number of items that can be minted. No gas cost to you!</p>
        <input type="number" />
        <h3>Blockchain:</h3>
        <select>
          <option disabled>Ethereum</option>
          <option value="saab">Saab</option>
          <option value="fiat">Fiat</option>
          <option value="audi">Audi</option>
        </select>
        <h3>Freeze metadata</h3>
        <p>
          Freezing your metadata will allow you to permanently lock and store
          all of this item's content in decentralized file storage.
        </p>
        <input
          type="text"
          placeholder="To freeze your metadata, you must create your item first."
        />
        <hr className="create-mint-hr" />
        <CommonBtn2 btnlabel="Create" />
      </div>
    </>
  );
};

export default CreateMint;
