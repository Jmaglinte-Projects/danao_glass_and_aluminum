import React from "react";

const GoogleMap = () => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.72203301572!2d124.02563721411458!3d10.522545766707408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9b08f807ae917%3A0x4c3e42bd2fd6c10a!2sDuterte%20St%2C%20Danao%20City%2C%20Cebu!5e0!3m2!1sen!2sph!4v1662539879255!5m2!1sen!2sph"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
