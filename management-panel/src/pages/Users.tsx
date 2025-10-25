export default function Users() {
  return (
    <div className="card">
      <h2>لیست کاربران</h2>
      <div className="user-list">
        {["علی رضایی", "سارا محمدی", "رضا حسینی", "نرگس کاظمی"].map(
          (name, i) => (
            <div key={i} className="user-item">
              <span>{name}</span>
              <span>فعال</span>
            </div>
          )
        )}
      </div>
    </div>
  );
}
