import { useEffect } from 'react';

const AdComponent = ({ adSlot }) => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        window.adsbygoogle.push({});
      }
    } catch (e) {
      console.error("Adsense error:", e);
    }
  }, []);

  return (
    <ins className="adsbygoogle"
         style={{ display: 'block', textAlign: 'center' }}
         data-ad-client="ca-pub-8450152485790142"
         data-ad-slot={adSlot}
         data-ad-format="auto"
         data-full-width-responsive="true"></ins>
  );
};

export default AdComponent;
