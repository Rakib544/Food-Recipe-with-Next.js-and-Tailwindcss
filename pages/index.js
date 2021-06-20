import NavBar from "../components/NavBar";
import Link from 'next/link';
import Image from 'next/image';
import LatestRecipes from "../components/LatestRecipes";
import PopularRecipes from "../components/PopularRecipes";

export default function Home() {
  return (
    <div className="text-gray-600 font-body bg-gray-100">
      <NavBar />
      <main className="px-16 py-6">

        <div className="flex justify-center md:justify-end">
          <Link href="/">
            <a className="text-primary">Login</a>
          </Link>
          <Link href="/">
            <a className="text-primary ml-2">Sign up</a>
          </Link>
        </div>

        <header>
          <h2 className="text-gray-700 text-6xl font-semibold">Recipes</h2>
          <p className="text-2xl font-semibold">For Foodies</p>
        </header>

        <div>
          <LatestRecipes />
          <PopularRecipes />
        </div>

        <div className="flex justify-center">
          <button className="bg-secondary-100 text-secondary-200">
            Load More
          </button>
        </div>
      </main>
    </div >
  )
}
