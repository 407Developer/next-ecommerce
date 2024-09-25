"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    name && router.push(`/list?name=${name}`);
  };

  return (
    <form
      className="flex items-center gap-4 p-2 bg-slate-200 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="name"
        placeholder="I'm looking for..."
        className="flex-1 bg-transparent outline-none  "
      />
      <button className="cusor-pointer" type="submit">
        <Image src={"/search.png"} width={16} height={16} alt="Search icon" />
      </button>
    </form>
  );
};

export default SearchBar;
