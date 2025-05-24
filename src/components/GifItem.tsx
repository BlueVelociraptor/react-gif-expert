import type { Datum, Images } from "../types/GIFFields"

type GiftItemProps = {
    title: Datum['title'];
    images: Images;
}

export const GifItem = ({title, images}: GiftItemProps) => {
    return (
        <div className="card">
            <img src={images.downsized_medium.url} alt={title} />
            <p>{ title }</p>
        </div>
    )
}
