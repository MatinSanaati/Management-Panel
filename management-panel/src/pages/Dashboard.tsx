export default function Dashboard() {
  return (
    <div className="card">
      <h2>داشبورد</h2>
      <p>
        خوش آمدید! این یک پنل مدیریت نمونه با React، TypeScript و Redux است.
      </p>
      <div className="stats-grid">
        {[
          { title: "کاربران فعال", value: "1,240" },
          { title: "درآمد ماهانه", value: "۲۴,۵۰۰,۰۰۰ تومان" },
          { title: "پیام‌های جدید", value: "12" },
        ].map((item, i) => (
          <div key={i} className="stat-card">
            <div className="stat-value">{item.value}</div>
            <div className="stat-label">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
