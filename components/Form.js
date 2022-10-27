import Script from "next/script";

export default function Form() {
  function handleLoad() {
    window.Cognito.mount("127", "#form");
  }

  return (
    <div>
      <div id="form" />
      <Script
        src="https://www.cognitoforms.com/f/seamless.js"
        data-key="VIFwyLJpI0-1pUDbhQ8wSg"
        data-form="127"
        onLoad={handleLoad}
      />
    </div>
  );
}
