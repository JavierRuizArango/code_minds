"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation';

function App() {
    const routes = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Crear país',
            path: '/pages/create'
        },
        {
            name: 'Gestionar país',
            path: '/pages/manage'
        }
    ];
    const pathname = usePathname();
    return (
        <>
            <div className="sidebar">
                <div className="logo-container">
                    <h3>Logo</h3>
                </div>
                <nav>
                    {routes.map((route, index) => (
                        <Link
                            href={route.path}
                            className={pathname === route.path ? 'active nav-link' : 'nav-link'}
                            key={index}
                        >
                            {route.name}
                        </Link>
                    ))}
                </nav>
            </div>
        </>
    )

}
export default App;