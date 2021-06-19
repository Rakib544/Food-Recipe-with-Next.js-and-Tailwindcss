import Link from 'next/link';
const NavBar = () => {
    return (
        <nav>
            <div>
                <h1>
                    <Link href="/">
                        <a>Food App</a>
                    </Link>
                </h1>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <span>About</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        <a>
                            <span>Contact</span>
                        </a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;