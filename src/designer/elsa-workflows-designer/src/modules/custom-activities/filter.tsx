import { FunctionalComponent, h } from '@stencil/core';
import { BulkActionsIcon, OrderByIcon, PageSizeIcon } from '../../components/icons/tooling';
import { DropdownButtonItem, DropdownButtonOrigin } from '../../components/shared/dropdown-button/models';
import {ActivityDefinitionsOrderBy} from "./models";

export interface PageSizeFilterProps {
  selectedPageSize: number;
  onChange: (pageSize: number) => void;
}

export interface OrderByFilterProps {
  selectedOrderBy?: ActivityDefinitionsOrderBy;
  onChange: (orderBy: ActivityDefinitionsOrderBy) => void;
}

export interface LabelFilterProps {
  selectedLabels?: Array<string>;
  onSelectedLabelsChanged: (e: CustomEvent<Array<string>>) => void;
  buttonClass?: string;
  containerClass?: string;
}

export interface FilterProps extends BulkActionsProps {
  pageSizeFilter: PageSizeFilterProps;
  orderByFilter: OrderByFilterProps;
  labelFilter: LabelFilterProps;
}

export interface BulkActionsProps {
  onBulkDelete: () => void;
  onBulkPublish: () => void;
  onBulkUnpublish: () => void;
}

export const Filter: FunctionalComponent<FilterProps> = ({ pageSizeFilter, orderByFilter, onBulkDelete, onBulkPublish, onBulkUnpublish, labelFilter }) => {
  return (
    <div class="p-8 flex content-end justify-right bg-white space-x-4">
      <div class="flex-shrink-0">
        <BulkActions onBulkDelete={onBulkDelete} onBulkPublish={onBulkPublish} onBulkUnpublish={onBulkUnpublish} />
      </div>
      <div class="flex-1">&nbsp;</div>

      <elsa-label-picker {...labelFilter} />

      <PageSizeFilter {...pageSizeFilter} />

      <OrderByFilter {...orderByFilter} />
    </div>
  );
};

const BulkActions: FunctionalComponent<BulkActionsProps> = ({ onBulkDelete, onBulkPublish, onBulkUnpublish }) => {
  const bulkActions = [
    {
      text: 'Delete',
      name: 'Delete',
    },
    {
      text: 'Publish',
      name: 'Publish',
    },
    {
      text: 'Unpublish',
      name: 'Unpublish',
    },
  ];

  const onBulkActionSelected = (e: CustomEvent<DropdownButtonItem>) => {
    const action = e.detail;
    switch (action.name) {
      case 'Delete':
        onBulkDelete();
        break;
      case 'Publish':
        onBulkPublish();
        break;
      case 'Unpublish':
        onBulkUnpublish();
        break;

      default:
        action.handler();
    }
  };

  return <elsa-dropdown-button text="Bulk Actions" items={bulkActions} icon={<BulkActionsIcon />} origin={DropdownButtonOrigin.TopLeft} onItemSelected={onBulkActionSelected} />;
};

const PageSizeFilter: FunctionalComponent<PageSizeFilterProps> = ({ selectedPageSize, onChange }) => {
  const selectedPageSizeText = `Page size: ${selectedPageSize}`;
  const pageSizes: Array<number> = [5, 10, 15, 20, 30, 50, 100];

  const items: Array<DropdownButtonItem> = pageSizes.map(x => {
    const text = '' + x;
    return { text: text, isSelected: x == selectedPageSize, value: x };
  });

  const onPageSizeChanged = (e: CustomEvent<DropdownButtonItem>) => onChange(parseInt(e.detail.value));

  return <elsa-dropdown-button text={selectedPageSizeText} items={items} icon={<PageSizeIcon />} origin={DropdownButtonOrigin.TopRight} onItemSelected={onPageSizeChanged} />;
};

const OrderByFilter: FunctionalComponent<OrderByFilterProps> = ({ selectedOrderBy, onChange }) => {
  const selectedOrderByText = !!selectedOrderBy ? `Ordered by: ${selectedOrderBy}` : 'Order by';
  const orderByValues: Array<ActivityDefinitionsOrderBy> = [ActivityDefinitionsOrderBy.Name, ActivityDefinitionsOrderBy.CreatedAt];
  const items: Array<DropdownButtonItem> = orderByValues.map(x => ({ text: x, value: x, isSelected: x == selectedOrderBy }));
  const onOrderByChanged = (e: CustomEvent<DropdownButtonItem>) => onChange(e.detail.value);

  return <elsa-dropdown-button text={selectedOrderByText} items={items} icon={<OrderByIcon />} origin={DropdownButtonOrigin.TopRight} onItemSelected={onOrderByChanged} />;
};