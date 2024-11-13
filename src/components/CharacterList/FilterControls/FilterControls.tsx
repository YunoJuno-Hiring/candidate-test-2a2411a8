import React from "react";
import styles from "./FilterControls.module.scss";

interface FilterControlsProps {
    onCategoryChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onOrderChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const FilterControls = ({ onCategoryChange, onOrderChange }: FilterControlsProps) => {
    return (
        <div className={styles.filterControlsContainer}>
            <div className={styles.filterControls}>
                <div className={styles.filterGroup}>
                    <label>Category</label>
                    <select onChange={onCategoryChange}>
                        <option value="all">All</option>
                        <option value="animal">Animal</option>
                        <option value="corrupted hobbit">Corrupted Hobbit</option>
                        <option value="dark lord">Dark Lord</option>
                        <option value="dwarf">Dwarf</option>
                        <option value="elf">Elf</option>
                        <option value="ent">Ent</option>
                        <option value="hobbit">Hobbit</option>
                        <option value="human">Human</option>
                        <option value="spirit">Spirit</option>
                        <option value="wizard">Wizard</option>
                    </select>
                </div>

                <div className={styles.filterGroup}>
                    <label>Order by</label>
                    <select onChange={onOrderChange}>
                        <option value="nameAscending">Name (ascending)</option>
                        <option value="nameDescending">Name (descending)</option>
                        <option value="significanceDescending">Significance (highest)</option>
                        <option value="significanceAscending">Significance (lowest)</option>
                    </select>
                </div>
            </div>
        </div>
    );
};
