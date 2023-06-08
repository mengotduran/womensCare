import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { FiSearch } from "react-icons/fi";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <button
        onClick={() => setIsOpen(true)}
        className="modal_search"
      >
        <FiSearch className="modal_search_icon" style={{fontWeight:"700"}}/>
      </button>
      {isOpen && (
        <div className="nav_overlay">
          <div className="overlay" onClick={() => setIsOpen(false)}>
          </div>
        </div>
      )}
      <div className="hide_modal" onClick={() => setIsOpen(false)}>
        {isOpen && <RxCross2 className="nav_cross"/>}
      </div>
      <div className={`modal ${isOpen ? "visible" : ""}`}>
        <div className="modal_wrapper_border">
          <div className="modal_wrapper">
            <FiSearch className="Research" />
            <input placeholder="To reasearch" />
          </div>
        </div>
      </div>
    </div>
  );
}
