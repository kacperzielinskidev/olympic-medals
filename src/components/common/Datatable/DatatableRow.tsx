import { createStyles } from "@mantine/core";
import type { DatatableHeaderType } from "./Datatable";

const useStyles = createStyles((theme) => ({
  datatableRow: {
    // borderRadius: '100%',
    borderBottomWidth: "1px",
    borderBottomColor:
      theme.colorScheme === "light"
        ? theme.colors.gray[3]
        : theme.colors.dark[5],

    // '&:nth-of-type(even)': {
    //   backgroundColor:
    //     theme.colorScheme === 'light'
    //       ? theme.colors.gray[0]
    //       : theme.colors.dark[5],
    // },
  },
}));

type DatatableRowProps = {
  children: React.ReactNode[] | React.ReactNode;
  headers: DatatableHeaderType[];
  exclude?: string[];
};

export const DatatableRow: React.FC<DatatableRowProps> = ({
  children,
  headers,
}) => {
  const { classes, cx } = useStyles();

  return (
    <tr className={`flex flex-wrap p-2 lg:table-row ${classes.datatableRow}`}>
      {Array.isArray(children) ? (
        children.map((child, i) => (
          <td
            className={cx(
              `block p-2 first:rounded-lg last:rounded-lg lg:table-cell`
            )}
            style={{
              border: "1px solid #eceeef",
              textAlign: "center",
            }}
            key={i}
          >
            <button className="flex items-center gap-1 lg:hidden">
              {headers[i]?.label}
            </button>
            {child}
          </td>
        ))
      ) : (
        <td className="p-2 first:rounded-lg last:rounded-lg">{children}</td>
      )}
    </tr>
  );
};
