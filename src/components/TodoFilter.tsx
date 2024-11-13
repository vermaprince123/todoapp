import React, { memo, useCallback, useEffect, useState } from 'react';
import { CustomButton } from '../common';
import { Filter, SHIMMER_ANIMATION_TIMER } from '../utils/constant';
import { useTodoContext } from '../context/TodoContext';
import ShimmerBox from '../common/ShimmerBox';
import './todoFilter.css';
/**
 * TodoFilter component provides filter buttons to toggle between different
 * todo states: All, Completed, and Incomplete. It utilizes context to manage
 * the current filter state and applies the active class to the selected filter.
 * The component initially shows a loading shimmer effect before displaying
 * the filter buttons.
 */
const TodoFilter = () => {
  const [loading, setLoading] = useState(true);
  const { filter, setFilter } = useTodoContext();
  const { All, Completed, Incomplete } = Filter;

  const isActive = useCallback(
    (status: string) => (status === filter ? 'active' : ''),
    [filter]
  );

  const getClass = useCallback(
    (status: string) => `filter-btn ${isActive(status)}`,
    [isActive]
  );

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), SHIMMER_ANIMATION_TIMER);
    return () => {
      clearTimeout(id);
    };
  }, []);

  /**
   * A component that renders a group of CustomButton components that
   * represent different filters: All, Completed, and Incomplete. The
   * active filter is determined by the TodoContext's filter state, and
   * the corresponding button is given the active class. The buttons
   * are also disabled if their corresponding filter is active.
   */
  const ButtonGroup = memo(() => {
    return (
      <>
        <CustomButton
          className={getClass(All)}
          onClick={() => setFilter(All)}
          disabled={filter === All}
          text={All}
        />
        <CustomButton
          className={getClass(Completed)}
          onClick={() => setFilter(Completed)}
          disabled={filter === Completed}
          text={Completed}
        />
        <CustomButton
          className={getClass(Incomplete)}
          onClick={() => setFilter(Incomplete)}
          disabled={filter === Incomplete}
          text={Incomplete}
        />
      </>
    );
  });

  return (
    <div className="filter-btns">
      {loading ? <ShimmerBox /> : <ButtonGroup />}
    </div>
  );
};

export default memo(TodoFilter);
