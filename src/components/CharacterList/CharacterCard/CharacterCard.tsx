import React from "react";
import styles from "./CharacterCard.module.scss";

interface CharacterCardProps {
    name: string;
    title: string;
    description: string;
    avatarUrl: string;
}

export const CharacterCard = ({ name, title, description, avatarUrl }: CharacterCardProps) => {
    return (
        <div data-testid="character-card" className={styles.characterCard}>
            <div className={styles.characterAvatarContainer}>
                <img src={avatarUrl} alt={name} className={styles.characterAvatar} />
            </div>
            <div className={styles.characterInfoContainer}>
                <div className={styles.characterHeader}>
                    <div className={styles.characterName}>
                        <h2>{name}</h2>
                        <p className={styles.characterCategory}>
                            {title.charAt(0).toUpperCase() + title.slice(1)}
                        </p>
                    </div>
                </div>
                <p className={styles.characterDescription}>{description}</p>
            </div>
        </div>
    );
};
