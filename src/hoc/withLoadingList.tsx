import React, { useEffect, useState } from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import ShimmerBox from '../common/ShimmerBox';
import { SHIMMER_ANIMATION_TIMER } from '../utils/constant';

/**
 * A higher-order component (HOC) that provides a loading state and a virtualized list for rendering a collection of items.
 *
 * @param {React.ComponentType} Wrapped - The component to be wrapped.
 * @returns {React.FC} - A new component that renders the `Wrapped` component with the loading state and virtualized list.
 */
const withLoadingList = (Wrapped: any) => {
  return ({
    items,
    itemSize,
    itemRenderer,
  }: {
    items: any[];
    itemSize: number;
    itemRenderer: any;
  }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const id = setTimeout(() => setLoading(false), SHIMMER_ANIMATION_TIMER);
      return () => {
        clearTimeout(id);
      };
    }, []);

    const ShimmerLoader = () => (
      <div className="task-list-loader">
        <ShimmerBox />
      </div>
    );

    if (loading || items.length === 0) {
      return <ShimmerLoader />;
    }

    return (
      <main className="main-container-list">
        <AutoSizer>
          {({ height, width }: { height: number; width: number }) => (
            <FixedSizeList
              height={height}
              width={width}
              itemSize={itemSize}
              itemCount={items.length}
            >
              {({ index, style }) => (
                <div style={style} key={items[index].id}>
                  {itemRenderer(items[index])}
                </div>
              )}
            </FixedSizeList>
          )}
        </AutoSizer>
      </main>
    );
  };
};

export default withLoadingList;
