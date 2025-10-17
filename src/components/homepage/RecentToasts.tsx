import React from 'react';

interface ToastData {
  participant: string;
  detail: string;
  emoji: string;
}

const RecentToasts: React.FC = () => {
  const recentToasts: ToastData[] = [
    { participant: 'John Doe', detail: 'Perfect golden brown • 5.0 ⭐', emoji: '🍞' },
    { participant: 'Jane Smith', detail: 'Crispy edges • 4.8 ⭐', emoji: '🍞' },
    { participant: 'Mike Johnson', detail: 'Even toasting • 4.6 ⭐', emoji: '🍞' },
  ];

  return (
    <div className="mb-12">
      <h3 className="text-3xl font-bold text-neutral mb-6">Recent Toasts</h3>
      <div className="space-y-4">
        {recentToasts.map((toast, index) => (
          <div key={index} className="card bg-base-200 shadow-toast hover:shadow-toast-hover hover:translate-x-1 transition-all">
            <div className="card-body flex-row items-center gap-6">
              <span className="text-4xl">{toast.emoji}</span>
              <div className="flex-1">
                <p className="text-lg font-semibold text-neutral">{toast.participant}</p>
                <p className="text-base-content/70">{toast.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentToasts;