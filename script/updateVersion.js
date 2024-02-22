const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');

/**
 * 获取指定时间字符串
 * @param date Date();
 * @return
 */
const getStringDate = (date = new Date()) => {
  const YYYY = String(date.getFullYear());
  const MM = String(date.getMonth() + 1).padStart(2, '0');
  const DD = String(date.getDate()).padStart(2, '0');
  const hh = String(date.getHours()).padStart(2, '0');
  const mm = String(date.getMinutes()).padStart(2, '0');
  const ss = String(date.getSeconds()).padStart(2, '0');

  const timeString = `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
  const monthString = `${YYYY}-${MM}`;
  const dayString = `${YYYY}-${MM}-${DD}`;

  return {
    date,
    YYYY,
    MM,
    DD,
    hh,
    mm,
    ss,
    timeString,
    monthString,
    todayString: dayString,
  };
};

const main = () => {
  const config = path.resolve('./build/index.html');

  console.log('build index file', config);

  // 修改src目录下configs配置文件
  if (fs.existsSync(config)) {
    let content = fs.readFileSync(config).toString();
    const { timeString } = getStringDate() || {};
    const insertStr = `<script>console.warn('【version ${packageJson.version}】build by ${timeString}');</script>`;
    const index = content.indexOf('</body>');
    const part1 = content.slice(0, index);
    const part2 = content.slice(index);
    const updatedContent = `${part1}${insertStr}${part2}`;

    fs.writeFileSync(config, updatedContent);
  } else {
    console.log('no config files found');
  }
};

main();
