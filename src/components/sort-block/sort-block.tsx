import { dataSortBlock } from '../../const';
import { SortBlockItem } from '../sort-block-item/sort-block-item';


export function SortBlock() {
  const keys = Object.keys(dataSortBlock);
  return (
    <div className="sortBlock-wrapper flex">
      <SortBlockItem sortTitle={keys[0]} sortArray={dataSortBlock[keys[0]]}/>
      <SortBlockItem sortTitle={keys[1]} sortArray={dataSortBlock[keys[1]]}/>
      <SortBlockItem sortTitle={keys[2]} sortArray={dataSortBlock[keys[2]]}/>
    </div>
  );
}
