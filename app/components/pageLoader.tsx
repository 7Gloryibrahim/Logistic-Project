import { useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router";

export default function PageLoader() {
  const navigation = useNavigation();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 900); // Keeps the loader visible for at least 900ms on every visit

    return () => clearTimeout(timer);
  }, [location.key]); // Triggers on EVERY navigation, not just pathname changes

  const active = isVisible || navigation.state !== "idle";

  if (!active) {
    return null;
  }

  return (
    <div className="fixed inset-0 z- bg-[#062E39] flex flex-col items-center justify-center transition-opacity duration-300">
      <div className="animate-pulse">
        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-[8px]">
          LOGISTIQ
        </h1>

        <div className="w-full h-[3px] bg-white/20 mt-3 overflow-hidden">
          <div className="h-full w-1/2 bg-[#F75128] animate-[loading_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <p className="text-white/60 text-xs tracking-[5px] uppercase mt-8">
        Moving beyond limits
      </p>
    </div>
  );
}
