import React from "react";
import "./contact.css";
export const Contact = () => {
  return (
    <section class="contact">
      <h2>
        <span>Contact </span>Us
      </h2>
      <p>
        Feel free to contact us if you have any questions or would like to make
        a reservation!
      </p>
      <div class="row" data-aos="zoom-in" data-aos-duration="1500">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253840.65639022697!2d106.66470106402271!3d-6.229379586946628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1710926259326!5m2!1sid!2sid"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="map"
        ></iframe>

        <form action="">
          <div class="input-grup">
            <i data-feather="user"></i>
            <input type="text" placeholder="Name" />
          </div>
          <div class="input-grup">
            <i data-feather="mail"></i>
            <input type="text" placeholder="Email" />
          </div>
          <div class="input-grup">
            <i data-feather="phone"></i>
            <input type="text" placeholder="Handphone" />
          </div>
          <button type="submit" class="btn">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};
