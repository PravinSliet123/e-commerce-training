const partners = [
  {
    name: "VERSACE",
    className: "font-serif text-[38px] tracking-[-2px]",
  },
  {
    name: "ZARA",
    className: "font-serif text-[38px] font-medium tracking-[-4px]",
  },
  {
    name: "GUCCI",
    className: "font-serif text-[38px] tracking-[-2px]",
  },
  {
    name: "PRADA",
    className: "font-serif text-[38px] font-bold tracking-[-2px]",
  },
  {
    name: "Calvin Klein",
    className: "text-[38px] font-light tracking-[-2px]",
  },
];

const Partners = () => {
  return (
    <section className="bg-black py-8">
      <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-8 px-6 lg:px-0">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className={`text-white ${partner.className}`}
          >
            {partner.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;