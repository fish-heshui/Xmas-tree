// 获取倒计时元素
const countdownElement = document.getElementById('countdown');

// 定义目标日期（2024年圣诞节）
const targetDate = new Date('December 25, 2024').getTime();

// 更新倒计时
function updateCountdown() {
  // 获取当前时间
  const now = new Date().getTime();

  // 计算剩余时间（毫秒）
  const timeRemaining = targetDate - now;

  // 将毫秒转换为天数
  const daysRemaining = Math.ceil(timeRemaining / (1000 * 60 * 60 * 24));

  // 更新页面内容
  countdownElement.textContent = `${daysRemaining} days to 2024 Christmas!`;
}

// 初始化倒计时
updateCountdown();

// 每小时更新一次倒计时（防止页面长时间打开导致时间不准确）
setInterval(updateCountdown, 60 * 60 * 1000);
