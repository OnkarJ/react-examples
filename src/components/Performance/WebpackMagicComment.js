import * as React from 'react'

const Chart = React.lazy(() => import(/* webpackPrefetch: true */ './HighChart'))

function WebpackMagicComment() {
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
      >
        <input
          type="checkbox"
          checked={showChart}
          onChange={e => setChartSelection(e.target.checked)}
        />
        {
            showChart
                ? 'Hide chart'
                : 'Show Chart'
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

export default WebpackMagicComment
