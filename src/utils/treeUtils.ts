import { TreeNode, ApplicationType } from '../types';

// Intermediate type for the reduce step
interface IntermediateNode {
  name: string;
  children: { [key: string]: IntermediateNode };
}

export const groupApplications = (applications: ApplicationType[]): TreeNode[] => {
  // Build the tree structure
  const tree = applications.reduce((acc, app) => {
    const { BCAP1, BCAP2, BCAP3 } = app;

    // Ensure BCAP1 exists
    if (!acc[BCAP1]) {
      acc[BCAP1] = { name: BCAP1, children: {} };
    }

    const level1 = acc[BCAP1];

    // Ensure BCAP2 exists
    if (!level1.children[BCAP2]) {
      level1.children[BCAP2] = { name: BCAP2, children: {} };
    }

    const level2 = level1.children[BCAP2];

    // Ensure BCAP3 exists
    if (!level2.children[BCAP3]) {
      level2.children[BCAP3] = { name: BCAP3, children: {} };
    }

    return acc;
  }, {} as { [key: string]: IntermediateNode });

  // Convert the intermediate tree structure to the TreeNode structure
  const convertToTreeNodes = (obj: { [key: string]: IntermediateNode }): TreeNode[] => {
    return Object.values(obj)
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
      .map((node) => ({
        name: node.name,
        children: convertToTreeNodes(node.children),
      }));
  };

  return convertToTreeNodes(tree);
};
