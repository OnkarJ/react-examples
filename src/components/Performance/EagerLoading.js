import * as React from 'react'

const highChart = () => import('./HighChart')
const Chart = React.lazy(highChart)

function EagerLoading() {
  const [showChart, setChartSelection] = React.useState(false)

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100%',
        padding: '2rem',
      }}
    >
      <label
        style={{marginBottom: '1rem'}}
        onMouseEnter={highChart}
        onFocus={highChart}
      >
        <input
          type="checkbox"
          checked={showChart}
          onChange={e => setChartSelection(e.target.checked)}
        />
        {
            showChart
                ? 'Click to hide chart'
                : 'Click to show chart'
        }
      </label>
      <div style={{width: 400, height: 400}}>
        <React.Suspense fallback={<div>loading chart...</div>}>
          {showChart ? <Chart /> : null}
        </React.Suspense>
      </div>
    </div>
  )
}

export default EagerLoading
