import Link from "next/link";

export const Header = () => {
  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-20 w-full border-b border-slate-200 bg-white px-6 py-3">
        <nav className="mx-auto flex w-full items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href={`/`} passHref legacyBehavior>
              <a className="text-3xl font-semibold text-primary">
                Olympic Medals
              </a>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  );
};
