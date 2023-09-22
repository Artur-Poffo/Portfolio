import { AiOutlineSearch } from "react-icons/ai";

export function SearchBar() {
  return (
    <div className="w-full flex flex-col md:flex-row items-center gap-2" >
      <input className="flex-1 py-3 px-5 outline-none bg-zinc-800 rounded-md border border-brand-gray-400 transition-all focus:border-brand-blue-100" type="text" placeholder="Nome do post..." />
      <button className="w-full md:w-auto p-3 flex items-start justify-center bg-brand-blue-100 rounded-md transition-colors hover:bg-brand-blue-200" >
        <AiOutlineSearch size={25} />
      </button>
    </div>
  )
}