const paperAssets = {
  topPortrait:
    "https://app.paper.design/file-assets/01KWN8255C79DPBHE84MTRM5BF/01KWN8E3SCTN6QC47SNSK3VD5F.png",
  nameMark:
    "https://app.paper.design/file-assets/01KWN8255C79DPBHE84MTRM5BF/01KWNA77Q0A3ABVARNP0CKB3ZP.png",
  companyMark:
    "https://app.paper.design/file-assets/01KWN8255C79DPBHE84MTRM5BF/01KWNAFGZA2GS4Q5Q52N22EK9X.png",
  heroPhoto:
    "https://app.paper.design/file-assets/01KWN8255C79DPBHE84MTRM5BF/01KWNB9G2A839BE1K0Y03A8ZZQ.png",
  cofounderMark:
    "https://app.paper.design/file-assets/01KWN8255C79DPBHE84MTRM5BF/01KWNBNA751AZ20W1QD19P0A5T.png",
  patchPhoto:
    "https://app.paper.design/file-assets/01KWN8255C79DPBHE84MTRM5BF/01KWNBY32EZQZK4F2WXPDZ0YBM.jpg",
};

export default function Home() {
  return (
    <main className="paper-page" aria-label="Personal site landing page">
      <section className="paper-stage" aria-label="Paper-inspired personal profile">
        <div
          className="paper-image paper-image-top"
          style={{ backgroundImage: `url(${paperAssets.topPortrait})` }}
          aria-hidden="true"
        />

        <h1 className="paper-text paper-hello">Hello, I&apos;m</h1>

        <div
          className="paper-image paper-name-mark"
          style={{ backgroundImage: `url(${paperAssets.nameMark})` }}
          aria-label="Decorative name mark"
        />

        <p className="paper-text paper-love">I love software, running &amp; reading</p>
        <p className="paper-text paper-s26">s26</p>
        <p className="paper-text paper-intern">prev intern @</p>

        <div
          className="paper-image paper-company-mark"
          style={{ backgroundImage: `url(${paperAssets.companyMark})` }}
          aria-label="Previous internship company logo"
        />

        <div
          className="paper-image paper-hero-photo"
          style={{ backgroundImage: `url(${paperAssets.heroPhoto})` }}
          aria-hidden="true"
        />

        <section className="paper-work" aria-labelledby="work-title">
          <h2 className="paper-text paper-work-title" id="work-title">
            Work:
          </h2>

          <div
            className="paper-image paper-patch-photo"
            style={{ backgroundImage: `url(${paperAssets.patchPhoto})` }}
            aria-hidden="true"
          />

          <p className="paper-text paper-patch">- Patch 23&apos;</p>
          <p className="paper-text paper-cofounder">- Co-founder</p>

          <div
            className="paper-image paper-cofounder-mark"
            style={{ backgroundImage: `url(${paperAssets.cofounderMark})` }}
            aria-label="Co-founder company logo"
          />

          <p className="paper-text paper-carbon">- CarbonCopy</p>
          <p className="paper-text paper-blueprints">- Blueprints</p>
        </section>

        <p className="paper-text paper-currently">
          Currently building ergonomic cloud agents
        </p>
      </section>
    </main>
  );
}
