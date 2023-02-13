import Link from "next/link";
import { useRouter } from "next/router";
import type { IconType } from "react-icons";
import { BiMedal } from "react-icons/bi";

export const Sidebar = () => {
  return (
    <div className="fixed left-0 bottom-0 top-[61px] flex w-[240px] flex-col border-r border-slate-200 bg-white shadow-lg">
      <div className="pt-2">
        <SidebarLink
          href={"/olympic-medals"}
          label="Olympic medals"
          icon={BiMedal}
        />
      </div>
    </div>
  );
};

export type ISidebarLink = {
  href: string;
  icon: IconType;
  label: string;
};

const SidebarLink = ({ label, href, icon: Icon }: ISidebarLink) => {
  const router = useRouter();
  const routerPathname = router.pathname?.split("/")?.[2];
  const currentPage = href?.split("/")?.[2];

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`flex items-center gap-4 border-y border-transparent py-3 pl-6 pr-2 text-lg text-gray-700 transition-all first:border-t-0  hover:pl-8 ${
          currentPage && routerPathname && currentPage === routerPathname
            ? "bg-gray-200"
            : "hover:border-gray-200 hover:bg-gray-100"
        }`}
      >
        <div className="text-xl">
          <Icon />
        </div>
        <span className="text-base">{label}</span>
      </a>
    </Link>
  );
};

export type ISidebarSection = {
  label: string;
  children: React.ReactNode;
};
