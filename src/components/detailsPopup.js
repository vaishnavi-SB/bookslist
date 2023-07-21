import React from "react";
import Modal from "react-bootstrap/Modal";

export default function detailsPopup(props) {
  const { openPopup, bookDetails } = props;

  return (
    <div>
      <Modal
        show={openPopup}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body>
          <div style={{ display: "flex" }}>
            <div>
              <img
                src={bookDetails?.imageLink}
                style={{
                  width: "150px",
                  height: "100%",
                  padding: "6px",
                }}
              ></img>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginLeft: "12px",
                }}
              >
                <div>
                  <span> Title : </span> <span>{bookDetails?.title}</span>
                </div>

                <div>
                  <span> Author : </span> <span>{bookDetails?.author}</span>
                </div>

                <div>
                  <span> Description : </span>{" "}
                  <span>{bookDetails?.description}</span>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
