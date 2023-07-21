import React, { useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import bookList from "./list.json";
import DetailsPopup from "./detailsPopup";
import "./styles.css";

export default function Books() {
  const [openPopup, setOpenPopup] = useState(false);
  const [details, setDetails] = useState({});

  const openPopupHandler = (item) => {
    setOpenPopup(true);
    setDetails({
      title: item?.title,
      author: item?.author,
      description: item?.description,
      imageLink: item?.imageLink,
    });
  };
  return (
    <>
      <DetailsPopup bookDetails={details} openPopup={openPopup} />
      <div>
        {bookList.map((item) => {
          console.log();
          return (
            <div>
              <ListGroup horizontal="md" className="my-2 pl-3">
                <ListGroup.Item>
                  <img
                    src={item?.imageLink}
                    className="book-cover-wrapper"
                  ></img>
                </ListGroup.Item>

                <ListGroup.Item style={{ maxWidth: "760px" }}>
                  <div
                    className="book-list-wrapper"
                    onClick={() => openPopupHandler(item)}
                  >
                    <div>
                      <span> Title : </span> <span>{item?.title}</span>
                    </div>

                    <div>
                      <span> Author : </span> <span>{item?.author}</span>
                    </div>

                    <div>
                      <span> Description : </span>{" "}
                      <span>{item?.briefDesc}</span>
                    </div>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </div>
          );
        })}
      </div>
    </>
  );
}
