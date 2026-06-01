export function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-bold uppercase tracking-[0.15em] text-velora-blue">
      {children}
    </p>
  );
}
