var maxDepth = function(root) {
    if(root) {
        let left = maxDepth(root.left);
        let right = maxDepth(root.right);
        let depth = Math.max(left, right) + 1;
        return depth;
    }
    return 0;
}