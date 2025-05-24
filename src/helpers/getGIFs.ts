import type { GifGridProps } from "../components/GifGrid";
import type { GIFFields } from "../types/GIFFields";

export const getGIFs = async (category: GifGridProps['category']) => {
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=piMXoLrMRnTYByCyZ835TlWDgpVwaNty&q=${category}&limit=10`;
    const resp = await fetch(URL);
    const { data }: GIFFields = await resp.json();
    return data;
}