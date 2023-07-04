import { useMemo } from 'react';
import Link from './link';
import Header from './header';
import UptimeRobot from './uptimerobot';
import Package from '../../package.json';

function App() {

  const apikeys = useMemo(() => {
    let keys;
    if (process.env.REACT_APP_UPTIMER_API_KEYS) {
      keys = process.env.REACT_APP_UPTIMER_API_KEYS;
    } else if (window.Config && window.Config.ApiKeys) {
      keys = window.Config.ApiKeys;
    } else {
      keys = [];
    }
    if (Array.isArray(keys)) return keys;
    if (typeof keys === 'string') return [keys];
    return [];
  }, []);
  console.log(apikeys)

  return (
    <>
      <Header />
      <div className='container'>
        <div id='uptime'>
          {apikeys.map((key) => (
            <UptimeRobot key={key} apikey={key} />
          ))}
        </div>
        <div id='footer'>
          <p>基于&nbsp;<Link to='https://uptimerobot.com/' text='UptimeRobot' />&nbsp;接口&nbsp;|&nbsp;检测频率&nbsp;5&nbsp;分钟</p>
          <p>Copyright&nbsp;&copy;&nbsp;2023&nbsp;-&nbsp;present&nbsp;<Link to='https://github.com/llnancy/' text='llnancy' />&nbsp;|&nbsp;Powered by&nbsp;<Link to='https://github.com/yb/uptime-status' text='uptime-status' />&nbsp;{Package.version}</p>
        </div>
      </div>
    </>
  );
}

export default App;
