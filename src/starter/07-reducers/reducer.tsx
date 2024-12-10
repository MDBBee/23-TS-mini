export type CounterState = {
  count: number;
  status: string;
};

export const initialState: CounterState = {
  count: 0,
  status: 'Pending',
};

type UpdateCountAction = {
  type: 'increment' | 'decrement' | 'reset';
};

type UpdateStatusAction = {
  type: 'setStatus';
  payload: 'active' | 'inactive';
};
type CounterAction = UpdateCountAction | UpdateStatusAction;

export const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    case 'reset':
      return { ...state, count: 0, status: initialState.status };
    case 'setStatus':
      return { ...state, status: action.payload };
    default:
      const unHandledActionType: never = action;
      throw new Error(
        `Unexpected action type: ${unHandledActionType}. Please double check the reducer type`
      );
  }
};
