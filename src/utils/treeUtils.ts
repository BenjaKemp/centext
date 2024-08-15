import { TreeNode } from '../types';
import { ApplicationType } from '../types';

export const groupApplications = (applications: ApplicationType[]): TreeNode[] => {
  
  const tree = applications.reduce((acc, app) => {
    if (!acc[app.BCAP1]) acc[app.BCAP1] = { name: app.BCAP1, children: {} };
    if (!acc[app.BCAP1].children[app.BCAP2]) acc[app.BCAP1].children[app.BCAP2] = { name: app.BCAP2, children: {} };
    if (!acc[app.BCAP1].children[app.BCAP2].children[app.BCAP3]) acc[app.BCAP1].children[app.BCAP2].children[app.BCAP3] = { name: app.BCAP3, children: [] };
    return acc;
  }, {} as { [key: string]: any });

  const convertToTreeNodes = (obj: any): TreeNode[] => {
    return Object.values(obj)
      .sort((a: any, b: any) => a.name.localeCompare(b.name, undefined, { numeric: true }))
      .map((node: any) => ({
        name: node.name,
        children: convertToTreeNodes(node.children),
      }));
  };

  return convertToTreeNodes(tree);
};
