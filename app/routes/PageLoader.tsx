import { useNavigation } from "react-router";

export default function PageLoader() {
  const navigation = useNavigation();

  if (navigation.state === "idle") {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] bg-[#111827] flex flex-col items-center justify-center">

      {/* LOGISTIQ BRAND */}
      <div className="animate-pulse">

        <h1 className="text-white text-4xl md:text-5xl font-bold tracking-[8px]">
          LOGISTIQ
        </h1>

        <div className="w-full h-[3px] bg-white/20 mt-3 overflow-hidden">

          <div className="h-full w-1/2 bg-[#F75128] animate-[loading_1.5s_ease-in-out_infinite]">
          </div>

        </div>

      </div>

      {/* LOADING TEXT */}
      <p className="text-white/60 text-xs tracking-[5px] uppercase mt-8">
        Moving beyond limits
      </p>

    </div>
  );
}