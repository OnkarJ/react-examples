
let queue = []

setInterval(sendProfileQueue, 5000)

function reportProfile(
  id,
  phase,
  actualDuration,
  baseDuration,
  startTime,
  commitTime,
  interactions,
) {
  queue.push({
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
  })
}

function sendProfileQueue() {
  if (!queue.length) {
    return Promise.resolve()
  }
  const queueToSend = [...queue]
  queue = []
  console.info('sending profile queue', queueToSend)
  return Promise.resolve()
}

export default reportProfile
