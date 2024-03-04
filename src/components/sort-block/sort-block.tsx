import { SortBlockItem } from '../sort-block-item/sort-block-item';


export function SortBlock() {
  return (
    <div className="sortBlock-wrapper flex">
      <SortBlockItem />
      <SortBlockItem />
      <SortBlockItem />
    </div>
  );
}
