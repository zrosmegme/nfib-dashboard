import React from 'react';
import './App.css';
import MetricCard from './components/MetricCard';
import OptimismChart from './components/OptimismChart';
import QuarterlyAnalysis from './components/QuarterlyAnalysis';
import { currentMetrics } from './data/quarterlyData';

function App() {
  return (
    <div className="dashboard-container">
      <div className="header-section">
        <h1 className="main-title">NFIB Small Business Optimism & Uncertainty Index Analysis</h1>
        <p className="subtitle">
          Tracking quarterly trends in small business sentiment and economic outlook
        </p>
      </div>

      <div className="metrics-row">
        <MetricCard
          label="Optimism Index"
          value={currentMetrics.optimismIndex}
          trend={currentMetrics.optimismChange > 0 ? 'up' : 'down'}
          trendValue={`${Math.abs(currentMetrics.optimismChange)} pts`}
          context={`${currentMetrics.lastUpdated}`}
        />
        <MetricCard
          label="Uncertainty Index"
          value={currentMetrics.uncertaintyIndex}
          trend={currentMetrics.uncertaintyChange > 0 ? 'up' : 'down'}
          trendValue={`${Math.abs(currentMetrics.uncertaintyChange)} pts`}
          context="From July 2025"
        />
        <MetricCard
          label="Top Business Concern"
          value={`${currentMetrics.topConcern} (${currentMetrics.topConcernPercentage}%)`}
          context="Most cited problem"
        />
        <MetricCard
          label="Hiring Difficulty"
          value={`${currentMetrics.hiringDifficulty}%`}
          trend={currentMetrics.hiringDifficulty < 40 ? 'down' : 'up'}
          context="Report hard-to-fill jobs"
        />
      </div>

      <OptimismChart />
      
      <QuarterlyAnalysis />

      <div className="footer-note">
        Source: National Federation of Independent Business (NFIB) Monthly Surveys | Data through {currentMetrics.lastUpdated}
      </div>
    </div>
  );
}

export default App;
