import { useEffect, useState } from "react";
import { useNavigation } from "react-router";

export default function PageLoader() {
  const navigation = useNavigation();
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Show the splash screen briefly on initial page load/refresh
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1500); // Adjust duration in milliseconds (e.g., 1500 = 1.5 seconds)

    return () => clearTimeout(timer);
  }, []);

  const isLoading = initialLoading || navigation.state !== "idle";

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#111827] flex flex-col items-center justify-center">
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
