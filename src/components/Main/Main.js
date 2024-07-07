import ImageDisplay from "@components/ImageDisplay/ImageDisplay";

export default function Main() {
  return (
    <div className="flex flex-col items-center justify-center bg-pink-100 py-10">
      <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
        Rompevientos
      </h1>
      <ImageDisplay
        src="/1.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <ImageDisplay
        src="/2.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <ImageDisplay
        src="/3.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <ImageDisplay
        src="/4.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className="mb-6 mt-10 text-center text-3xl font-bold text-gray-800">
        Rompevientos cola de pato
      </h1>
      <ImageDisplay
        src="/12.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className="mb-6 mt-10 text-center text-3xl font-bold text-gray-800">
        Cuellero/tapabocas (dos piezas)
      </h1>
      <ImageDisplay
        src="/7.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className="mb-6 mt-10 text-center text-3xl font-bold text-gray-800">
        Balaclava (una pieza)
      </h1>
      <ImageDisplay
        src="/8.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className="mb-6 mt-10 text-center text-3xl font-bold text-gray-800">
        Supernylon sencilla
      </h1>
      <ImageDisplay
        src="/9.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className="mb-6 mt-10 text-center text-3xl font-bold text-gray-800">
        Supernylon forrada
      </h1>
      <ImageDisplay
        src="/5.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <ImageDisplay
        src="/6.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className="mb-6 mt-10 text-center text-3xl font-bold text-gray-800">
        Antifluido forrada en malla
      </h1>
      <ImageDisplay
        src="/10.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
      <h1 className="mb-6 mt-10 text-center text-3xl font-bold text-gray-800">
        Chaleco en drill (dotación)
      </h1>
      <ImageDisplay
        src="/11.jpg"
        alt="Description of the image"
        width={500}
        height={300}
      />
    </div>
  );
}
