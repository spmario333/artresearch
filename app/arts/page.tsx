import { Search } from "@/components/ARTS/Search";

import { ArtsCards } from "@/components/ARTS/ArtsCards";

export default function NamePage() {
  return (
    <div className="min-h-full flex flex-col text-black bg-white">
      <Search />
      <ArtsCards />
    </div>
  );
}