import NavbarItem from "./NavBarItem";

export default function Navbar() {
    return (
        <div className='flex dark:bg-gray-800 bg-amber-100 p-4 lg:text-lg justify-center gap-6'>
            <NavbarItem title='Trending' param='fetchTrending' />
            <NavbarItem title='Top Rated' param='fetchTopRated' />
        </div>
    );
}