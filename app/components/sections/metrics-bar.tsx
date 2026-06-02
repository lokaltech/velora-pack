const metrics = [
  {
    value: "15+",
    label: "Years Experience",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    ),
  },
  {
    value: "500+",
    label: "Clients Served",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    ),
  },
  {
    value: "250 Ton",
    label: "Monthly Capacity",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 7.5l-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
      />
    ),
  },
  {
    value: "ISO 9001",
    label: "Certified Company",
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    ),
  },
] as const;

export function MetricsBar() {
  return (
    <section className="border-y border-border bg-white py-6 sm:py-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 min-[480px]:grid-cols-2 md:gap-5 lg:grid-cols-4 lg:gap-6 lg:px-8">
        {metrics.map(({ value, label, icon }) => (
          <div
            key={label}
            className="flex min-w-0 items-center gap-3 rounded-xl border border-border bg-background p-4 shadow-sm sm:gap-4 sm:p-5"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-film-blue/60 text-velora-blue sm:h-12 sm:w-12">
              <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
                {icon}
              </svg>
            </div>
            <div className="min-w-0">
              <p className="truncate text-xl font-bold text-velora-navy sm:text-2xl">{value}</p>
              <p className="text-xs text-text/60 sm:text-sm">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
