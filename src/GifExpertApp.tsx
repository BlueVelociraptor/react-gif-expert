import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState<string[]>([]);

    const onAddCategory = (newCategory: string) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExperApp</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {categories.length > 0 && (
                <ol>
                    {
                        categories.map(category => (
                            <GifGrid
                                key={category}
                                category={category}
                            />
                        ))
                    }
                </ol>
            )}
        </>
    )
}
