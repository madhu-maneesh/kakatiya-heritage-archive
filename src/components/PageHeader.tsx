interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="container-edge pt-16 md:pt-24 pb-10 fade-up">
      <div className="rune-divider mb-6">
        <span className="font-mark text-primary">{eyebrow}</span>
      </div>
      <h1 className="font-display text-5xl md:text-7xl text-ink leading-[1.05] max-w-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
      <div className="ornament mt-10" />
    </section>
  );
}
