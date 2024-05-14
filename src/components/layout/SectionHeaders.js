export default function SectionHeaders({subHeader,mainHeader}) {
  return (
    <>
      <h3 className="uppercase text-gray-500 font-semibold leading-4">
        {subHeader}
      </h3>
      <h2 className="text-[#fac031] font-bold text-4xl italic leading-6 mt-4 mb-6">
        {mainHeader}
      </h2>
    </>
  );
}