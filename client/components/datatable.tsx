import * as React from 'react';
import { DataTable as RNPDataTable } from 'react-native-paper';
import { currencyFormatter } from '../utils/currency';

export interface DataTableProps {
  items: any[];
}

export default function DataTable({ items }: DataTableProps) {
  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([5, 10, 15]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <RNPDataTable>
      <RNPDataTable.Header>
        <RNPDataTable.Title>Date</RNPDataTable.Title>
        <RNPDataTable.Title numeric>Total</RNPDataTable.Title>
        <RNPDataTable.Title numeric>Items</RNPDataTable.Title>
      </RNPDataTable.Header>

      {items.slice(from, to).map((item) => (
        <RNPDataTable.Row key={item.id}>
          <RNPDataTable.Cell>{item.created_on}</RNPDataTable.Cell>
          <RNPDataTable.Cell>
            {currencyFormatter.format(
              item.cart.reduce((total: any, { price }: any) => total + price, 0)
            )}
          </RNPDataTable.Cell>
          <RNPDataTable.Cell>
            {item.cart.map(({ dish }: any) => dish).join(', ')}
          </RNPDataTable.Cell>
        </RNPDataTable.Row>
      ))}

      <RNPDataTable.Pagination
        page={page}
        numberOfPages={Math.ceil(items.length / itemsPerPage)}
        onPageChange={(page) => setPage(page)}
        label={`${from + 1}-${to} of ${items.length}`}
        numberOfItemsPerPageList={numberOfItemsPerPageList}
        numberOfItemsPerPage={itemsPerPage}
        onItemsPerPageChange={onItemsPerPageChange}
        showFastPaginationControls
        selectPageDropdownLabel={'Rows per page'}
      />
    </RNPDataTable>
  );
}
