import "@testing-library/jest-dom";
import { filterAndSortCharacters } from "../../components/CharacterList/CharacterList";
import characters from "../../../public/characters.json";

describe("filterAndSortCharacters", () => {
    it("filters by 'hobbit' category correctly", () => {
        const filtered = filterAndSortCharacters(characters, "hobbit", "nameAscending");
        expect(filtered).toHaveLength(5);
        expect(filtered.map((c) => c.name)).toContain("Frodo Baggins");
    });

    it("sorts by name ascending correctly", () => {
        const sorted = filterAndSortCharacters(characters, "all", "nameAscending");
        expect(sorted[0].name).toBe("Aragorn");
        expect(sorted[sorted.length - 1].name).toBe("Treebeard");
    });

    it("sorts by name descending correctly", () => {
        const sorted = filterAndSortCharacters(characters, "all", "nameDescending");
        expect(sorted[0].name).toBe("Treebeard");
        expect(sorted[sorted.length - 1].name).toBe("Aragorn");
    });

    it("sorts by significance descending correctly", () => {
        const sorted = filterAndSortCharacters(characters, "all", "significanceDescending");
        expect(sorted[0].name).toBe("Frodo Baggins");
        expect(sorted[sorted.length - 1].name).toBe("Barliman Butterbur");
    });

    it("Sorts by significance ascending correctly", () => {
        const sorted = filterAndSortCharacters(characters, "human", "significanceAscending");
        expect(sorted[0].name).toBe("Barliman Butterbur");
        expect(sorted[sorted.length - 1].name).toBe("Aragorn");
    });
});
