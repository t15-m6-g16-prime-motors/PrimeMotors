import { useContext } from 'react';
import { LayoutContext } from '../providers/LayoutProvider';

const useLayout = () => {
  const layoutContext = useContext(LayoutContext);

  return layoutContext;
};

export default useLayout;
