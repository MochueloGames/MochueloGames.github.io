function Tag({ label }: { label: string }) {
  return (
    <span className="text-xs px-3 py-1 rounded-full bg-accent/10 text-accent">
      {label}
    </span>
  )
}

export default Tag