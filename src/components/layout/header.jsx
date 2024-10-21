"use client"; // This is a client component 👈🏽

import Image from "next/image";
import logo from "@/assets/images/Logo_InnoLab.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Link from 'next/link';

import "./header.scss";

export default function Header() {

    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const navItems = [
        {label: "Qui sommes-nous ?", href: "/qui-sommes-nous"},
        {label: "Que faisons-nous ?", href: "/que-faisons-nous"},
        {
            label: "Nos projets",
            icon: faAngleDown,
            size: "lg",
            href: "/nos-projets",
            subMenu: [
                {label: 'Intelligence Artificielle', href: '/nos-projets'},
                {label: 'Jumeau Numérique organisationnel', href: '/nos-projets'},
                {label: 'Réalité Immersive', href: '/nos-projets'}
            ]
        },
        {label: "Contactez nous", href: "/contact"}
    ];

    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);  // On bascule l'état ouvert/fermé
        setSearchQuery('');  // Réinitialise la recherche à chaque fois
    };

    const handleSearchSubmit = (e) => {
        if (e.key === 'Enter') {
            console.log('Recherche:', searchQuery);
        }
    };

    return (
        <header
            className="flex flex-wrap justify-between self-stretch text-center sticky">
            <div className="container flex justify-between items-center mx-auto">
                <Link href={"/"}>
                    <Image src={logo} alt="" width={178} height={64} className="logo-image flex-shrink"/>
                </Link>

                <div className="flex">
                    {/* Navigation list */}
                    <nav className="navigation flex flex-wrap">
                        <ul className="flex">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-list relative group self-stretch">
                                    {/* Navigation item */}
                                    <Link href={item.href}
                                          className="nav-link-parent flex items-center">

                                        {item.icon ? (
                                            <span>
                                                <FontAwesomeIcon icon={item.icon} size={item.size}
                                                                 className="list-icon"/>
                                                <span>{item.label}</span>
                                            </span>
                                        ) : (
                                            <span>{item.label}</span>
                                        )}
                                    </Link>

                                    {/* Navigation sub item */}
                                    {item.subMenu && (
                                        <ul className="nav-list-item hidden group-hover:flex flex-col items-start absolute w-max">
                                            {item.subMenu.map((subItem, subIndex) => (
                                                <li key={subIndex} className="flex w-full">
                                                    <Link href={subItem.href} className="sub-menu-item flex w-full">
                                                        {subItem.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/*Search bar*/}
                    <div className="search-bar flex items-center">
                        <div
                            className={`search-bar transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                value={searchQuery}
                                className="search-input w-full px-3 py-2"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchSubmit}
                                autoFocus={isSearchOpen} // focus automatique lors de l'ouverture
                            />
                        </div>
                        <div onClick={toggleSearchBar} className="cursor-pointer ml-3">
                            <FontAwesomeIcon
                                icon={isSearchOpen ? faXmark : faMagnifyingGlass}
                                size="xl"
                                className=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
