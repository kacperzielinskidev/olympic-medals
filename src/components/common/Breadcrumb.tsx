import React from "react";

import { Text } from "@mantine/core";
import Link from "next/link";

import { BiHome } from "react-icons/bi";
import { HiChevronDoubleRight } from "react-icons/hi";

type BreadcrumbProps = {
  items: BreadcrumbItemType[];
};

export const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <>
      <div className="hidden items-center md:flex">
        <div className="flex items-center gap-2">
          {items.map(({ label = "", url = "" }, i) => (
            <BreadcrumbItem
              key={`${i}${label}`}
              url={url}
              hasChevron={i != items.length - 1}
            >
              <span className="mr-2 flex items-center text-sm">
                {i === 0 ? <BiHome /> : label}
              </span>
            </BreadcrumbItem>
          ))}
        </div>
      </div>
    </>
  );
};

export type BreadcrumbItemType = {
  label?: string;
  url?: string;
  hasChevron?: boolean;
  children?: React.ReactNode;
};

const BreadcrumbItem = ({ url, hasChevron, children }: BreadcrumbItemType) => {
  return (
    <li className="inline-flex items-center text-xs text-gray-500">
      <div className="flex items-center">
        {url && hasChevron && (
          <Link href={url} legacyBehavior>
            <a>{children}</a>
          </Link>
        )}

        {url && !hasChevron && <Text size={"sm"}>{children}</Text>}

        {!url && <Text size={"sm"}>{children}</Text>}

        {hasChevron && (
          <Text size={"sm"}>
            <HiChevronDoubleRight />
          </Text>
        )}
      </div>
    </li>
  );
};
