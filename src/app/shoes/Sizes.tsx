import Checkbox from "@/components/ui/CheckBox";
import Link from "next/link";

const sizes = ["6", "7", "8", "8.5", "9", "9.5", "10", "11", "12"];

export default function Sizes({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const size = searchParams?.size as string | undefined;
  const selectedSizes = size ? size.split(",") : [];

  const generateUrlWithNewSize = (size: string) => {
    const isSelected = selectedSizes.includes(size);
    const newSelectedSizes = isSelected
      ? selectedSizes.filter((s) => s !== size)
      : [...selectedSizes, size];

    const params = new URLSearchParams(searchParams as Record<string, string>);
    if (newSelectedSizes.length > 0) {
      params.set("size", newSelectedSizes.join(","));
    } else {
      params.delete("size");
    }
    return `?${params.toString()}`;
  };

  return (
    <div>
      <h6 className='mb-1'>Size</h6>
      <p className='text-sm'>US</p>
      <div className='grid grid-cols-3 ml-2 mb-2'>
        {sizes.map((size) => (
          <Link
            href={generateUrlWithNewSize(size)}
            key={size}
            className='col-span-1 w-fit'
          >
            <p className='text-center text-xs text-slate-500'>{size}</p>
            <Checkbox isChecked={selectedSizes.includes(size)} fill={true} />
          </Link>
        ))}
      </div>
    </div>
  );
}
