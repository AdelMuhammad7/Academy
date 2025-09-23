import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative pt-8 pb-8 flex flex-col items-center justify-center text-center shadow-inner rounded-t-3xl"
      style={{
        backgroundImage: "url('/imgs/footer.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* محتوى الفوتر فوق الـ overlay */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-right">
        {/* Logo */}
        <div className="text-secondary gap-8">
          <div className="flex items-center gap-2 mb-4">
            <Image
              src="/imgs/logo.jpeg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full border border-blue-100"
            />
            <span className="font-bold text-lg">Wonder Academy</span>
          </div>
          <p className="font-medium leading-relaxed">
            تعلم، طور، وابدأ رحلتك نحو التميز معنا.
          </p>
        </div>

        {/* Contact Info */}
        <div className="text-secondary float-left mr-20">
          <h3 className=" font-semibold mb-4 border-b border-blue-100 pb-2 w-max">
            معلومات الاتصال
          </h3>
          <div>
            <p className="flex items-center space-x-2 rtl:space-x-reverse">📍 مصر</p>
            <p className="flex items-center space-x-2 rtl:space-x-reverse">📞 +20 123 456 7890</p>
            <p className="flex items-center space-x-2 rtl:space-x-reverse">✉️ WonderAcademy@Academy.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-primary  drop-shadow-[0_0_6px_white] relative z-10 mt-12 border-t border-blue-100 pt-6 text-center text-sm font-medium">
        © 2025 Wonder Academy. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
};

export default Footer;
