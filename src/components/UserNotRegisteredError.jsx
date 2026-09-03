import React from 'react';

export default function UserNotRegisteredError() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-6">
      <div className="max-w-md rounded-lg border border-slate-200 bg-white p-8 text-center shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Registration required</h2>
        <p className="mt-3 text-sm text-slate-600">
          Your account is not registered for this app yet. Please sign in with an authorized account.
        </p>
      </div>
    </div>
  );
}
