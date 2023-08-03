import { getComments } from './commentApi.js';

const commentsCounter = async (itemId) => {
  const commentArr = await getComments(itemId);
  const commentCount = commentArr.length;

  const countSpan = document.querySelector('.comment-counter');
  countSpan.innerHTML = commentCount;

  return commentCount;
};

export default commentsCounter;
