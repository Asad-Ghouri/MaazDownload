import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Index() {

  const downloadImages = () => {

    const imageSrcs = [
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
      'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
    ];

    const urls = imageSrcs;
    urls.forEach((url, index) => {
      const filename = url.substring(url.lastIndexOf('/') + 1);
      fetch(url, {
        responseType: "blob"
      })
        .then(response => response.blob())
        .then(blob => {
          const url = window.URL.createObjectURL(new Blob([blob]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', filename);
          document.body.appendChild(link);
          link.click();
          link.remove();
          if (index === urls.length - 1) {
            window.alert('All images downloaded successfully!');
          }
        });
    });
  };
  return (
    <>
      <center className="main-text">Ape Digital Assets</center>


      <center className="main-text dow-ape">Download Your New Art</center>
      <div className="number-input-container">
        <input type="number" placeholder="Your current lbac number" />
      </div>

      <br />
      <div className="number-input-container">
        <button className="view-button">View</button>
        <button className="download-button" onClick={downloadImages}>Download</button>
      </div>
      {/* <center className="main-text youtribe">Your Ape</center>
      <div className="number-input-container">
        <input type="number" placeholder="please enter your lbac number again" />
        <button className="view-button">View</button>
        <button className="download-button" onClick={downloadImages}>Download</button>
      </div> */}

      <footer>
        <div className="footer-social-icons">
          <a href="#" className="social-icon">
            <FaFacebookF />
          </a>
          <a href="#" className="social-icon">
            <FaTwitter />
          </a>
          <a href="#" className="social-icon">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="footer-social-icons f-r">
          Ape shop
        </div>

      </footer>
    </>
  );
}
