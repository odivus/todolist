import React, { useState } from 'react';
import SelectPriority from '../SelectPriority/SelectPriority';

const SelectFilter: React.FC = () => {
  return (
    <div>
      <h6>Фильтровать <br /> по приоритету:</h6>
      <SelectPriority />
    </div>
  );
}

export default SelectFilter;
