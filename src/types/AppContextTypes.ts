  import { TreeNode } from '.'
  export interface ApplicationType {
    id: string;
    name: string;
    spend: number;
    BCAP1: string;
    BCAP2: string;
    BCAP3: string;
  }

export interface State {
    applications: ApplicationType[];
    filteredApplications: ApplicationType[];
    treeData: TreeNode[];
    filters: {
        spend: number; 
        BCAP: string;  
        minSpend: number,
        maxSpend: number,
    };
}



