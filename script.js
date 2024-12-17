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

  // 如果倒计时结束，显示提示
  if (timeRemaining <= 0) {
    countdownElement.textContent = `0 days, 0 hours, 0 minutes, 0 seconds to 2024 Christmas\nMerry Christmas!`;
    return;
  }

  // 将毫秒转换为天、小时、分钟和秒
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // 更新页面内容
  countdownElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds to 2024 Christmas`;
}

// 初始化倒计时
updateCountdown();

// 每秒更新一次倒计时
setInterval(updateCountdown, 1000);
