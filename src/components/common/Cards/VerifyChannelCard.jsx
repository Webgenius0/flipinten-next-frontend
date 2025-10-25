import PlayCircle from "@/components/svg/PlayCircle";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const VerifyChannelCard = () => {
  return (
    <div className="hover:scale-105 transition-transform duration-300 ease-in-out max-w-[645px] p-8 flex flex-col items-center gap-8 rounded-[12px] shadow-[0_0_30px_0_rgba(0,0,0,0.08)]">
      <PlayCircle />
      <div className="text-center space-y-2">
        <h2 className="text-black font-semibold text-2xl">
          No Channel connected yet
        </h2>
        <p className="text-neutral200 font-medium text-lg">
          Connect your YouTube channel to unlock campaign offers and start
          earning from brand partnerships.{" "}
        </p>
      </div>
      <Button className={"w-full !py-7 rounded-[12px]"}>
        <Globe />
        Connect with YouTube
      </Button>
      <p className="tex-xs text-neutral200">
        Connecting only verifies your stats. We'll never post on your behalf.
      </p>
    </div>
  );
};

export default VerifyChannelCard;
