"use client"

import { useState, useEffect } from "react";
import { Search } from 'lucide-react';

interface Song {
    name: string;
    category?: string;
    musicLink?: string;
    lyricsLink?: string;
}

export default function SongSearch() {
    const [songs, setSongs] = useState<Song[]>([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState<boolean>(true);

    const apiKey = process.env.NEXT_PUBLIC_APIIDGOOGLE;
    const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEETID

    // Url completa para a requisição
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Louvores!A:D?key= ${apiKey}`;

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    console.error("Erro na requisição. Verifique mais tarde ou entre.")
                }
                const data = await response.json();
                // Organização das 4 colunas
                if (data.values) {
                    const formattedSongs = data.values.slice(1).map((row: string[]) => ({
                        name: row[0] || "",
                        category: row[1] || "",
                        musicLink: row[2] || "",
                        lyricsLink: row[3] || "",
                    }));
                    setSongs(formattedSongs);
                    setLoading(false);
                }
            } catch (error) {
                console.error("Algum erro no servidor: ", error)
            }
        }
        fetchData();
    }, []);

    // Filtragem e organização das músicas
    const filteredSongs = songs
        .filter(song =>
            song.name.toLowerCase().includes(search.toLowerCase()) ||
            song.category?.toLowerCase().includes(search.toLowerCase())
        )
        .sort((a, b) => a.name.localeCompare(b.name));

    // Tela de Loading
    if (loading) {
        return (
            <div className="bg-white h-screen content-center">
                <p className="text-center text-gray-600">Carregando músicas...</p>
            </div>
        );
    }

    // Caso haja algum erro
    if (!songs) {
        return (
            <div className="bg-white h-screen content-center">
                <p className="text-center text-gray-600">Erro ao carregar as músicas. Tente mais tarde ou entre em contato com o suporte.</p>;
            </div>
        );
    }

    return (
        <div className="p-6 bg-white text-black min-h-screen">
            <div className="p-6 bg-white text-black">
                {/* Início */}
                <h1 className="text-6xl font-bold text-center">Louvores IPBetsaida</h1>
                {/* Search bar */}
                <div className="flex gap-2 items-center relative">
                    <Search color="#00A63E" className="absolute left-2" size={32} />
                    <input
                        type="text"
                        placeholder="Buscar música ou categoria..."
                        className="w-full p-2 pl-12 border-2 border-green-600 rounded-2xl mb-4 mt-4"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </div>
            {/* Tabela de louvores */}
            <div className="overflow-x-auto relative">
                <table className="w-full text-sm">
                    <thead className="bg-green-600 text-white sticky top-0 z-10">
                        <tr className="text-left">
                            <th className="p-3">Nome</th>
                            <th className="p-3">Categoria</th>
                            <th className="p-3">Música</th>
                            <th className="p-3">Letra</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredSongs.map((song, index) => (
                            <tr
                                key={index}
                                className={`${index % 2 === 0 ? 'bg-green-100' : 'bg-white'}`}
                            >
                                {/* Nome */}
                                <td className="p-3">{song.name}</td>
                                {/* Categoria */}
                                <td className="p-3 flex flex-wrap gap-2">
                                    {song.category ? (
                                        song.category?.split(',').map((category, idx) => (
                                            <span key={idx} className="bg-green-200 text-black px-3 py-1 rounded-full text-xs">
                                                {category.trim()}
                                            </span>
                                        ))
                                    ) : "—"}
                                </td>
                                {/* Link das músicas */}
                                <td className="p-3">
                                    {song.musicLink ? (
                                        <a href={song.musicLink} className="text-green-500 underline" target="_blank" rel="noopener noreferrer">
                                            Ouvir
                                        </a>
                                    ) : "—"}
                                </td>
                                {/* Letra */}
                                <td className="p-3">
                                    {song.lyricsLink ? (
                                        <a href={song.lyricsLink} className="text-green-500 underline" target="_blank" rel="noopener noreferrer">
                                            Ver Letra
                                        </a>
                                    ) : "—"}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
