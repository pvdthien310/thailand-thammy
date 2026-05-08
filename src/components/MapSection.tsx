export default function MapSection() {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.7734231508607!2d105.77530379999999!3d10.035546900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0895eec52209b%3A0xecefb26f4ecc310e!2zQ2jDom4gTcOgeSBNYXlhIFRow6Fp!5e0!3m2!1svi!2s!4v1778221995770!5m2!1svi!2s"
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