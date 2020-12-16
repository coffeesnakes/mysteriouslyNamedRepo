const invertTree = () root => {
if (root === null) {
  return null;
}
// temp = node
let temp = root.left;
root.left = root.right;
root.right = temp;
if (root.left){
  invertTree(root.left);
}
if (root.right) {
  invertTree(root.right);
}
return root;
}
// var invertedTree1 = new Node(4);
// invertedTree1.left = new Node(3);
// invertedTree1.right = new Node(1);
// assert.deepEqual(invertTree(tree1), invertedTree1);