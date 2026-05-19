
import { NekoCards } from "@/components/Neko/NekoCards";
import { NSearch } from "@/components/Neko/NSearch";

export default function NamePage() {
  return (
    <div className="min-h-full flex flex-col text-black bg-white">
      <NSearch />
      <NekoCards/>
    </div>
  );
}