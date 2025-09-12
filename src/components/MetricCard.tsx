import React from 'react';
import './MetricCard.css';

interface MetricCardProps {
  label: string;
  value: string | number;
  context?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  label, 
  value, 
  context, 
  trend,
  trendValue 
}) => {
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">
        {value}
        {trend && (
          <span className={`metric-trend trend-${trend}`}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : ''}
            {trendValue && ` ${trendValue}`}
          </span>
        )}
      </div>
      {context && <div className="metric-context">{context}</div>}
    </div>
  );
};

export default MetricCard;