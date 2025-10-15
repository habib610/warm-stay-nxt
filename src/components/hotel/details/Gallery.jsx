import Image from "next/image";

const Gallery = ({ gallery }) => {
    let images = gallery.slice(1);
    return (
        <section className="container">
            <div className="grid grid-cols-2 imageshowCase">
                <Image
                    src={gallery[0]}
                    alt="hotel_image"
                    width={400}
                    height={400}
                />

                <div className="grid grid-cols-2 grid-rows-2 h-[400px]">
                    {images.map((item, index) => (
                        <Image
                            key={index}
                            src={item}
                            alt="hotel_image"
                            width={200}
                            height={170}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
