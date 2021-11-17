import style from "./google-maps.module.css";

const GoogleMaps = () => {
  return (
    <div>
      <iframe
        className={style.maps}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2030.4741638162407!2d24.73432521596141!3d59.40848508168665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469294c16cae4063%3A0x41adcb603434b5bc!2sP%C3%A4rnu%20mnt%20139%2C%2011317%20Tallinn!5e0!3m2!1sen!2see!4v1637171964200!5m2!1sen!2see"
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );
};

export default GoogleMaps;
