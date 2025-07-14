function buildVotePayload({ image_id, sub_id = 'test-user', value = 1 } = {}) {
  // value: 1 = upvote, 0 = downvote
  if (!image_id) throw new Error('image_id is required');
  return {
    image_id,
    sub_id,
    value,
  };
}

module.exports = { buildVotePayload }; 