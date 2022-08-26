const rootUrl = "http://localhost:8080/paths/root";

const getRoot = async () => {
  const response = await fetch(rootUrl);
  return response.json();
};

const getData = async (url) => {
  const response = await fetch(url);
  if (response.ok) {
    return response.json();
  } else {
    throw new Error("Something went wrong");
  }
};

const treeService = { getRoot, getData };

export default treeService;
