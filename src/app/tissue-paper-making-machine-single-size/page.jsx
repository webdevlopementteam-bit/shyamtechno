export const metadata = {
  title: "Redirecting… | Shyam Techno Print",
  robots: { index: false, follow: true },
  alternates: { canonical: "/tissue-paper-machine/" },
};

export default function TissuePaperMakingMachineSingleSizeRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content="0; url=/tissue-paper-machine/" />
      <script
        dangerouslySetInnerHTML={{
          __html: "location.replace('/tissue-paper-machine/');",
        }}
      />
      <p style={{ padding: 40, fontFamily: "sans-serif" }}>
        This page has moved. Redirecting to{" "}
        <a href="/tissue-paper-machine/">/tissue-paper-machine/</a>…
      </p>
    </>
  );
}
