import { useEffect } from "react";

const ClarityContainer = ({ projectId }) => {
  useEffect(() => {
    // Add Clarity tracking code
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", projectId);

    // Clean up function (optional)
    return () => {
      // You can perform cleanup here if needed
    };
  }, [projectId]);

  return null; 
};

export default ClarityContainer;
