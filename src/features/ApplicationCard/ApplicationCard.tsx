import React from 'react';
import './ApplicationCard.css';
import { ApplicationType } from '../../types'

interface ApplicationCardProps extends Pick<ApplicationType, 'name' | 'spend'> {
  key: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ( { name, spend} ) => {
  return (
    <div className="card-item">
      <h2>{name}</h2>
      <p><strong>Total Spend:</strong> ${spend}</p>
    </div>
  );
};

export default ApplicationCard;
