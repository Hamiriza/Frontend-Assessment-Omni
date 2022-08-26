import React, { useEffect, useState } from "react";
import treeService from "./services/tree";
import "./App.css";
import {
  AiFillCaretRight as RightArrow,
  AiFillCaretDown as DownArrow,
  AiFillFolder as Folder,
  AiFillFile as File,
} from "react-icons/ai";

const url = "http://localhost:8080/fs?path=";

const Tree = ({ data = [], dir }) => {
  return (
    <ul>
      {data &&
        data.entries.map((node) => (
          <li key={node.name + dir}>
            <TreeNode node={node} dir={dir} />
          </li>
        ))}
    </ul>
  );
};

const TreeNode = ({ node, dir }) => {
  const [tree, setTree] = useState(null);
  const [childVisible, setChildVisibility] = useState(false);

  dir = dir === "" ? dir + `${node.name}` : dir + `%2F${node.name}`;
  let newUrl = url + dir;

  const hasChild = node.type === "directory" ? true : false;

  useEffect(() => {
    treeService
      .getData(newUrl)
      .then((data) => {
        if (data) {
          setTree(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [newUrl]);

  if (node.name === "root") dir = "";

  const handleFile = (e) => {
    e.preventDefault();
    if (node.type === "file" && tree) {
      alert(`content is ${tree.contents}`);
    }
  };

  return (
    <>
      <div onClick={(e) => setChildVisibility((v) => !v)}>
        {hasChild && (
          <div className="toggler-arrow">
            {childVisible ? <DownArrow /> : <RightArrow />}
          </div>
        )}
        <div className="icon">{hasChild ? <Folder /> : <File />}</div>
        <div className="node-name" onClick={handleFile}>
          {node.name}
        </div>
      </div>

      {hasChild && childVisible && (
        <div>
          <Tree data={tree} dir={dir} />
        </div>
      )}
    </>
  );
};

const App = () => {
  const initData = { name: "root", type: "directory" };

  return (
    <div>
      <h1>React Treeview</h1>
      <TreeNode node={initData} dir="" />
    </div>
  );
};

export default App;
