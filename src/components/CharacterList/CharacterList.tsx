import React, { useState, useEffect } from "react";
import { FilterControls } from "./FilterControls/FilterControls";
import { CharacterCard } from "./CharacterCard/CharacterCard";
import styles from "./CharacterList.module.scss";

interface Character {
    name: string;
    category: string;
    description: string;
    significanceIndex: number;
    avatar: string;
}

export const filterAndSortCharacters = (
    characters: Character[],
    category: string,
    orderBy: string
) => {
    return characters
        .filter((char) => category === "all" || char.category === category)
        .sort((a, b) => {
            if (orderBy === "nameAscending") {
                return a.name.localeCompare(b.name);
            }
            if (orderBy === "nameDescending") {
                return b.name.localeCompare(a.name);
            }
            if (orderBy === "significanceDescending") {
                return a.significanceIndex - b.significanceIndex;
            }
            if (orderBy === "significanceAscending") {
                return b.significanceIndex - a.significanceIndex;
            }
            return 0;
        });
};

export const CharacterList = () => {
    const [category, setCategory] = useState("all");
    const [orderBy, setOrderBy] = useState("nameAscending");
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch("/characters.json");
                if (!response.ok) {
                    throw new Error("Failed to fetch characters");
                }
                const data = await response.json();
                setCharacters(data);
            } catch (err) {
                setError(err instanceof Error ? err.message : "An error occurred");
            } finally {
                setIsLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    const filteredCharacters = filterAndSortCharacters(characters, category, orderBy);

    if (isLoading) return <div>Loading characters...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className={styles.characterList}>
            <FilterControls
                onCategoryChange={(e) => setCategory(e.target.value)}
                onOrderChange={(e) => setOrderBy(e.target.value)}
            />

            {filteredCharacters.map((character) => (
                <CharacterCard
                    key={character.significanceIndex}
                    name={character.name}
                    title={character.category}
                    description={character.description}
                    avatarUrl={`/characters/${character.avatar}`}
                />
            ))}
        </div>
    );
};
