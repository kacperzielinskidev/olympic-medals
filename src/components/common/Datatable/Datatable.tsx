import { createStyles } from "@mantine/core";
import { BiChevronDown } from "react-icons/bi";
import classNames from "classnames";

const useStyles = createStyles((theme) => ({
  thead: {
    borderColor:
      theme.colorScheme === "light"
        ? theme.colors.gray[2]
        : theme.colors.dark[5],
  },
}));

export type DatatableHeaderType = {
  id: string;
  label: React.ReactNode;
  colSize: number;
  isSortable?: boolean;
  mobileHidden?: boolean;
  mobileGrow?: boolean;
};

type DatatableProps = {
  children: React.ReactNode;
  headers: DatatableHeaderType[];
  exclude?: string[];
};

export const Datatable: React.FC<DatatableProps> = ({
  children,
  exclude = [],
  headers,
}) => {
  const width = headers.reduce((acc, { colSize }) => acc + colSize, 0);
  const { classes, cx } = useStyles();

  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full max-w-full border-collapse rounded-xl border border-[#eceeef]">
        <thead
          className={`border-grayLightColor hidden border-b text-center lg:table-header-group ${classes.thead} `}
        >
          <tr>
            {headers.map(({ id, label, colSize, isSortable }) => (
              <th
                className={classNames(
                  "border border-[#eceeef] bg-[#f7f8f9] p-2 text-[13px] font-normal text-gray-700",
                  {
                    hidden: exclude.includes(id),
                  }
                )}
                key={id}
                style={{
                  width: `${Math.round((colSize / width) * 10000) / 100}%`,
                }}
              >
                <button
                  disabled={!isSortable}
                  className={cx({ "cursor-pointer": isSortable })}
                >
                  {label}
                  <div
                    className={cx({
                      hidden: !isSortable,
                    })}
                  >
                    <BiChevronDown />
                  </div>
                </button>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm">{children}</tbody>
      </table>
    </div>
  );
};
