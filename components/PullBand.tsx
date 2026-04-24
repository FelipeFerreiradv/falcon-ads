"use client";

const pullBandStyles = {
  text: "Seu site não deve ser apenas uma vitrine. Ele deve ser o primeiro vendedor da sua empresa.",
};

export default function PullBand() {
  return (
    <section className="pullband">
      <div className="container">
        <div className="pullband-wrap reveal">
          <p className="pullband-text">
            Seu site não deve ser apenas uma vitrine. Ele deve ser o{" "}
            <em>primeiro vendedor</em> da sua empresa.
          </p>
        </div>
      </div>
    </section>
  );
}
