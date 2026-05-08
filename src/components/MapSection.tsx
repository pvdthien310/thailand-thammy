export default function MapSection() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7734232713383!2d105.77272887534984!3d10.035546890071625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a08818d0cb5e5b%3A0x4aa5deb7c223e508!2zMTkyIMSQLiBUcuG6p24gSMawbmcgxJDhuqFvLCBOaW5oIEtp4buBdSwgQ-G6p24gVGjGoSA5MDAwMCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1778219744579!5m2!1sen!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}