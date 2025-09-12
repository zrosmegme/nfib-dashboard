import React from 'react';
import { quarterlyAnalysis } from '../data/quarterlyData';
import './QuarterlyAnalysis.css';

const QuarterlyAnalysis: React.FC = () => {
  return (
    <div className="drivers-analysis">
      <h2 className="section-header">Period Analysis: Key Drivers & Factors</h2>
      
      {quarterlyAnalysis.map((quarter) => (
        <div key={quarter.quarter} className="period-container">
          <div className="period-header">
            <div className="period-title">
              {quarter.quarter} ({quarter.period})
            </div>
            <div className={`period-change change-${quarter.changeDirection}`}>
              <span>Avg Index: {quarter.avgIndex}</span>
              <span style={{ fontWeight: 700 }}>
                {quarter.change > 0 ? '↑' : '↓'} {Math.abs(quarter.change)} pts from previous
              </span>
            </div>
          </div>
          
          <div className="factors-grid">
            <div className="factor-column positive-factors">
              <div className="factor-header">
                <span>↑</span> SUPPORTIVE FACTORS
              </div>
              {quarter.supportiveFactors.map((factor, index) => (
                <div key={index} className="factor-item">
                  <div className="factor-title">
                    {factor.title}
                    {factor.impact && (
                      <span className={`impact-badge impact-${factor.impact}`}>
                        {factor.impact.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="factor-detail">{factor.detail}</div>
                </div>
              ))}
            </div>
            
            <div className="factor-column negative-factors">
              <div className="factor-header">
                <span>↓</span> {quarter.changeDirection === 'negative' ? 'DRIVERS OF DECLINE' : 'LIMITING FACTORS'}
              </div>
              {quarter.limitingFactors.map((factor, index) => (
                <div key={index} className="factor-item">
                  <div className="factor-title">
                    {factor.title}
                    {factor.impact && (
                      <span className={`impact-badge impact-${factor.impact}`}>
                        {factor.impact.toUpperCase()} IMPACT
                      </span>
                    )}
                  </div>
                  <div className="factor-detail">{factor.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuarterlyAnalysis;