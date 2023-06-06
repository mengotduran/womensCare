
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
// import HoverMenuButton from "../../pages/hoverMenuButton";



export const Header = () => {
  return (
    <>
    <section className="navbar">
        <div>
            <div className="media_lang">
                <div className="media">
                    <FaFacebook />
                    <RiInstagramFill />
                    {/* <HoverMenuButton title="dropdown1"/>
                    <HoverMenuButton title="dropdown2"/> */}
                </div>
            </div>
        </div>

    </section>
    </>
  );
};
