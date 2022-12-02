import Link from "next/link";

interface TabItemProps {
  children?: React.ReactNode;
  isSelected?: boolean;
  href: string;
}
export const TabItem = ({
  children,
  href,
  isSelected = false,
}: TabItemProps) => (
  <Link href={href}>
    <div
      className={`p-2 rounded-md text-slate-600 hover:bg-sky-200 hover:text-sky-600 cursor-pointer transition flex gap-2 ${
        isSelected && "bg-indigo-300 text-white shadow-md"
      }`}
    >
      {children}
    </div>
  </Link>
);
