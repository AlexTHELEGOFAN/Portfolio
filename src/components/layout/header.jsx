"use client"; // This is a client component 👈🏽

import Image from "next/image";
import logo from "@/assets/images/Logo_InnoLab.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faMagnifyingGlass, faXmark} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import Link from 'next/link';

import "./header.scss";
import {contentData, navItems} from "@/assets/data/data";
import Fuse from "fuse.js";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleSearchBar = () => {
        setIsSearchOpen(!isSearchOpen);
        setSearchQuery('');
        setSearchResults([]);
    };

    // Fonction pour aplatir `contentData` en un tableau d'éléments
    function flattenContentData(data) {
        const flatArray = [];

        Object.values(data).forEach(item => {
            if (Array.isArray(item)) {
                // Pour chaque élément de type tableau, on ajoute les éléments internes
                item.forEach(subItem => flatArray.push(subItem));
            } else {
                // Ajoute directement les objets non-tableaux
                flatArray.push(item);
            }
        });

        return flatArray;
    }

    // Aplatir les données et filtrer uniquement les éléments recherchables
    const flatContentData = flattenContentData(contentData);
    const searchableContent = flatContentData.filter(item => item.searchable || item.isSearchable);

    // Initialiser Fuse avec le contenu filtré
    const fuse = new Fuse(searchableContent, {
        keys: ["text", "title", "id"],
        threshold: 0.3
    });

    const handleSearchSubmit = async () => {
        if (searchQuery.length >= 2) {
            const searchResults = fuse.search(searchQuery);
            console.log(searchResults)
            setSearchResults(searchResults.map(result => result.item));
        }
    };

    const handleResultClick = () => {
        setSearchQuery('');
        setSearchResults([]);
        setIsSearchOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const highlightText = (text, query) => {
        if (!query) return text;
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map((part, i) =>
            part.toLowerCase() === query.toLowerCase() ? <mark key={i}>{part}</mark> : part
        );
    };

    const getRelevantText = (text, query) => {
        const regex = new RegExp(`(.{0,30})(${query})(.{0,30})`, 'gi');
        const matches = [];
        let match;
        while ((match = regex.exec(text)) !== null) {
            matches.push(match[1] + match[2] + match[3]);
        }
        // Limiter le nombre de caractères affichés pour chaque extrait
        const maxLength = 60;
        const trimmedMatches = matches.map(match => match.length > maxLength ? match.slice(0, maxLength) + '...' : match);
        return trimmedMatches.length > 0 ? trimmedMatches.join('... ') : text.slice(0, maxLength) + '...';
    };
    return (
        <header
            className="flex flex-wrap justify-between self-stretch text-center sticky top-0">
            <div className="container flex justify-between items-center mx-auto">
                <Link href={"/"}>
                    <Image src={logo} alt="" width={178} height={64} className="logo-image"/>
                </Link>

                <div className="flex">
                    {/* Navigation list */}
                    <nav className="nav flex-wrap">
                        <ul className="flex">
                            {navItems.map((item, index) => (
                                <li key={index} className="nav-list relative group self-stretch">
                                    {/* Navigation item */}
                                    <Link href={item.href}
                                          className="nav-link-parent flex items-center">

                                        {item.icon ? (
                                            <span>
                                                <FontAwesomeIcon icon={item.icon} size={item.size}
                                                                 className="list-icon mr-2"/>
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
                    <div className="search-bar flex items-center relative">
                        <div
                            className={`search-bar transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-0'} overflow-hidden`}>
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                value={searchQuery}
                                className="search-input w-full px-3 py-2"
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchSubmit}
                                autoFocus={isSearchOpen} // Focus automatique lors de l'ouverture
                            />
                        </div>
                        <div onClick={toggleSearchBar} className="cursor-pointer ml-3">
                            <FontAwesomeIcon
                                icon={isSearchOpen ? faXmark : faMagnifyingGlass}
                                size="xl"
                                className=""
                            />
                        </div>

                        {/* Affichage des résultats */}
                        {(searchResults.length > 0 && searchQuery.length > 2) && (

                            <div
                                className="search-results absolute w-full max-h-64 overflow-y-auto">
                                {searchResults.map((result) => (
                                    <Link key={result.id} href={result.link}>
                                        <div className="result-item flex items-center" onClick={handleResultClick}>
                                            <h4 className="result-title font-bold text-start">{result.title}</h4>
                                            <p className="result-text text-justify">{highlightText(getRelevantText(result.text, searchQuery), searchQuery)}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Navigation burger */}
                    <div className="nav-menu items-center relative" onClick={toggleMenu}>
                        <FontAwesomeIcon
                            icon={faBars}
                            size="xl"
                            className=""
                        />
                        {isMenuOpen && (
                            <ul className="nav-menu-list absolute w-max text-start">
                                {navItems.map((item, index) => (
                                    <li key={index} className="p-2">
                                        <Link href={item.href} className="block">
                                            {item.label}
                                        </Link>
                                        {item.subMenu && (
                                            <ul className="pl-4">
                                                {item.subMenu.map((subItem, subIndex) => (
                                                    <li key={subIndex} className="py-2">
                                                        <Link href={subItem.href} className="block pt-2">
                                                            {subItem.label}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
