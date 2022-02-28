
export const createComment = async (text, parentId = null) => {
  console.log(text)

  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
  };
};

