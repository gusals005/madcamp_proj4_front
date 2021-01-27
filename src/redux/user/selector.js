import { createSelector } from 'reselect';
const selectAuth = state => state.authList;

export const selectToken = createSelector(
    [selectAuth],
    authList => authList.jwt
  );
export const selectUserId = createSelector(
  [selectAuth],
  authList => authList.user_id
);
export const selectCoin = createSelector(
  [selectAuth],
  authList => authList.coin
);
export const selectBetting = createSelector(
  [selectAuth],
  authList => authList.betting
);
export const selectName = createSelector(
    [selectAuth],
    authList => authList.name
);
export const selectPrincipal = createSelector(
    [selectAuth],
    authList => authList.principal
);