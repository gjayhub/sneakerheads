import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonCard() {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-[135px] bg-gray-200  rounded-xl' />
      <div className='space-y-2'>
        <Skeleton className='h-4 w-[250px] bg-gray-200 rounded-[5px]' />
        <Skeleton className='h-4 w-[80px] bg-gray-200 rounded-[5px]' />
      </div>
    </div>
  );
}
