import { useEffect, useState } from "react";
import type { Datum } from "../types/GIFFields";
import { getGIFs } from "../helpers/getGIFs";

export const useFetchGifs = (category: string) => {
    const [images, setImages] = useState<Datum[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGIFs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages();
    }, []);

    return {
        images,
        isLoading,
    }

}