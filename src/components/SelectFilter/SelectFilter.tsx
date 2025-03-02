import React, { useState } from 'react';
import SelectPriority from '../SelectPriority/SelectPriority';

const SelectFilter: React.FC = () => {
  return (
    <div>
      <h5>Фильтровать</h5>
      <h6>По&nbsp;приоритету:</h6>
      <SelectPriority />
    </div>
  );
}

export default SelectFilter;
