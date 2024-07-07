import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const handleClick = () => {
    const whatsappUrl = `https://wa.me/573232387723`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:py-8">
        <div className="flex flex-col items-center justify-center">
          <span className="mb-2">¡Ponte en contacto!</span>
          <button onClick={handleClick}>
            <Image src="/whatsapp.png" alt="WhatsApp" width={50} height={50} />
          </button>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
        <span className="flex items-center justify-center text-sm text-gray-500 sm:text-center">
          ❮❯ by{" "}
          <Link
            href="https://github.com/pacuellarp"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-1 transition-colors duration-300 hover:text-blue-700"
          >
            pacuellarp
          </Link>{" "}
          {new Date().getFullYear()}
        </span>
      </div>
    </footer>
  );
}
