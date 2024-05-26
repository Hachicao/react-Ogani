import { useEffect } from "react";

export const useScript = () => {
  useEffect(() => {
    const loadScript = (src, async = true) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = async;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const loadScripts = async () => {
      try {
        await loadScript("assest/js/jquery-3.3.1.min.js", false);
        await loadScript("assest/js/bootstrap.min.js");
        await loadScript("assest/js/jquery.nice-select.min.js");
        await loadScript("assest/js/jquery-ui.min.js");
        await loadScript("assest/js/jquery.slicknav.js");
        await loadScript("assest/js/mixitup.min.js");
        await loadScript("assest/js/owl.carousel.min.js");
        await loadScript("assest/js/main.js");
      } catch (error) {
        console.error("Failed to load script:", error);
      }
    };

    loadScripts();

    return () => {
      const scriptNames = [
        "jquery-3.3.1.min.js",
        "bootstrap.min.js",
        "jquery.nice-select.min.js",
        "jquery-ui.min.js",
        "jquery.slicknav.js",
        "mixitup.min.js",
        "owl.carousel.min.js",
        "main.js",
      ];
      scriptNames.forEach((scriptName) => {
        const script = document.querySelector(`script[src*="${scriptName}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);
};
